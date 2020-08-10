import React, {Fragment } from 'react';
import logo from '../../assets/images/logo.png'
import home from '../../assets/images/icon1.png';
import companie from '../../assets/images/icon2.png'
import projects from '../../assets/images/icon3.png'
import profiles from '../../assets/images/icon4.png'
import jobs from '../../assets/images/icon5.png'
import messages from '../../assets/images/icon6.png'
import notification from '../../assets/images/icon7.png'
import avater from "../../assets/images/resources/ny-img3.png"
import user from "../../assets/images/resources/user.png"

const NavBar = () => {
    return (
        <Fragment>
            <header>
                <div className="container">
                    <div className="header-data">
                        <div className="logo">
                            <a href="/" title=""><img src={logo} alt=""/></a>
                        </div>
                        <div className="search-bar">
                            <form>
                                <input type="text" name="search" placeholder="Search..."/>
                                <button type="submit"><i className="la la-search"/></button>
                            </form>
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <a href="/" title="">
                                        <span><img src={home} alt=""/></span>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="companies.html" title="">
                                        <span><img src={companie} alt=""/></span>
                                        Companies
                                    </a>
                                    <ul>
                                        <li><a href="companies.html" title="">Companies</a></li>
                                        <li><a href="company-profile.html" title="">Company Profile</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="projects.html" title="">
                                        <span><img src={projects} alt=""/></span>
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a href="profiles.html" title="">
                                        <span><img src={profiles} alt=""/></span>
                                        Profiles
                                    </a>
                                    <ul>
                                        <li><a href="user-profile.html" title="">User Profile</a></li>
                                        <li><a href="my-profile-feed.html" title="">my-profile-feed</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="jobs.html" title="">
                                        <span><img src={jobs} alt=""/></span>
                                        Jobs
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="" className="not-box-openm">
                                        <span><img src={messages} alt=""/></span>
                                        Messages
                                    </a>
                                    <div className="notification-box msg" id="message">
                                        <div className="nt-title">
                                            <h4>Setting</h4>
                                            <a href="#" title="">Clear all</a>
                                        </div>
                                        <div className="nott-list">
                                            <div className="notfication-details">
                                                <div className="noty-user-img">
                                                    <img src="images/resources/ny-img1.png" alt=""/>
                                                </div>
                                                <div className="notification-info">
                                                    <h3><a href="messages.html" title="">Jassica William</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                                        do.</p>
                                                    <span>2 min ago</span>
                                                </div>
                                            </div>
                                            <div className="notfication-details">
                                                <div className="noty-user-img">
                                                    <img src="images/resources/ny-img2.png" alt=""/>
                                                </div>
                                                <div className="notification-info">
                                                    <h3><a href="messages.html" title="">Jassica William</a></h3>
                                                    <p>Lorem ipsum dolor sit amet.</p>
                                                    <span>2 min ago</span>
                                                </div>
                                            </div>
                                            <div className="notfication-details">
                                                <div className="noty-user-img">
                                                    <img src={avater} alt=""/>
                                                </div>
                                                <div className="notification-info">
                                                    <h3><a href="messages.html" title="">Jassica William</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                        eiusmod tempo incididunt ut labore et dolore magna aliqua.</p>
                                                    <span>2 min ago</span>
                                                </div>
                                            </div>
                                            <div className="view-all-nots">
                                                <a href="messages.html" title="">View All Messsages</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" title="" className="not-box-open">
                                        <span><img src={notification} alt=""/></span>
                                        Notification
                                    </a>
                                    <div className="notification-box noti" id="notification">
                                        <div className="nt-title">
                                            <h4>Setting</h4>
                                            <a href="#" title="">Clear all</a>
                                        </div>
                                        <div className="nott-list">
                                            <div className="notfication-details">
                                                <div className="noty-user-img">
                                                    <img src="../../assets/images/resources/ny-img1.png" alt=""/>
                                                </div>
                                                <div className="notification-info">
                                                    <h3><a href="#" title="">Jassica William</a> Comment on your
                                                        project.
                                                    </h3>
                                                    <span>2 min ago</span>
                                                </div>
                                            </div>
                                            <div className="notfication-details">
                                                <div className="noty-user-img">
                                                    <img src="images/resources/ny-img2.png" alt=""/>
                                                </div>
                                                <div className="notification-info">
                                                    <h3><a href="#" title="">Jassica William</a> Comment on your
                                                        project.
                                                    </h3>
                                                    <span>2 min ago</span>
                                                </div>
                                            </div>
                                            <div className="notfication-details">
                                                <div className="noty-user-img">
                                                    <img src="images/resources/ny-img3.png" alt=""/>
                                                </div>
                                                <div className="notification-info">
                                                    <h3><a href="#" title="">Jassica William</a> Comment on your
                                                        project.
                                                    </h3>
                                                    <span>2 min ago</span>
                                                </div>
                                            </div>
                                            <div className="notfication-details">
                                                <div className="noty-user-img">
                                                    <img src="images/resources/ny-img2.png" alt=""/>
                                                </div>
                                                <div className="notification-info">
                                                    <h3><a href="#" title="">Jassica William</a> Comment on your
                                                        project.
                                                    </h3>
                                                    <span>2 min ago</span>
                                                </div>
                                            </div>
                                            <div className="view-all-nots">
                                                <a href="#" title="">View All Notification</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <div className="menu-btn">
                            <a href="#" title=""><i className="fa fa-bars"/></a>
                        </div>
                        <div className="user-account">
                            <div className="user-info">
                                <img src={user} alt=""/>
                                <a href="#" title="">John</a>
                                <i className="la la-sort-down"></i>
                            </div>
                            <div className="user-account-settingss" id="users">
                                <h3>Online Status</h3>
                                <ul className="on-off-status">
                                    <li>
                                        <div className="fgt-sec">
                                            <input type="radio" name="cc" id="c5"/>
                                            <label htmlFor="c5">
                                                <span/>
                                            </label>
                                            <small>Online</small>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="fgt-sec">
                                            <input type="radio" name="cc" id="c6"/>
                                            <label htmlFor="c6">
                                                <span></span>
                                            </label>
                                            <small>Offline</small>
                                        </div>
                                    </li>
                                </ul>
                                <h3>Custom Status</h3>
                                <div className="search_form">
                                    <form>
                                        <input type="text" name="search"/>
                                        <button type="submit">Ok</button>
                                    </form>
                                </div>
                                <h3>Setting</h3>
                                <ul className="us-links">
                                    <li><a href="profile-account-setting.html" title="">Account Setting</a></li>
                                    <li><a href="#" title="">Privacy</a></li>
                                    <li><a href="#" title="">Faqs</a></li>
                                    <li><a href="#" title="">Terms & Conditions</a></li>
                                </ul>
                                <h3 className="tc"><a href="sign-in.html" title="">Logout</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
     {/*       <main>
                <div className="main-section">
                    <div className="container">
                        <div className="main-section-data">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                                    <div className="main-left-sidebar no-margin">
                                        <div className="user-data full-width">
                                            <div className="user-profile">
                                                <div className="username-dt">
                                                    <div className="usr-pic">
                                                        <img src="images/resources/user-pic.png" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="user-specs">
                                                    <h3>John Doe</h3>
                                                    <span>Graphic Designer at Self Employed</span>
                                                </div>
                                            </div>
                                            <ul className="user-fw-status">
                                                <li>
                                                    <h4>Following</h4>
                                                    <span>34</span>
                                                </li>
                                                <li>
                                                    <h4>Followers</h4>
                                                    <span>155</span>
                                                </li>
                                                <li>
                                                    <a href="http://www.gambolthemes.net/workwise-new/my-profile.html"
                                                       title="">View
                                                        Profile</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="suggestions full-width">
                                            <div className="sd-title">
                                                <h3>Suggestions</h3>
                                                <i className="la la-ellipsis-v"></i>
                                            </div>
                                            <div className="suggestions-list">
                                                <div className="suggestion-usd">
                                                    <img src="images/resources/s1.png" alt=""/>
                                                    <div className="sgt-text">
                                                        <h4>Jessica William</h4>
                                                        <span>Graphic Designer</span>
                                                    </div>
                                                    <span><i className="la la-plus"></i></span>
                                                </div>
                                                <div className="suggestion-usd">
                                                    <img src="images/resources/s2.png" alt=""/>
                                                    <div className="sgt-text">
                                                        <h4>John Doe</h4>
                                                        <span>PHP Developer</span>
                                                    </div>
                                                    <span><i className="la la-plus"></i></span>
                                                </div>
                                                <div className="suggestion-usd">
                                                    <img src="images/resources/s3.png" alt=""/>
                                                    <div className="sgt-text">
                                                        <h4>Poonam</h4>
                                                        <span>Wordpress Developer</span>
                                                    </div>
                                                    <span><i className="la la-plus"></i></span>
                                                </div>
                                                <div className="suggestion-usd">
                                                    <img src="images/resources/s4.png" alt=""/>
                                                    <div className="sgt-text">
                                                        <h4>Bill Gates</h4>
                                                        <span>C & C++ Developer</span>
                                                    </div>
                                                    <span><i className="la la-plus"></i></span>
                                                </div>
                                                <div className="suggestion-usd">
                                                    <img src="images/resources/s5.png" alt=""/>
                                                    <div className="sgt-text">
                                                        <h4>Jessica William</h4>
                                                        <span>Graphic Designer</span>
                                                    </div>
                                                    <span><i className="la la-plus"></i></span>
                                                </div>
                                                <div className="suggestion-usd">
                                                    <img src="images/resources/s6.png" alt=""/>
                                                    <div className="sgt-text">
                                                        <h4>John Doe</h4>
                                                        <span>PHP Developer</span>
                                                    </div>
                                                    <span><i className="la la-plus"></i></span>
                                                </div>
                                                <div className="view-more">
                                                    <a href="#" title="">View More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tags-sec full-width">
                                            <ul>
                                                <li><a href="#" title="">Help Center</a></li>
                                                <li><a href="#" title="">About</a></li>
                                                <li><a href="#" title="">Privacy Policy</a></li>
                                                <li><a href="#" title="">Community Guidelines</a></li>
                                                <li><a href="#" title="">Cookies Policy</a></li>
                                                <li><a href="#" title="">Career</a></li>
                                                <li><a href="#" title="">Language</a></li>
                                                <li><a href="#" title="">Copyright Policy</a></li>
                                            </ul>
                                            <div className="cp-sec">
                                                <img src="images/logo2.png" alt=""/>
                                                <p><img src="images/cp.png" alt=""/>Copyright 2019</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-8 no-pd">
                                    <div className="main-ws-sec">
                                        <div className="post-topbar">
                                            <div className="user-picy">
                                                <img src="images/resources/user-pic.png" alt=""/>
                                            </div>
                                            <div className="post-st">
                                                <ul>
                                                    <li><a className="post_project" href="#" title="">Post a Project</a>
                                                    </li>
                                                    <li><a className="post-jb active" href="#" title="">Post a Job</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="posts-section">
                                            <div className="post-bar">
                                                <div className="post_topbar">
                                                    <div className="usy-dt">
                                                        <img src="images/resources/us-pic.png" alt=""/>
                                                        <div className="usy-name">
                                                            <h3>John Doe</h3>
                                                            <span><img src="images/clock.png"
                                                                       alt=""/>3 min ago</span>
                                                        </div>
                                                    </div>
                                                    <div className="ed-opts">
                                                        <a href="#" title="" className="ed-opts-open"><i
                                                            className="la la-ellipsis-v"></i></a>
                                                        <ul className="ed-options">
                                                            <li><a href="#" title="">Edit Post</a></li>
                                                            <li><a href="#" title="">Unsaved</a></li>
                                                            <li><a href="#" title="">Unbid</a></li>
                                                            <li><a href="#" title="">Close</a></li>
                                                            <li><a href="#" title="">Hide</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="epi-sec">
                                                    <ul className="descp">
                                                        <li><img src="images/icon8.png" alt=""/><span>Epic Coder</span>
                                                        </li>
                                                        <li><img src="images/icon9.png" alt=""/><span>India</span></li>
                                                    </ul>
                                                    <ul className="bk-links">
                                                        <li><a href="#" title=""><i className="la la-bookmark"></i></a>
                                                        </li>
                                                        <li><a href="#" title=""><i className="la la-envelope"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="job_descp">
                                                    <h3>Senior Wordpress Developer</h3>
                                                    <ul className="job-dt">
                                                        <li><a href="#" title="">Full Time</a></li>
                                                        <li><span>$30 / hr</span></li>
                                                    </ul>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                                        luctus
                                                        hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna
                                                        sit
                                                        amet... <a href="#" title="">view more</a></p>
                                                    <ul className="skill-tags">
                                                        <li><a href="#" title="">HTML</a></li>
                                                        <li><a href="#" title="">PHP</a></li>
                                                        <li><a href="#" title="">CSS</a></li>
                                                        <li><a href="#" title="">Javascript</a></li>
                                                        <li><a href="#" title="">Wordpress</a></li>
                                                    </ul>
                                                </div>
                                                <div className="job-status-bar">
                                                    <ul className="like-com">
                                                        <li>
                                                            <a href="#"><i className="fas fa-heart"></i> Like</a>
                                                            <img src="images/liked-img.png" alt=""/>
                                                            <span>25</span>
                                                        </li>
                                                        <li><a href="#" className="com"><i
                                                            className="fas fa-comment-alt"></i> Comment 15</a></li>
                                                    </ul>
                                                    <a href="#"><i className="fas fa-eye"></i>Views 50</a>
                                                </div>
                                            </div>
                                            <div className="top-profiles">
                                                <div className="pf-hd">
                                                    <h3>Top Profiles</h3>
                                                    <i className="la la-ellipsis-v"></i>
                                                </div>
                                                <div className="profiles-slider">
                                                    <div className="user-profy">
                                                        <img src="images/resources/user1.png" alt=""/>
                                                        <h3>John Doe</h3>
                                                        <span>Graphic Designer</span>
                                                        <ul>
                                                            <li><a href="#" title="" className="followw">Follow</a>
                                                            </li>
                                                            <li><a href="#" title="" className="envlp"><img
                                                                src="images/envelop.png" alt=""/></a></li>
                                                            <li><a href="#" title="" className="hire">hire</a></li>
                                                        </ul>
                                                        <a href="#" title="">View Profile</a>
                                                    </div>
                                                    <div className="user-profy">
                                                        <img src="images/resources/user2.png" alt=""/>
                                                        <h3>John Doe</h3>
                                                        <span>Graphic Designer</span>
                                                        <ul>
                                                            <li><a href="#" title="" className="followw">Follow</a>
                                                            </li>
                                                            <li><a href="#" title="" className="envlp"><img
                                                                src="images/envelop.png" alt=""/></a></li>
                                                            <li><a href="#" title="" className="hire">hire</a></li>
                                                        </ul>
                                                        <a href="#" title="">View Profile</a>
                                                    </div>
                                                    <div className="user-profy">
                                                        <img src="images/resources/user3.png" alt=""/>
                                                        <h3>John Doe</h3>
                                                        <span>Graphic Designer</span>
                                                        <ul>
                                                            <li><a href="#" title="" className="followw">Follow</a>
                                                            </li>
                                                            <li><a href="#" title="" className="envlp"><img
                                                                src="images/envelop.png" alt=""/></a></li>
                                                            <li><a href="#" title="" className="hire">hire</a></li>
                                                        </ul>
                                                        <a href="#" title="">View Profile</a>
                                                    </div>
                                                    <div className="user-profy">
                                                        <img src="images/resources/user1.png" alt=""/>
                                                        <h3>John Doe</h3>
                                                        <span>Graphic Designer</span>
                                                        <ul>
                                                            <li><a href="#" title="" className="followw">Follow</a>
                                                            </li>
                                                            <li><a href="#" title="" className="envlp"><img
                                                                src="images/envelop.png" alt=""/></a></li>
                                                            <li><a href="#" title="" className="hire">hire</a></li>
                                                        </ul>
                                                        <a href="#" title="">View Profile</a>
                                                    </div>
                                                    <div className="user-profy">
                                                        <img src="images/resources/user2.png" alt=""/>
                                                        <h3>John Doe</h3>
                                                        <span>Graphic Designer</span>
                                                        <ul>
                                                            <li><a href="#" title="" className="followw">Follow</a>
                                                            </li>
                                                            <li><a href="#" title="" className="envlp"><img
                                                                src="images/envelop.png" alt=""/></a></li>
                                                            <li><a href="#" title="" className="hire">hire</a></li>
                                                        </ul>
                                                        <a href="#" title="">View Profile</a>
                                                    </div>
                                                    <div className="user-profy">
                                                        <img src="images/resources/user3.png" alt=""/>
                                                        <h3>John Doe</h3>
                                                        <span>Graphic Designer</span>
                                                        <ul>
                                                            <li><a href="#" title="" className="followw">Follow</a>
                                                            </li>
                                                            <li><a href="#" title="" className="envlp"><img
                                                                src="images/envelop.png" alt=""/></a></li>
                                                            <li><a href="#" title="" className="hire">hire</a></li>
                                                        </ul>
                                                        <a href="#" title="">View Profile</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="post-bar">
                                                <div className="post_topbar">
                                                    <div className="usy-dt">
                                                        <img src="images/resources/us-pic.png" alt=""/>
                                                        <div className="usy-name">
                                                            <h3>John Doe</h3>
                                                            <span><img src="images/clock.png"
                                                                       alt=""/>3 min ago</span>
                                                        </div>
                                                    </div>
                                                    <div className="ed-opts">
                                                        <a href="#" title="" className="ed-opts-open"><i
                                                            className="la la-ellipsis-v"></i></a>
                                                        <ul className="ed-options">
                                                            <li><a href="#" title="">Edit Post</a></li>
                                                            <li><a href="#" title="">Unsaved</a></li>
                                                            <li><a href="#" title="">Unbid</a></li>
                                                            <li><a href="#" title="">Close</a></li>
                                                            <li><a href="#" title="">Hide</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="epi-sec">
                                                    <ul className="descp">
                                                        <li><img src="images/icon8.png" alt=""/><span>Epic Coder</span>
                                                        </li>
                                                        <li><img src="images/icon9.png" alt=""/><span>India</span></li>
                                                    </ul>
                                                    <ul className="bk-links">
                                                        <li><a href="#" title=""><i className="la la-bookmark"></i></a>
                                                        </li>
                                                        <li><a href="#" title=""><i className="la la-envelope"></i></a>
                                                        </li>
                                                        <li><a href="#" title="" className="bid_now">Bid Now</a></li>
                                                    </ul>
                                                </div>
                                                <div className="job_descp">
                                                    <h3>Senior Wordpress Developer</h3>
                                                    <ul className="job-dt">
                                                        <li><a href="#" title="">Full Time</a></li>
                                                        <li><span>$30 / hr</span></li>
                                                    </ul>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                                        luctus
                                                        hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna
                                                        sit
                                                        amet... <a href="#" title="">view more</a></p>
                                                    <ul className="skill-tags">
                                                        <li><a href="#" title="">HTML</a></li>
                                                        <li><a href="#" title="">PHP</a></li>
                                                        <li><a href="#" title="">CSS</a></li>
                                                        <li><a href="#" title="">Javascript</a></li>
                                                        <li><a href="#" title="">Wordpress</a></li>
                                                    </ul>
                                                </div>
                                                <div className="job-status-bar">
                                                    <ul className="like-com">
                                                        <li>
                                                            <a href="#"><i className="fas fa-heart"></i> Like</a>
                                                            <img src="images/liked-img.png" alt=""/>
                                                            <span>25</span>
                                                        </li>
                                                        <li><a href="#" className="com"><i
                                                            className="fas fa-comment-alt"></i> Comment 15</a></li>
                                                    </ul>
                                                    <a href="#"><i className="fas fa-eye"></i>Views 50</a>
                                                </div>
                                            </div>
                                            <div className="posty">
                                                <div className="post-bar no-margin">
                                                    <div className="post_topbar">
                                                        <div className="usy-dt">
                                                            <img src="images/resources/us-pc2.png" alt=""/>
                                                            <div className="usy-name">
                                                                <h3>John Doe</h3>
                                                                <span><img src="images/clock.png"
                                                                           alt=""/>3 min ago</span>
                                                            </div>
                                                        </div>
                                                        <div className="ed-opts">
                                                            <a href="#" title="" className="ed-opts-open"><i
                                                                className="la la-ellipsis-v"></i></a>
                                                            <ul className="ed-options">
                                                                <li><a href="#" title="">Edit Post</a></li>
                                                                <li><a href="#" title="">Unsaved</a></li>
                                                                <li><a href="#" title="">Unbid</a></li>
                                                                <li><a href="#" title="">Close</a></li>
                                                                <li><a href="#" title="">Hide</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="epi-sec">
                                                        <ul className="descp">
                                                            <li><img src="images/icon8.png"
                                                                     alt=""/><span>Epic Coder</span></li>
                                                            <li><img src="images/icon9.png" alt=""/><span>India</span>
                                                            </li>
                                                        </ul>
                                                        <ul className="bk-links">
                                                            <li><a href="#" title=""><i className="la la-bookmark"></i></a>
                                                            </li>
                                                            <li><a href="#" title=""><i className="la la-envelope"></i></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="job_descp">
                                                        <h3>Senior Wordpress Developer</h3>
                                                        <ul className="job-dt">
                                                            <li><a href="#" title="">Full Time</a></li>
                                                            <li><span>$30 / hr</span></li>
                                                        </ul>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Aliquam
                                                            luctus hendrerit metus, ut ullamcorper quam finibus at.
                                                            Etiam id
                                                            magna sit amet... <a href="#" title="">view more</a></p>
                                                        <ul className="skill-tags">
                                                            <li><a href="#" title="">HTML</a></li>
                                                            <li><a href="#" title="">PHP</a></li>
                                                            <li><a href="#" title="">CSS</a></li>
                                                            <li><a href="#" title="">Javascript</a></li>
                                                            <li><a href="#" title="">Wordpress</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="job-status-bar">
                                                        <ul className="like-com">
                                                            <li>
                                                                <a href="#"><i className="fas fa-heart"></i> Like</a>
                                                                <img src="images/liked-img.png" alt=""/>
                                                                <span>25</span>
                                                            </li>
                                                            <li><a href="#" className="com"><i
                                                                className="fas fa-comment-alt"></i> Comment 15</a></li>
                                                        </ul>
                                                        <a href="#"><i className="fas fa-eye"></i>Views 50</a>
                                                    </div>
                                                </div>
                                                <div className="comment-section">
                                                    <a href="#" className="plus-ic">
                                                        <i className="la la-plus"></i>
                                                    </a>
                                                    <div className="comment-sec">
                                                        <ul>
                                                            <li>
                                                                <div className="comment-list">
                                                                    <div className="bg-img">
                                                                        <img src="images/resources/bg-img1.png" alt=""/>
                                                                    </div>
                                                                    <div className="comment">
                                                                        <h3>John Doe</h3>
                                                                        <span><img src="images/clock.png"
                                                                                   alt=""/> 3 min ago</span>
                                                                        <p>Lorem ipsum dolor sit amet, </p>
                                                                        <a href="#" title="" className="active"><i
                                                                            className="fa fa-reply-all"></i>Reply</a>
                                                                    </div>
                                                                </div>
                                                                <ul>
                                                                    <li>
                                                                        <div className="comment-list">
                                                                            <div className="bg-img">
                                                                                <img src="images/resources/bg-img2.png"
                                                                                     alt=""/>
                                                                            </div>
                                                                            <div className="comment">
                                                                                <h3>John Doe</h3>
                                                                                <span><img src="images/clock.png"
                                                                                           alt=""/> 3 min ago</span>
                                                                                <p>Hi John </p>
                                                                                <a href="#" title=""><i
                                                                                    className="fa fa-reply-all"></i>Reply</a>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <div className="comment-list">
                                                                    <div className="bg-img">
                                                                        <img src="images/resources/bg-img3.png" alt=""/>
                                                                    </div>
                                                                    <div className="comment">
                                                                        <h3>John Doe</h3>
                                                                        <span><img src="images/clock.png"
                                                                                   alt=""/> 3 min ago</span>
                                                                        <p>Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing
                                                                            elit. Aliquam luctus hendrerit metus, ut
                                                                            ullamcorper
                                                                            quam finibus at.</p>
                                                                        <a href="#" title=""><i
                                                                            className="fa fa-reply-all"></i>Reply</a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="post-comment">
                                                        <div className="cm_img">
                                                            <img src="images/resources/bg-img4.png" alt=""/>
                                                        </div>
                                                        <div className="comment_box">
                                                            <form>
                                                                <input type="text" placeholder="Post a comment"/>
                                                                <button type="submit">Send</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="process-comm">
                                                <div className="spinner">
                                                    <div className="bounce1"></div>
                                                    <div className="bounce2"></div>
                                                    <div className="bounce3"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 pd-right-none no-pd">
                                    <div className="right-sidebar">
                                        <div className="widget widget-about">
                                            <img src="images/wd-logo.png" alt=""/>
                                            <h3>Track Time on Workwise</h3>
                                            <span>Pay only for the Hours worked</span>
                                            <div className="sign_link">
                                                <h3><a href="sign-in.html" title="">Sign up</a></h3>
                                                <a href="#" title="">Learn More</a>
                                            </div>
                                        </div>
                                        <div className="widget widget-jobs">
                                            <div className="sd-title">
                                                <h3>Top Jobs</h3>
                                                <i className="la la-ellipsis-v"></i>
                                            </div>
                                            <div className="jobs-list">
                                                <div className="job-info">
                                                    <div className="job-details">
                                                        <h3>Senior Product Designer</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                    </div>
                                                    <div className="hr-rate">
                                                        <span>$25/hr</span>
                                                    </div>
                                                </div>
                                                <div className="job-info">
                                                    <div className="job-details">
                                                        <h3>Senior UI / UX Designer</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                    </div>
                                                    <div className="hr-rate">
                                                        <span>$25/hr</span>
                                                    </div>
                                                </div>
                                                <div className="job-info">
                                                    <div className="job-details">
                                                        <h3>Junior Seo Designer</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                    </div>
                                                    <div className="hr-rate">
                                                        <span>$25/hr</span>
                                                    </div>
                                                </div>
                                                <div className="job-info">
                                                    <div className="job-details">
                                                        <h3>Senior PHP Designer</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                    </div>
                                                    <div className="hr-rate">
                                                        <span>$25/hr</span>
                                                    </div>
                                                </div>
                                                <div className="job-info">
                                                    <div className="job-details">
                                                        <h3>Senior Developer Designer</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                    </div>
                                                    <div className="hr-rate">
                                                        <span>$25/hr</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget widget-jobs">
                                            <div className="sd-title">
                                                <h3>Most Viewed This Week</h3>
                                                <i className="la la-ellipsis-v"></i>
                                            </div>
                                            <div className="jobs-list">
                                                <div className="job-info">
                                                    <div className="job-details">
                                                        <h3>Senior Product Designer</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                    </div>
                                                    <div className="hr-rate">
                                                        <span>$25/hr</span>
                                                    </div>
                                                </div>
                                                <div className="job-info">
                                                    <div className="job-details">
                                                        <h3>Senior UI / UX Designer</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                    </div>
                                                    <div className="hr-rate">
                                                        <span>$25/hr</span>
                                                    </div>
                                                </div>
                                                <div className="job-info">
                                                    <div className="job-details">
                                                        <h3>Junior Seo Designer</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                    </div>
                                                    <div className="hr-rate">
                                                        <span>$25/hr</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget suggestions full-width">
                                            <div className="sd-title">
                                                <h3>Most Viewed People</h3>
                                                <i className="la la-ellipsis-v"></i>
                                            </div>
                                            <div className="suggestions-list">
                                                <div className="suggestion-usd">
                                                    <img src="images/resources/s1.png" alt=""/>
                                                    <div className="sgt-text">
                                                        <h4>Jessica William</h4>
                                                        <span>Graphic Designer</span>
                                                    </div>
                                                    <span><i className="la la-plus"></i></span>
                                                </div>
                                                <div className="suggestion-usd">
                                                    <img src="images/resources/s2.png" alt=""/>
                                                    <div className="sgt-text">
                                                        <h4>John Doe</h4>
                                                        <span>PHP Developer</span>
                                                    </div>
                                                    <span><i className="la la-plus"></i></span>
                                                </div>
                                                <div className="suggestion-usd">
                                                    <img src="images/resources/s3.png" alt=""/>
                                                    <div className="sgt-text">
                                                        <h4>Poonam</h4>
                                                        <span>Wordpress Developer</span>
                                                    </div>
                                                    <span><i className="la la-plus"></i></span>
                                                </div>
                                                <div className="suggestion-usd">
                                                    <img src="images/resources/s4.png" alt=""/>
                                                    <div className="sgt-text">
                                                        <h4>Bill Gates</h4>
                                                        <span>C &amp; C++ Developer</span>
                                                    </div>
                                                    <span><i className="la la-plus"></i></span>
                                                </div>
                                                <div className="suggestion-usd">
                                                    <img src="images/resources/s5.png" alt=""/>
                                                    <div className="sgt-text">
                                                        <h4>Jessica William</h4>
                                                        <span>Graphic Designer</span>
                                                    </div>
                                                    <span><i className="la la-plus"></i></span>
                                                </div>
                                                <div className="suggestion-usd">
                                                    <img src="images/resources/s6.png" alt=""/>
                                                    <div className="sgt-text">
                                                        <h4>John Doe</h4>
                                                        <span>PHP Developer</span>
                                                    </div>
                                                    <span><i className="la la-plus"></i></span>
                                                </div>
                                                <div className="view-more">
                                                    <a href="#" title="">View More</a>
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
                                            <i className="la la-dollar"></i>
                                        </div>
                                        <span>To</span>
                                        <div className="price-br">
                                            <input type="text" name="price1" placeholder="Price"/>
                                            <i className="la la-dollar"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <textarea name="description" placeholder="Description"/>
                                </div>
                                <div className="col-lg-12">
                                    <ul>
                                        <li>
                                            <button className="active" type="submit" value="post">Post</button>
                                        </li>
                                        <li><a href="#" title="">Cancel</a></li>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </div>
                    <a href="#" title=""><i className="la la-times-circle-o"/></a>
                </div>

                <div className="post-popup job_post">
                    <div className="post-project">
                        <h3>Post a job</h3>
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
                                    <div className="col-lg-6">
                                        <div className="price-br">
                                            <input type="text" name="price1" placeholder="Price"/>
                                            <i className="la la-dollar"></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="inp-field">
                                            <select>
                                                <option>Full Time</option>
                                                <option>Half time</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea name="description" placeholder="Description"/>
                                    </div>
                                    <div className="col-lg-12">
                                        <ul>
                                            <li>
                                                <button className="active" type="submit" value="post">Post</button>
                                            </li>
                                            <li><a href="#" title="">Cancel</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <a href="#" title=""><i className="la la-times-circle-o"></i></a>
                    </div>
                </div>
            </div>*/}
        </Fragment>
    );
};

export default NavBar;