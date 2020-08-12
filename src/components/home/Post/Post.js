import React from 'react';
import user_post from "../../../assets/images/resources/us-pic.png";
import location from "../../../assets/images/icon9.png";
import like from "../../../assets/images/liked-img.png";
import './post.css'

function Post() {
    return (
        <div className="post-bar">
            <div className="post_topbar">
                <div className="usy-dt">
                    <img src={user_post} alt=""/>
                    <div className="usy-name">
                        <h3>John Doe</h3>
                        <span>
                                                                 <i className="fa fa-clock-o"/> 3 min ago
                                                             </span>
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
                    <li>
                        <img src={location} alt=""/>
                        <span>India</span>
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
                        <a href="#"><i className="fa fa-heart"/> Like</a>
                        <img src={like} alt=""/>
                        <span>25</span>
                    </li>
                    <li><a href="#" className="com"><i
                        className="fas fa-comment-alt"/> Comment 15</a></li>
                </ul>
                <a href="#"><i className="fa fa-eye"></i>Views 50</a>
            </div>
            <div className="comment-area mt-3">
         {/*   <ul className="post-comments p-0 m-0">
                    <li className="mb-2">
                        <div className="d-flex flex-wrap">
                            <div className="user-img">
                                <img src={user_post} alt="userimg"
                                     className="avatar-35 rounded-circle img-fluid"/>
                            </div>
                            <div className="comment-data-block ml-3">
                                <h6>Monty Carlo</h6>
                                <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                <div className="d-flex flex-wrap align-items-center comment-activity">
                                    <a href="#">like</a>
                                    <a href="#">reply</a>
                                    <a href="#">translate</a>
                                    <span> 5 min </span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="d-flex flex-wrap">
                            <div className="user-img">
                                <img src={user_post} alt="userimg"
                                     className="avatar-35 rounded-circle img-fluid"/>
                            </div>
                            <div className="comment-data-block ml-3">
                                <h6>Paul Molive</h6>
                                <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                <div className="d-flex flex-wrap align-items-center comment-activity">
                                    <a href="#">like</a>
                                    <a href="#">reply</a>
                                    <a href="#">translate</a>
                                    <span> 5 min </span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>*/}
                <form className="comment-text d-flex align-items-center mt-3" action="#">
                    <input type="text" className="form-control rounded"/>
                    <div className="comment-attagement d-flex">
                        <a href="#"><i className="ri-link mr-3"/></a>
                        <a href="#"><i className="ri-user-smile-line mr-3"/></a>
                        <a href="#"><i className="ri-camera-line mr-3"/></a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Post;