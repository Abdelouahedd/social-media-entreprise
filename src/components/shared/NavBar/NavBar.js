import React, {useState} from 'react';
import {Link} from "react-router-dom";
//import of images and icons
import logo from '../../../assets/images/logo.png'
import home from '../../../assets/images/icon1.png';
import companie from '../../../assets/images/icon2.png'
import projects from '../../../assets/images/icon3.png'
import profiles from '../../../assets/images/icon4.png'
import messages from '../../../assets/images/icon6.png'
import notification from '../../../assets/images/icon7.png'
import user from "../../../assets/images/resources/user.png"
import './nav.css'
import NotificationBox from "./components/NotificationBox";
import AccountBox from "./components/AccountBox";
import {currentUser} from "../../../_helper/services";

const NavBar = () => {
    const [show, setShowAccount] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [active, setActive] = useState(false)
    const showBox = {
        display: 'block'
    }
    const hideBox = {
        display: 'none'
    }

    return (
        <header className="iq-top-navbar">
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
                    <nav className={active ? "active" : ""}>
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
                                <Link to={`/profile/${currentUser._id}`} title="">
                                    <span><img src={profiles} alt=""/></span>
                                    Profiles
                                </Link>
                            </li>
                            <li>
                                <Link to="/files" title="">
                                    <span>
                                        <i className="fa fa-file-archive-o"/>
                                    </span>
                                    Files
                                </Link>
                            </li>
                            <li>
                                <Link to="/messages" className="not-box-openm">
                                    <span><img src={messages} alt=""/></span>
                                    Messages
                                </Link>
                            </li>
                            <li>
                                <a href="#" title="" className="not-box-open"
                                   onClick={() => setShowNotification(!showNotification)}>
                                    <span><img src={notification} alt=""/></span>
                                    Notification
                                </a>
                                <NotificationBox show={showNotification ? showBox : hideBox}/>
                            </li>
                        </ul>
                    </nav>
                    <div className="menu-btn" onClick={() => setActive(!active)}>
                        <a href="#" title=""><i className="fa fa-bars"/></a>
                    </div>
                    <div className="user-account">
                        <div className="user-info" onClick={() => setShowAccount(!show)}>
                            <img src={user} alt=""/>
                            <a href="#" title="">John</a>
                            <i className="la la-sort-down"/>
                        </div>
                        <AccountBox show={show ? showBox : hideBox}/>
                    </div>
                </div>
            </div>
        </header>);
};

export default NavBar;