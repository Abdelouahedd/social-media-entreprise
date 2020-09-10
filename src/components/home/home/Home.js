import React, {useState} from 'react';
import LeftSideBar from "../side-bar/LeftSideBar";
import RightSideBar from "../side-bar/RightSideBar";
import TopProfiles from "../topProfils/TopProfils";
import './home.css'
import {Button, message, Upload} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css'
import {URL} from "../../../redux/_helper/utility";
import ListPost from "../Post/ListPost";
import {currentUser} from "../../../_helper/services";
import user_pic from "../../../assets/images/page-img/06.jpg"
const Home = () => {

    const [files, setFiles] = useState([]);
    const [content, setContent] = useState("");

    const handleShow = () => {
        const postPopUp = document.querySelector('.post-popup.pst-pj');
        const root = document.querySelector('.wrapper');
        const nav = document.querySelector('.iq-top-navbar');
        postPopUp.classList.add('active');
        root.classList.add('overlay');
        nav.classList.add('active');
    }
    const handleClose = () => {
        const root = document.querySelector('.wrapper');
        const nav = document.querySelector('.iq-top-navbar');
        const postPopUp = document.querySelector('.post-popup.pst-pj');
        root.classList.remove('overlay');
        nav.classList.remove('active');
        postPopUp.classList.remove('active');
    }

    const onSubmit = () => {
        const formData = new FormData();
        files.forEach(file => {
            formData.append('files', file);
        });
        formData.append('sujet', content);
        fetch(`${URL}/posts/createPost`, {
            method: 'POST',
            body: formData,
            headers: {
                'authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')
            }
        }).then(res => res.json())
            .then((response) => {
                console.info(response);
                if (response.status === 200) {
                    message.success(`${response.msg}`);
                } else {
                    setTimeout(() => {
                        message.error(`${response.msg}`);
                    }, 1000);
                }
            }).catch(err => message.error('Error logging in please try again', err));
    }
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



    return (
        <>
            <main className="home-main">
                <div className="main-section">
                    <div className="container">
                        <div className="main-section-data">
                            <div className="row">
                                <LeftSideBar/>
                                <div className="col-lg-6 col-md-8 no-pd">
                                    <div className="main-ws-sec">
                                        {/*add post form*/}
                                             <div className="post-topbar">
                                            <div className="user-picy">
                                                <img
                                                    src={currentUser.photo_profil == "" ? user_pic : currentUser.photo_profil}
                                                    alt=""/>
                                            </div>
                                            <div className="post-st">
                                                <ul>
                                                    <li>
                                                        <a className="post_project" href="#" title=""
                                                           onClick={handleShow}>Add a post</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/*end of add post form*/}
                                        {/*start list view of posts*/}
                                        <div className="posts-section">
                                            <TopProfiles/>
                                            <ListPost/>
                                            {/*  end list view of posts*/}
                                        </div>
                                    </div>
                                </div>
                                <RightSideBar/>
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
                                              onChange={event => setContent(event.target.value)}/>
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
                                        <Button icon={<UploadOutlined/>} block>Click to Upload</Button>
                                    </Upload>
                                </div>
                            </div>
                        </form>
                    </div>
                    <a href="#" title="" onClick={handleClose}><i className="la la-times-circle-o"/></a>
                </div>
            </div>
        </>
    );
};

export default Home;