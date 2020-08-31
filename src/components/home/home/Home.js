import React from 'react';
import user_pic from '../../../assets/images/resources/user-pic.png';
import LeftSideBar from "../side-bar/LeftSideBar";
import RightSideBar from "../side-bar/RightSideBar";
import TopProfiles from "../topProfils/TopProfils";
import Post from "../Post/Post";
import './home.css'
import {currentUser} from "../../../_helper/services";


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
                                            <Post/>
                                            <Post/>
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
                    <h3>Post a project</h3>
                    <div className="post-project-fields">
                        <form>
                            <div className="row">
                                <div className="col-lg-12">
                                    <input type="text" name="title" placeholder="Title"/>
                                </div>
                                <div className="col-lg-12">
                                    <div className="inp-field">
                                        <select>
                                            <option>Category</option>
                                            <option>Category 1</option>
                                            <option>Category 2</option>
                                            <option>Category 3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <input type="text" name="skills" placeholder="Skills"/>
                                </div>
                                <div className="col-lg-12">
                                    <div className="price-sec">
                                        <div className="price-br">
                                            <input type="text" name="price1" placeholder="Price"/>
                                            <i className="la la-dollar"/>
                                        </div>
                                        <span>To</span>
                                        <div className="price-br">
                                            <input type="text" name="price1" placeholder="Price"/>
                                            <i className="la la-dollar"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <textarea name="description" placeholder="Description"/>
                                </div>
                                <div className="col-lg-12 offset-4">
                                    <ul>
                                        <li>
                                            <button className="active" type="submit" value="post">Post</button>
                                        </li>
                                    </ul>
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