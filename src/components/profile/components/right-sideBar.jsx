import React from 'react'
import {Link} from 'react-router-dom';


export const RightSideBar = () => {
    return (
        <div className="right-sidebar">
            <div className="message-btn">
                <Link to="/settings"><i className="fa fa-cog"/> Setting</Link>
            </div>
            <div className="widget widget-portfolio">
                <div className="wd-heady">
                    <h3>Photo</h3>
                    <img src={require("../../../assets/images/photo-icon.png")} alt="icon portfolio"/>
                </div>
                <div className="pf-gallery">
                    <ul>
                        <li><a href="https://abdelouahedd.github.io/profile/" title=""><img
                            src={require("../../../assets/images/resources/pf-gallery1.png")}
                            alt=""/></a></li>
                        <li><a href="https://abdelouahedd.github.io/profile/" title=""><img
                            src={require("../../../assets/images/resources/pf-gallery2.png")}
                            alt=""/></a></li>
                        <li><a href="https://abdelouahedd.github.io/profile/" title=""><img
                            src={require("../../../assets/images/resources/pf-gallery3.png")}
                            alt=""/></a></li>
                    </ul>
                </div>
            </div>
            <div className="widget widget-portfolio">
                <div className="wd-heady">
                    <h3>Friends</h3>
                    <img src={require("../../../assets/images/photo-icon.png")} alt="icon portfolio"/>
                </div>
                <div className="pf-gallery">
                    <ul>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default RightSideBar;
