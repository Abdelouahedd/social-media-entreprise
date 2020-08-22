
import React, { useState } from 'react';
import logo from "../../assets/images/cm-logo.png"
import cuver from "../../assets/images/cm-main-img.png"
import SignIn from './compnents/signIN';
import SignUp from './compnents/signUP';

export default function Authentification() {

    const initState = [
        {
            class: "current",
            data: "tab-1",
            title: "Sign in"

        },
        {
            class: "",
            data: "tab-2",
            title: "Sign up"
        }
    ];

    const [tabs, setTabs] = useState(initState)

    const switchTab = (tab) => {

        var newTab = document.getElementById(tab.data);
        newTab.classList.add("current", "animated", "fadeIn");
        var indexNewTab = tabs.findIndex((e) => e.class == "");
        tabs[indexNewTab].class = "current";

        var indexOldTab = tabs.findIndex((e) => e.data !== tab.data);
        tabs[indexOldTab].class = "";
        var oldTab = document.getElementById(tabs[indexOldTab].data);
        oldTab.classList.remove("current");

        setTabs([...tabs]);
    }

    return (
        <div className="sign-in">
            <div className=" wrapper">
                <div className="sign-in-page">
                    <div className="signin-popup">
                        <div className="signin-pop">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="cmp-info">
                                        <div className="cm-logo">
                                            <img src={logo} alt="logo" />
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
                                                consequuntur deserunt, dolor, est illo non nulla officia pariatur
                                                quam
                                                rem repellendus saepe soluta, voluptas! Facilis laboriosam minima
                                                minus
                                                nam officiis.
                                            </p>
                                        </div>
                                        <img src={cuver} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="login-sec">
                                        <ul className="sign-control">
                                            {
                                                tabs.map((tab, index) =>
                                                    <li key={index}
                                                        data-tab={tab.data}
                                                        className={tab.class}
                                                        onClick={switchTab.bind(null, tab)}
                                                    >
                                                        <a href="#">{tab.title}</a>
                                                    </li>
                                                )
                                            }
                                        </ul>
                                        {/*SIGN IN*/}
                                        <SignIn />
                                        {/*sign UP*/}
                                        <SignUp />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" footy-sec">
                        <div className="container">
                            <ul>
                                <li><a href="help-center.html" title="">Help Center</a></li>
                                <li><a href="about.html" title="">About</a></li>
                                <li><a href="#" title="">Privacy Policy</a></li>
                                <li><a href="#" title="">Community Guidelines</a></li>
                                <li><a href="#" title="">Cookies Policy</a></li>
                                <li><a href="#" title="">Career</a></li>
                                <li><a href="forum.html" title="">Forum</a></li>
                                <li><a href="#" title="">Language</a></li>
                                <li><a href="#" title="">Copyright Policy</a></li>
                            </ul>
                            <p><i className="fa fa-copyright"> Copyright 2019</i></p>
                            {/*<p><img src="images/copy-icon.png" alt=""/>Copyright 2019</p>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
