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


const Home = () => {

    const [files, setFiles] = useState([]);
    const [coverEvent, setCoverEvent] = useState([]);
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState(currentUser);
    const [content, setContent] = useState("");
    const [editOption, setEditOption] = useState(false);
    const [errorCover, setErrorCover] = useState(false);

    const dispatch = useDispatch();



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
                    message.success(`${response.msg}`);
                    dispatch(addPost(newPost));
                    posts.push(newPost);
                    setPosts(posts);
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
            return false;
        },
        coverEvent,
    };

    const onAddEvent = useCallback(
        async (values) => {
            if (coverEvent.length === 0)
                setErrorCover(true);
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
                    message.success(`${response.msg}`);
                    setTimeout(() => handleClose('.post-popup.event'), 2000);
                }).catch(err => message.error('Error logging in please try again', err));
        },
        [coverEvent]
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
                    response.posts.map((post)=>arrayPost.push(post));
                    response.events.map((event)=>arrayPost.push(event));
                    // arrayPost.push(response.events);
                    arrayPost.sort((p,e)=>new Date(p.createdAt) - new Date(e.createdAt));
                    dispatch(getAllPosts(response.posts));
                    setPosts(arrayPost);
                })
                .catch(err => message.error('Error logging in please try again', err));
        },
        [dispatch],
    );

    useEffect(() => {
        fetchData();
    }, [fetchData]);


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
                        <form>
                            <div className="row">
                                <div className="col-lg-6">
                                    <textarea name="description" rows={4} value={content}
                                        onChange={event => setContent(event.target.value)} />
                                </div>
                                <div className="col-lg-6">
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
                    <p style={{ cursor: 'pointer' }} onClick={() => handleClose('.post-popup.sondage')}><i className="la la-times-circle-o" /></p>
                </div>
            </div>
        </>
    );
};

export default Home;