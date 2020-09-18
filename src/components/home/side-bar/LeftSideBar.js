import React, {useState} from 'react';
import user_pic from "../../../assets/images/resources/user-pic.png";
import {currentUser} from '../../../_helper/services'
import {Link} from "react-router-dom";

const LeftSideBar = () => {

    const [user] = useState(currentUser);

    return (
        <div className="col-lg-3 col-md-4 pd-left-none no-pd">
            <div className="main-left-sidebar no-margin">
                <div className="user-data full-width">
                    <div className="user-profile">
                        <div className="username-dt">
                            <div className="usr-pic">
                                <img src={currentUser.photo_profil === "" ? user_pic : currentUser.photo_profil}
                                     alt={currentUser.photo_profil}/>
                            </div>
                        </div>
                        <div className="user-specs">
                            <h3>{user.nom + " " + user.prenom}</h3>
                            <span>{currentUser.fonction}</span>
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
                            <Link to={`/profile/${currentUser._id}`}>
                                View Profile
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="suggestions full-width">
                    <div className="sd-title">
                        <h3>Suggestions</h3>
                        <i className="la la-ellipsis-v"/>
                    </div>
                    <div className="suggestions-list">
                        <div className="suggestion-usd">
                            <img src={require("../../../assets/images/resources/s1.png")} alt=""/>
                            <div className="sgt-text">
                                <h4>Jessica William</h4>
                                <span>Graphic Designer</span>
                            </div>
                            <span><i className="la la-plus"/></span>
                        </div>
                        <div className="suggestion-usd">
                            <img src={require("../../../assets/images/resources/s2.png")} alt=""/>
                            <div className="sgt-text">
                                <h4>John Doe</h4>
                                <span>PHP Developer</span>
                            </div>
                            <span><i className="la la-plus"/></span>
                        </div>
                        <div className="suggestion-usd">
                            <img src={require("../../../assets/images/resources/s3.png")} alt=""/>
                            <div className="sgt-text">
                                <h4>Poonam</h4>
                                <span>Wordpress Developer</span>
                            </div>
                            <span><i className="la la-plus"/></span>
                        </div>
                        <div className="suggestion-usd">
                            <img src={require("../../../assets/images/resources/s4.png")} alt=""/>
                            <div className="sgt-text">
                                <h4>Bill Gates</h4>
                                <span>C & C++ Developer</span>
                            </div>
                            <span><i className="la la-plus"/></span>
                        </div>
                        <div className="suggestion-usd">
                            <img src={require("../../../assets/images/resources/s5.png")} alt=""/>
                            <div className="sgt-text">
                                <h4>Jessica William</h4>
                                <span>Graphic Designer</span>
                            </div>
                            <span><i className="la la-plus"/></span>
                        </div>
                        <div className="suggestion-usd">
                            <img src={require("../../../assets/images/resources/s6.png")} alt=""/>
                            <div className="sgt-text">
                                <h4>John Doe</h4>
                                <span>PHP Developer</span>
                            </div>
                            <span><i className="la la-plus"/></span>
                        </div>
                        <div className="view-more">
                            <a href="https://abdelouahedd.github.io/profile/" title="">View More</a>
                        </div>
                    </div>
                </div>
                <div className="tags-sec full-width">
                    <ul>
                        <li><a href="https://abdelouahedd.github.io/profile/" title="">Help Center</a></li>
                        <li><a href="https://abdelouahedd.github.io/profile/" title="">About</a></li>
                        <li><a href="https://abdelouahedd.github.io/profile/" title="">Privacy Policy</a></li>
                        <li><a href="https://abdelouahedd.github.io/profile/" title="">Community Guidelines</a></li>
                        <li><a href="https://abdelouahedd.github.io/profile/" title="">Cookies Policy</a></li>
                        <li><a href="https://abdelouahedd.github.io/profile/" title="">Career</a></li>
                        <li><a href="https://abdelouahedd.github.io/profile/" title="">Language</a></li>
                        <li><a href="https://abdelouahedd.github.io/profile/" title="">Copyright Policy</a></li>
                    </ul>
                    <div className="cp-sec">
                        <img src={require("../../../assets/images/logo2.png")} alt=""/>
                        <p><img src={require("../../../assets/images/cp.png")} alt=""/>Copyright 2019</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideBar;