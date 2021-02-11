import React, { useCallback, useState } from 'react';
import { URL } from "../../redux/_helper/utility";
import cuver from '../../assets/images/resources/company-cover.jpg';
import { currentUser } from '../../_helper/services';
import '../profile/profile.css'
import '../home/home/home.css';
import './groupProfil.css';
import TopProfiles from '../home/topProfils/TopProfils';
import ListPost from '../home/Post/ListPost';
import { Button, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Dragger from 'antd/lib/upload/Dragger';
import { InboxOutlined } from '@ant-design/icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useToasts } from 'react-toast-notifications';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

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



const GroupProfil = (props) => {

    const [files, setFiles] = useState([]);
    const [coverEvent, setCoverEvent] = useState([]);
    const [content, setContent] = useState("");
    const [editOption, setEditOption] = useState(false);
    const [errorCover, setErrorCover] = useState(false);
    const [options, setoptions] = useState([])
    const [option, setoption] = useState("")
    const [msgErrorOption, setMsgErrorOption] = useState("");
    const [group, setGroup] = useState({});
    const [posts, setPost] = useState([]);
    const [request, setRequest] = useState([]);


    const param = useParams();
    const { addToast } = useToasts();


    useEffect(() => {
        fetch(`${URL}/communaute/${param.id}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')
                }
            })
            .then(res => res.json())
            .then((res) => {
                console.info('res ==>', res);
                setGroup(res.communaute);
                setRequest(res.request);
            })
            .catch(err => {
                console.error(err);
                addToast(err.toString(), { appearance: 'error', autoDismiss: true },)
            });
    }, [param.id, addToast]);

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
            formData.append('group', param.id);
            await fetch(`${URL}/posts/createPost`, {
                method: 'POST',
                body: formData,
                headers: {
                    'authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')
                }
            }).then(res => res.json())
                .then((response) => {
                    const newPost = {
                        ...response.post,
                        user: currentUser
                    }
                    if (response.success === true) {
                        message.success(`${response.msg}`);
                        posts.unshift(newPost);
                        setPost(posts)
                    }
                    setTimeout(() => handleClose('.post-popup.pst-pj'), 2000);
                }).catch(err => message.error('Error logging in please try again', err));
        },
        [content, files, param.id, posts],
    );

    const onSubmitAddEvent = async (values, actions) => {
        try {
            onAddEvent(values);
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
                    posts.unshift(response.sondage);
                    setPost(posts);
                    if (response.success === true) {
                        addToast(response.msg, { appearance: 'success', autoDismiss: true },);
                        setTimeout(() => handleClose('.post-popup.sondage'), 2000);
                    } else {
                        addToast(response.error, { appearance: 'error', autoDismiss: true },);
                    }
                }).catch(err => message.error('Error logging in please try again', err));
        },
        [addToast, posts],
    );


    const onSubmitAddVote = async (values, actions) => {
        try {
            const afterDate = new Date().setDate(new Date().getDate() + values.end_date);
            const vote = {
                description: values.description,
                date_fin: afterDate,
                choix: options,
                group: param.id
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

    const acceptRequest = async (requestParam) => {
        await fetch(`${URL}/communaute/validateRequest/${param.id}`, {
            method: 'POST',
            headers: {
                'authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')
            }
        }
        ).then(res => res.json())
            .then(response => {
                console.log('res for accept', response);
                if (response.success === true) {
                    message.success(`${response.msg}`);
                    let requests = request.filter(req => req._id !== requestParam);
                    setRequest(requests);
                } else {
                    message.error(`${response.error}`);
                }
            })
    }

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
            formData.append("group", param.id)
            await fetch(`${URL}/event/createEvent`, {
                method: 'POST',
                body: formData,
                headers: {
                    'authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')
                }
            }).then(res => res.json())
                .then((response) => {
                    if (response.success === true) {
                        message.success(`${response.msg}`);
                        posts.unshift(response.event);
                        setPost(posts);
                    }
                    setTimeout(() => handleClose('.post-popup.event'), 2000);
                }).catch(err => message.error('Error logging in please try again', err));
        },
        [coverEvent, param.id, posts]
    );

    const fetchData = useCallback(
        async () => {
            await fetch(`${URL}/posts/${param.id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')
                }
            }).then(res => res.json())
                .then((response) => {
                    const arrayPost = [];
                    response.posts.map((post) => arrayPost.push(post));
                    response.events.map((event) => arrayPost.push(event));
                    response.sondages.map((sondage) => arrayPost.push(sondage));
                    arrayPost.sort((p, e) => new Date(p.createdAt) - new Date(e.createdAt));
                    setPost(arrayPost);
                })
                .catch(err => message.error('Error logging in please try again', err));
        },
        [param.id],
    );

    useEffect(() => {
        fetchData()
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
            <div className="wrapper">
                <section className="cover-sec">
                    <img src={cuver} alt={"cuver img"}
                        className="img-fluid bg-img" />
                </section>
                <main>
                    <div className="main-section">
                        <div className="container">
                            <div className="main-section-data">
                                <div className="row">
                                    <div className="col-lg-3 justify-content-center">
                                        <div className="main-left-sidebar">
                                            <div className="user_profile">
                                                <div className="user-pro-img">
                                                    <img src={URL + group?.photo_com} alt="" />
                                                </div>
                                                <div className="user_pro_status">
                                                    <ul className="flw-status">
                                                        <li>
                                                            <span>Admin</span>
                                                            <b>{group.admin?.nom}</b>
                                                        </li>
                                                        <li>
                                                            <span>Members</span>
                                                            <b>{group.members?.length}</b>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="main-ws-sec">
                                            <div className="container">
                                                <div className="list-group list-group-horizontal" id="list-tab" role="tablist">
                                                    <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
                                                    <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Members</a>
                                                    <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Files</a>
                                                    <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Request</a>
                                                </div>

                                                {/* Content of each Tab */}
                                                <div className="tab-content" id="nav-tabContent">

                                                    {/* Home of group  */}
                                                    <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                                                        <div className="my-2 main-ws-sec">
                                                            {/*add post form*/}
                                                            <div className="post-topbar">
                                                                <div className="user-picy">
                                                                    <img
                                                                        src={URL + currentUser.photo_profil}
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
                                                    {/* Member of Group  */}
                                                    <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                                                        <div className="my-2 shadow rounded py-4 px-2 bg-white">
                                                            <div className="input-group input-group-joined input-group-joined-xl border-0">
                                                                <input className="form-control" type="text" placeholder="Search..." aria-label="Search" autoFocus="" />
                                                                <div className="input-group-append">
                                                                    <span className="input-group-text">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                                            strokeLinecap="round" strokeLinejoin="round"
                                                                            className="feather feather-search"><circle cx="11" cy="11" r="8"></circle>
                                                                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="forum-questions mt-5">
                                                                {
                                                                    group?.members?.map(user =>
                                                                        <div key={user._id} className="usr-question">
                                                                            <div className="usr_img">
                                                                                <img src={URL + user.photo_profil} alt="" />
                                                                            </div>
                                                                            <div className="usr_quest">
                                                                                <h3>{user.nom + " " + user.prenom}</h3>
                                                                                <ul className="react-links">
                                                                                    <li><i className="fa fa-email"></i>{user.email}</li>
                                                                                </ul>
                                                                                <ul className="quest-tags">
                                                                                    <li>{user.fonction}</li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Files of group */}
                                                    <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">

                                                        {/* Table of doc group */}
                                                        <div className="card text-white bg-white my-2">
                                                            <div className="card-body">
                                                                <div className="table-responsive">
                                                                    <div className="row justify-content-between">
                                                                        <div className="col-sm-12 col-md-6">
                                                                            <div id="user_list_datatable_info" className="dataTables_filter">
                                                                                <form className="mr-3 position-relative">
                                                                                    <div className="form-group mb-0">
                                                                                        <input type="search" className="form-control" id="exampleInputSearch" placeholder="Search" />
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <table className="files-lists table table-striped mt-4">
                                                                        <thead>
                                                                            <tr>

                                                                                <th scope="col">File Name</th>
                                                                                <th scope="col">File Type</th>
                                                                                <th scope="col">Date</th>
                                                                                <th scope="col">Size</th>
                                                                                <th scope="col">Author</th>
                                                                                <th scope="col">Action</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <div className="d-flex flex-row pt-2">
                                                                                        <i className="fa fa-file-pdf-o mr-2 fa-2x" aria-hidden="true"></i>
                                                                                        <p>post report</p>
                                                                                    </div>
                                                                                </td>
                                                                                <td>Document</td>
                                                                                <td> Mar 12, 2020</td>
                                                                                <td>390 kb</td>
                                                                                <td>Anna Sthesia</td>
                                                                                <td>
                                                                                    <div className="flex align-items-center list-user-action">
                                                                                        <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Download" href="#dowload">
                                                                                            <i className="fa fa-download fa-2x" aria-hidden="true"></i>
                                                                                        </a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <div className="d-flex flex-row pt-2">
                                                                                        <i className="fa fa-file-word-o mr-2 fa-2x" aria-hidden="true"></i>
                                                                                        <p>post report</p>
                                                                                    </div>
                                                                                </td>
                                                                                <td>Document</td>
                                                                                <td> Mar 12, 2020</td>
                                                                                <td>390 kb</td>
                                                                                <td>Anna Sthesia</td>
                                                                                <td>
                                                                                    <div className="flex align-items-center list-user-action">
                                                                                        <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Download" href="#dowload">
                                                                                            <i className="fa fa-download fa-2x" aria-hidden="true"></i>
                                                                                        </a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <div className="d-flex flex-row pt-2">
                                                                                        <i className="fa fa-file-image-o mr-2 fa-2x" aria-hidden="true"></i>
                                                                                        <p>post report</p>
                                                                                    </div>
                                                                                </td>
                                                                                <td>Document</td>
                                                                                <td> Mar 12, 2020</td>
                                                                                <td>390 kb</td>
                                                                                <td>Anna Sthesia</td>
                                                                                <td>
                                                                                    <div className="flex align-items-center list-user-action">
                                                                                        <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Download" href="#dowload">
                                                                                            <i className="fa fa-download fa-2x" aria-hidden="true"></i>
                                                                                        </a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    {/* Request users */}
                                                    <div className="tab-pane fade my-3" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
                                                        <div className="container">
                                                            <div className="row">
                                                                {
                                                                    request?.map(req =>
                                                                        <div className="col-lg-6" key={req._id}>
                                                                            <div className="card bg-light text-white text-center p-2" style={{ maxWidth: "400px" }}>
                                                                                <div className="row d-flex flex-wrap align-items-center">
                                                                                    <div className="col-md-4 my-2">
                                                                                        <img className="img-account-profile rounded-circle mb-2" src={URL + req.user.photo_profil} alt="..." />
                                                                                    </div>
                                                                                    <div className="col-md-8">
                                                                                        <div className="card-body">
                                                                                            <Link to={'/profile/' + req.user._id}>
                                                                                                <h5 className="card-title">{req.user.nom + " " + req.user.prenom}</h5>
                                                                                            </Link>
                                                                                            <p className="card-text">send request to join the group</p>
                                                                                            <button type="button" className="btn btn-primary btn-sm btn-block" onClick={() => acceptRequest(req._id)}>accept</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div >
            {/*pop up Add post*/}
            < div className="post-popup pst-pj" >
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
            </div >
            {/*pop up Add event*/}
            < div className="post-popup event" >
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
            </div >
            {/*pop up Add sondage*/}
            < div className="post-popup sondage" >
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
            </div >
        </>
    );
}

export default GroupProfil;