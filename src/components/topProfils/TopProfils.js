import React from 'react';
import envelop from "../../assets/images/envelop.png";
import user_post from "../../assets/images/resources/us-pic.png";
function TopProfiles(props) {
    return (
        <div className="top-profiles">
            <div className="pf-hd">
                <h3>Top Profiles</h3>
                <i className="la la-ellipsis-v"/>
            </div>
            <div className="profiles-slider">
                <div className="user-profy">
                    <img src={user_post} alt=""/>
                    <h3>John Doe</h3>
                    <span>Graphic Designer</span>
                    <ul>
                        <li><a href="#" title="" className="followw">Follow</a>
                        </li>
                        <li><a href="#" title="" className="envlp"><img
                            src={envelop} alt=""/></a></li>
                        <li><a href="#" title="" className="hire">hire</a></li>
                    </ul>
                    <a href="#" title="">View Profile</a>
                </div>
                <div className="user-profy">
                    <img src={user_post} alt=""/>
                    <h3>John Doe</h3>
                    <span>Graphic Designer</span>
                    <ul>
                        <li><a href="#" title="" className="followw">Follow</a>
                        </li>
                        <li><a href="#" title="" className="envlp"><img
                            src={envelop} alt=""/></a></li>
                        <li><a href="#" title="" className="hire">hire</a></li>
                    </ul>
                    <a href="#" title="">View Profile</a>
                </div>
                <div className="user-profy">
                    <img src={user_post} alt=""/>
                    <h3>John Doe</h3>
                    <span>Graphic Designer</span>
                    <ul>
                        <li><a href="#" title="" className="followw">Follow</a>
                        </li>
                        <li><a href="#" title="" className="envlp"><img
                            src={envelop} alt=""/></a></li>
                        <li><a href="#" title="" className="hire">hire</a></li>
                    </ul>
                    <a href="#" title="">View Profile</a>
                </div>
                <div className="user-profy">
                    <img src={user_post} alt=""/>
                    <h3>John Doe</h3>
                    <span>Graphic Designer</span>
                    <ul>
                        <li><a href="#" title="" className="followw">Follow</a>
                        </li>
                        <li><a href="#" title="" className="envlp"><img
                            src={envelop} alt=""/></a></li>
                        <li><a href="#" title="" className="hire">hire</a></li>
                    </ul>
                    <a href="#" title="">View Profile</a>
                </div>
                <div className="user-profy">
                    <img src={user_post} alt=""/>
                    <h3>John Doe</h3>
                    <span>Graphic Designer</span>
                    <ul>
                        <li><a href="#" title="" className="followw">Follow</a>
                        </li>
                        <li><a href="#" title="" className="envlp"><img
                            src={envelop} alt=""/></a></li>
                        <li><a href="#" title="" className="hire">hire</a></li>
                    </ul>
                    <a href="#" title="">View Profile</a>
                </div>
                <div className="user-profy">
                    <img src={user_post} alt=""/>
                    <h3>John Doe</h3>
                    <span>Graphic Designer</span>
                    <ul>
                        <li><a href="#" title="" className="followw">Follow</a>
                        </li>
                        <li><a href="#" title="" className="envlp"><img
                            src={envelop} alt=""/></a></li>
                        <li><a href="#" title="" className="hire">hire</a></li>
                    </ul>
                    <a href="#" title="">View Profile</a>
                </div>
            </div>
        </div>
    );
}

export default TopProfiles;