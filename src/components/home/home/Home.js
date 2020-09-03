import React from 'react';
import user_pic from '../../../assets/images/resources/user-pic.png';
import LeftSideBar from "../side-bar/LeftSideBar";
import RightSideBar from "../side-bar/RightSideBar";
import TopProfiles from "../topProfils/TopProfils";
import Post from "../Post/Post";
import './home.css'
import {currentUser} from "../../../_helper/services";
import {Upload, message, Button, Input} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css'

const Home = () => {
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

    const onSubmit = ()=>{
        
    }

    const post = {
        _id: "123",
        sujet: "  Lorem ipsum dolor sit amet, https://abdelouahedd.github.io/profile/ consectetur adipisicing elit. Asperiores cumque delectus doloremque\n" +
            "                        eligendi eos explicabo fugit illo inventore ipsa ipsum labore laborum, molestiae officia\n" +
            "                        placeat, quaerat quia saepe sequi ut?",
        files: [
            "https://image.freepik.com/psd-gratuit/sentez-vous-modele-publication-instagram-nature_23-2148607900.jpg",
            "https://picsum.photos/320/250/?random",
            "https://picsum.photos/320/250/?random",
            "https://picsum.photos/320/250/?random",
            "https://picsum.photos/320/250/?random"
            /*            "https://vod-progressive.akamaized.net/exp=1599072762~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2827%2F13%2F339135642%2F1349205911.mp4~hmac=19ce29fa910db58b0e28f1f78d59e04251460f1f4fb9a1bcf92b7ff00822692f/vimeo-prod-skyfire-std-us/01/2827/13/339135642/1349205911.mp4?filename=Pexels+Videos+2386458.mp4",
                        "https://vod-progressive.akamaized.net/exp=1599104393~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2562%2F14%2F362810087%2F1491690859.mp4~hmac=bb330efecb77cdb303d847386e47e14b429ecff02c245309daa7ca90a62bf6a6/vimeo-prod-skyfire-std-us/01/2562/14/362810087/1491690859.mp4?filename=video.mp4",
                        "https://image.freepik.com/psd-gratuit/sentez-vous-modele-publication-instagram-nature_23-2148607900.jpg"*/
        ],
        user: {
            photo_profil: "http://localhost:4000/public/images/ded147df-3f52-46a2-bf17-dbd99b46f8fa-18.jpg",
            nom: "Ennouri",
            prenom: "Abdelouahed"
        },
        createdAt: "19/07/2020",
        commantaires: []
    }

    const settings = {
        name: 'files',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
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
                                            <Post {...post}/>

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
                                    <textarea name="description" rows={4}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <Button type="primary" block>
                                        <span>Add post</span>
                                    </Button>
                                </div>
                                <div className="col-lg-6">
                                    <Upload {...settings} >
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