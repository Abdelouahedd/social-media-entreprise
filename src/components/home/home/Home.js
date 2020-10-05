import React, { useCallback, useState } from 'react';
import user_pic from '../../../assets/images/resources/user-pic.png';
import LeftSideBar from "../side-bar/LeftSideBar";
import RightSideBar from "../side-bar/RightSideBar";
import TopProfiles from "../topProfils/TopProfils";
import './home.css'
import { currentUser } from "../../../_helper/services";
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
import { URL } from "../../../redux/_helper/utility";
import ListPost from "../Post/ListPost";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPost, getAllPosts } from '../../../redux/actions/postActions';
import Dragger from 'antd/lib/upload/Dragger';
import { InboxOutlined } from '@ant-design/icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useToasts } from 'react-toast-notifications';

const schemaEvent = Yup.object().shape({
    titre: Yup.string()
        .required('Required'),
    date_debut: Yup.date()
        .min(new Date(), 'Please choose future date')
        .required('Required'),
    date_fin: Yup.date()
        .min(Yup.ref('date_debut'), 'End date must be grater than start date')
        .required('Required'),
    place: Yup.string()
        .required('Required'),
});

const schemaSondage = Yup.object().shape({
    description: Yup.string().required('Required'),
});

const Home = () => {

    const [files, setFiles] = useState([]);
    const [coverEvent, setCoverEvent] = useState([]);
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState(currentUser);
    const [content, setContent] = useState("");
    const [editOption, setEditOption] = useState(false);
    const [errorCover, setErrorCover] = useState(false);
    const [options, setoptions] = useState([])
    const [option, setoption] = useState("")
    const [msgErrorOption, setMsgErrorOption] = useState("")
    const dispatch = useDispatch();
    const { addToast } = useToasts()




    const handleShow = (selector) => {
        const postPopUp = document.querySelector(selector);
        const root = document.querySelector('.wrapper');
        const nav = document.querySelector('.iq-top-navbar');
        postPopUp.classList.add('active');
        root.classList.add('overlay');
        nav.classList.add('active');
        setEditOption(false);
    }
    const handleClose = (selector) => {
        const root = document.querySelector('.wrapper');
        const nav = document.querySelector('.iq-top-navbar');
        const postPopUp = document.querySelector(selector);
        root.classList.remove('overlay');
        nav.classList.remove('active');
        postPopUp.classList.remove('active');
    }

    const onSubmit = useCallback(
        async () => {
            const formData = new FormData();
            files.forEach(file => {
                formData.append('files', file);
            });
            formData.append('sujet', content);
            await fetch(`${URL}/posts/createPost`, {
                method: 'POST',
                body: formData,
                headers: {
                    'authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')
                }
            }).then(res => res.json())
                .then((response) => {
                    console.info(response);
                    const newPost = {
                        ...response.post,
                        user: currentUser
                    }
                    if (response.success === true) {
                        message.success(`${response.msg}`);
                        dispatch(addPost(newPost));
                        posts.push(newPost);
                        setPosts(posts);
                    }
                    setTimeout(() => handleClose('.post-popup.pst-pj'), 2000);
                }).catch(err => message.error('Error logging in please try again', err));
        },
        [content, dispatch, files, posts],
    );

    const onSubmitAddEvent = async (values, actions) => {
        try {
            console.log("submit");
            dispatch(onAddEvent(values));
            actions.setStatus({ success: true })
        } catch (error) {
            actions.setStatus({ success: false })
            actions.setSubmitting(false)
            actions.setErrors({ submit: error.message })
        }
    }


    const onAddVote = useCallback(
        async (vote) => {
            await fetch(`${URL}/sondage/addSondage`, {
                method: 'POST',
                body: JSON.stringify(vote),
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')
                }
            }).then(res => res.json())
                .then((response) => {
                    console.log(response);
                    dispatch(addPost(response.sondage));
                    if (response.success === true) {
                        addToast(response.msg, { appearance: 'success', autoDismiss: true },);
                        setTimeout(() => handleClose('.post-popup.sondage'), 2000);
                    } else {
                        addToast(response.error, { appearance: 'error', autoDismiss: true },);
                    }
                }).catch(err => message.error('Error logging in please try again', err));
        },
        [addToast, dispatch],
    )



    const onSubmitAddVote = async (values, actions) => {
        try {
            const afterDate = new Date().setDate(new Date().getDate() + values.end_date);
            const vote = {
                description: values.description,
                date_fin: afterDate,
                choix: options,
            }
            await onAddVote(vote);
            actions.setStatus({ success: true })
        } catch (error) {
            actions.setStatus({ success: false })
            actions.setSubmitting(false)
            actions.setErrors({ submit: error.message })
        }
    }



    const formik = useFormik({
        initialValues: {
            titre: '',
            date_debut: '',
            date_fin: '',
            place: ''
        },
        validationSchema: schemaEvent,
        onSubmit: onSubmitAddEvent,
    });

    const formikVote = useFormik({
        initialValues: {
            description: '',
            end_date: 1
        },
        validationSchema: schemaSondage,
        onSubmit: onSubmitAddVote,
    })

    const uploadSettings = {
        onRemove: file => {
            const index = files.indexOf(file);
            const newFileList = files.slice();
            newFileList.splice(index, 1);
            setFiles(newFileList);
            return {
                fileList: newFileList,
            };
        },
        beforeUpload: file => {
            setFiles([...files, file]);
            return false;
        },
        files,
    };


    const uploadSettingsEvent = {
        fileList: coverEvent,
        onRemove: file => {
            const index = coverEvent.indexOf(file);
            const newFileList = coverEvent.slice();
            newFileList.splice(index, 1);
            setCoverEvent(newFileList);
            return {
                fileList: newFileList,
            };
        },
        beforeUpload: file => {
            setCoverEvent([file]);
            setErrorCover(false);
            return false;
        },
        coverEvent,
    };

    const onAddEvent = useCallback(
        async (values) => {
            if (coverEvent.length === 0) {
                setErrorCover(true);
                return;
            }
            const formData = new FormData();
            coverEvent.forEach(file => formData.append('cover_img', file));
            formData.append("titre", values.titre)
            formData.append("date_debut", values.date_debut)
            formData.append("date_fin", values.date_fin)
            formData.append("place", values.place)
            await fetch(`${URL}/event/createEvent`, {
                method: 'POST',
                body: formData,
                headers: {
                    'authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')
                }
            }).then(res => res.json())
                .then((response) => {
                    console.info(response);
                    if (response.success === true) {
                        message.success(`${response.msg}`);
                        dispatch(addPost(response.event));
                    }
                    setTimeout(() => handleClose('.post-popup.event'), 2000);
                }).catch(err => message.error('Error logging in please try again', err));
        },
        [coverEvent, dispatch]
    )

    useEffect(() => {
        setUser(currentUser);
    }, [user]);

    const fetchData = useCallback(
        async () => {
            await fetch(`${URL}/posts/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')
                }
            }).then(res => res.json())
                .then((response) => {
                    console.log(response);
                    const arrayPost = [];
                    response.posts.map((post) => arrayPost.push(post));
                    response.events.map((event) => arrayPost.push(event));
                    response.sondages.map((sondage) => arrayPost.push(sondage));
                    arrayPost.sort((p, e) => new Date(p.createdAt) - new Date(e.createdAt));
                    dispatch(getAllPosts(arrayPost));
                    setPosts(arrayPost);
                })
                .catch(err => message.error('Error logging in please try again', err));
        },
        [dispatch],
    );

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handlerChange = (e) => setoption(e.target.value);

    const onAddOption = (e) => {
        e.preventDefault();
        if (option === "") {
            setMsgErrorOption("Option is required !!")
            return false;
        }
        setMsgErrorOption("")
        options.push(option);
        setoptions(options);
        setoption("");
    }

    const onRemoveItem = (option) => {
        const newOption = options.filter(op => op !== option)
        setoptions(newOption);
    }


    return (
        <>
            <main className="home-main">
                <div className="main-section">
                    <div className="container">
                        <div className="main-section-data">
                            <div className="row">
                                <LeftSideBar />
                                <div className="col-lg-6 col-md-8 no-pd">
                                    <div className="main-ws-sec">
                                        {/*add post form*/}
                                        <div className="post-topbar">
                                            <div className="user-picy">
                                                <img
                                                    src={user.photo_profil === "" ? user_pic : URL + user.photo_profil}
                                                    alt="" />
                                            </div>
                                            <div className="post-st">
                                                <div className="ed-opts">
                                                    <p className="ed-opts-open" style={{ cursor: "pointer" }}
                                                        onClick={() => setEditOption(!editOption)}
                                                    >
                                                        <i className="la la-bars" />
                                                    </p>
                                                    <ul
                                                        className={editOption ? "ed-options active" : "ed-options"}
                                                        style={{ width: "200px" }}
                                                    >
                                                        <li>
                                                            <button className='btn btn-danger btn-sm btn-block' onClick={() => handleShow('.post-popup.pst-pj')}>
                                                                Add a post
                                                        </button>
                                                        </li>
                                                        <li>
                                                            <button className='btn btn-danger btn-sm btn-block' onClick={() => handleShow('.post-popup.event')}>
                                                                Add a Event
                                                        </button>
                                                        </li>
                                                        <li>
                                                            <button className='btn btn-danger btn-sm btn-block' onClick={() => handleShow('.post-popup.sondage')}>
                                                                Add a sondage
                                                        </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                        {/*end of add post form*/}
                                        {/*start list view of posts*/}
                                        <div className="posts-section">
                                            <TopProfiles />
                                            <ListPost posts={posts} />
                                            {/*  end list view of posts*/}
                                        </div>
                                    </div>
                                </div>
                                <RightSideBar />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/*pop up Add post*/}
            <div className="post-popup pst-pj">
                <div className="post-project">
                    <h3>Add a post</h3>
                    <div className="post-project-fields">
                        <form>
                            <div className="row">
                                <div className="col-lg-12">
                                    <textarea name="description" rows={4} value={content}
                                        onChange={event => setContent(event.target.value)} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <Button type="primary" block onClick={onSubmit}>
                                        <span>Add post</span>
                                    </Button>
                                </div>
                                <div className="col-lg-6">
                                    {/*<Upload {...settings} >*/}
                                    <Upload {...uploadSettings}>
                                        <Button icon={<UploadOutlined />} block>Click to Upload</Button>
                                    </Upload>
                                </div>
                            </div>
                        </form>
                    </div>
                    <p style={{ cursor: 'pointer' }} onClick={() => handleClose('.post-popup.pst-pj')}><i className="la la-times-circle-o" /></p>
                </div>
            </div>
            {/*pop up Add event*/}
            <div className="post-popup event">
                <div className="post-project">
                    <h3>Add a Event</h3>
                    <div className="post-project-fields">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="row">
                                <div className="col-lg-12 no-pdd">
                                    <div className="sn-field">
                                        <input type="text" name="titre" placeholder="Title" onChange={formik.handleChange} />
                                        {formik.touched.titre && formik.errors.titre ? (
                                            <div className="sn-field alert alert-danger">{formik.errors.titre}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="sn-field">
                                        <input type="date" name="date_debut" placeholder="start date" onChange={formik.handleChange} />
                                        {formik.touched.date_debut && formik.errors.date_debut ? (
                                            <div className="sn-field alert alert-danger">{formik.errors.date_debut}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="sn-field">
                                        <input type="date" name="date_fin" placeholder="end date" onChange={formik.handleChange} />
                                        {formik.touched.date_fin && formik.errors.date_fin ? (
                                            <div className="sn-field alert alert-danger">{formik.errors.date_fin}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="sn-field no-pdd">
                                        <input type="text" name="place" placeholder="place" onChange={formik.handleChange} />
                                        {formik.touched.place && formik.errors.place ? (
                                            <div className="sn-field alert alert-danger">{formik.errors.place}</div>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <Dragger {...uploadSettingsEvent}>
                                    <p className="ant-upload-drag-icon">
                                        <InboxOutlined />
                                    </p>
                                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                    <p className="ant-upload-hint">
                                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                                        band files
                                        </p>
                                </Dragger>
                                {errorCover ? (
                                    <div className="sn-field alert alert-danger py-2">Cover for event is required</div>
                                ) : null}
                            </div>
                            <div className="col-lg-6 py-2 offset-lg-3 justify-content-center">
                                <button className="btn btn-primary btn-block" type="submit" onClick={formik.handleSubmit}>
                                    Add Event
                                </button>
                            </div>
                        </form>
                    </div>
                    <p style={{ cursor: 'pointer' }} onClick={() => handleClose('.post-popup.event')}><i className="la la-times-circle-o" /></p>
                </div>
            </div>
            {/*pop up Add sondage*/}
            <div className="post-popup sondage">
                <div className="post-project">
                    <h3>Add a post</h3>
                    <div className="post-project-fields">
                        <form onSubmit={formikVote.handleSubmit}>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input type="text"
                                            className="form-control"
                                            name="description" id="description"
                                            aria-describedby="helpId" placeholder="Add Description for your vote"
                                            onChange={formikVote.handleChange}
                                        />
                                    </div>
                                    {formikVote.touched.description && formikVote.errors.description ? (
                                        <div className="sn-field alert alert-danger">{formikVote.errors.description}</div>
                                    ) : null}
                                </div>
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-lg-5 my-auto">
                                            <p className="">Select the time for stop this vote :</p>
                                        </div>
                                        <div className="col-lg">
                                            <div className="form-group">
                                                <select mode="tags" className="form-control form-control-sm" name="end_date"
                                                    id="end-date"
                                                    placeholder="add max date for this vote"
                                                    onChange={formikVote.handleChange}
                                                >
                                                    <option select="true" value="1">1 day</option>
                                                    <option value="7">1 week</option>
                                                    <option value="30">1 month</option>
                                                </select>
                                                {formikVote.touched.end_date && formikVote.errors.end_date ? (
                                                    <div className="sn-field alert alert-danger">{formikVote.errors.end_date}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-lg-8 my-auto">
                                            <div className="form-group">
                                                <input type="text"
                                                    className="form-control"
                                                    name="option"
                                                    id="option"
                                                    aria-describedby="helpId"
                                                    placeholder="Options"
                                                    value={option}
                                                    required
                                                    onChange={(e) => handlerChange(e)}
                                                />
                                            </div>
                                            {
                                                msgErrorOption !== "" ?
                                                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                                        <strong>{msgErrorOption}</strong>
                                                    </div> : null
                                            }
                                        </div>
                                        <div className="col-lg">
                                            <button type="button" onClick={onAddOption} className="btn btn-danger btn-sm btn-block">
                                                <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12" >
                                    <ul className="list-inline px-2">
                                        {
                                            options.map((op, index) =>
                                                <li key={index} className="list-inline-item list-group-item">
                                                    {op}
                                                    <i className="fa fa-trash text-danger "
                                                        aria-hidden="true" style={{ marginLeft: "5px", cursor: 'pointer' }}
                                                        onClick={() => onRemoveItem(op)}
                                                    ></i>
                                                </li>
                                            )
                                        }

                                    </ul>
                                </div>
                                <div className="col-lg-6 py-2 offset-lg-3 justify-content-center">
                                    <button className="btn btn-success btn-block" type="submit" onClick={formikVote.handleSubmit}>
                                        Add Vote
                                </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <p style={{ cursor: 'pointer' }} onClick={() => handleClose('.post-popup.sondage')}><i className="la la-times-circle-o" /></p>
                </div>
            </div>
        </>
    );
};

export default Home;