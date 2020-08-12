import React from 'react';
import {Link} from "react-router-dom";
//import of images and icons
import logo from '../../../assets/images/logo.png'
import home from '../../../assets/images/icon1.png';
import companie from '../../../assets/images/icon2.png'
import projects from '../../../assets/images/icon3.png'
import profiles from '../../../assets/images/icon4.png'
import messages from '../../../assets/images/icon6.png'
import notification from '../../../assets/images/icon7.png'
import avater from "../../../assets/images/resources/ny-img3.png"
import user from "../../../assets/images/resources/user.png"


const NavBar = () => {
    return (<header>
        <div className="container">
            <div className="header-data">
                <div className="logo">
                    <Link to="/"><img src={logo} alt=""/></Link>
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
                            <Link to="/">
                                <span><img src={home} alt=""/></span>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/companies/company">
                                <span><img src={companie} alt=""/></span>
                                Companies
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects">
                                <span><img src={projects} alt=""/></span>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile" title="">
                                <span><img src={profiles} alt=""/></span>
                                Profiles
                            </Link>
                        </li>
                        <li>
                            <Link to="/files" title="">
                                            <span>
                                                <i className="fa fa-file-archive-o"/>
                                                {/*<img src={jobs} alt=""/>*/}
                                            </span>
                                Files
                            </Link>
                        </li>
                        <li>
                            <Link to="/messages" className="not-box-openm">
                                <span><img src={messages} alt=""/></span>
                                Messages
                            </Link>
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
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                                do
                                                eiusmod tempo incididunt ut labore et dolore magna
                                                aliqua.</p>
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
                                            <img src="../../../assets/images/resources/ny-img1.png" alt=""/>
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
                        <i className="la la-sort-down"/>
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
                                        <span/>
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
                            <li><Link to="/settings">Account Setting</Link></li>
                            <li><a href="#" title="">Privacy</a></li>
                            <li><a href="#" title="">Faqs</a></li>
                            <li><a href="#" title="">Terms & Conditions</a></li>
                        </ul>
                        <h3 className="tc"><Link to="/sign" title="">Logout</Link></h3>
                    </div>
                </div>
            </div>
        </div>
    </header>);
};

export default NavBar;