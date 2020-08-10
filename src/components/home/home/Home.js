import React from 'react';
import NavBar from "../NavBar/NavBar";
import user_pic from '../../../assets/images/resources/user-pic.png';
import user_post from '../../../assets/images/resources/us-pic.png';
import location from '../../../assets/images/icon9.png';
import like from '../../../assets/images/liked-img.png';
import LeftSideBar from "../side-bar/LeftSideBar";
import RightSideBar from "../side-bar/RightSideBar";
import TopProfiles from "../../topProfils/TopProfils";

const Home = () => {
    return (
        <div className="wrapper">
            <NavBar/>
            <main>
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
                                                <img src={user_pic} alt=""/>
                                            </div>
                                            <div className="post-st">
                                                <ul>
                                                    <li><a className="post_project" href="#" title="">Add a post</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/*end of add post form*/}
                                        {/*start list view of posts*/}
                                        <div className="posts-section">
                                            <TopProfiles/>
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
                                            </div>
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
                                            </div>

                                            <div className="posty">
                                                <div className="post-bar no-margin">
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
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Aliquam
                                                            luctus
                                                            hendrerit metus, ut ullamcorper quam finibus at. Etiam id
                                                            magna
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
                                                                        <span><i
                                                                            className="fa fa-clock-o"/> 3 min ago</span>
                                                                        <p>Lorem ipsum dolor sit amet, </p>
                                                                        <a href="#" title="" className="active"><i
                                                                            className="fa fa-reply-all"/>Reply</a>
                                                                    </div>
                                                                </div>
                                                                <ul>
                                                                    <li>
                                                                        <div className="comment-list">
                                                                            <div className="bg-img">
                                                                                <img src={user_pic}
                                                                                     alt=""/>
                                                                            </div>
                                                                            <div className="comment">
                                                                                <h3>John Doe</h3>
                                                                                <span><i className="fa fa-clock-o"/> 3 min ago</span>
                                                                                <p>Hi John </p>
                                                                                <a href="#" title=""><i
                                                                                    className="fa fa-reply-all"/>Reply</a>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <div className="comment-list">
                                                                    <div className="bg-img">
                                                                        <img src={user_pic} alt=""/>
                                                                    </div>
                                                                    <div className="comment">
                                                                        <h3>John Doe</h3>
                                                                        <span><i
                                                                            className="fa fa-clock-o"/> 3 min ago</span>
                                                                        <p>Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing
                                                                            elit. Aliquam luctus hendrerit metus, ut
                                                                            ullamcorper
                                                                            quam finibus at.</p>
                                                                        <a href="#" title=""><i
                                                                            className="fa fa-reply-all"/>Reply</a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="post-comment">
                                                        <div className="cm_img">
                                                            <img src={user_pic} alt=""/>
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
                                            {/*end list view of posts*/}
                                            {/*   <div className="process-comm">
                                                <div className="spinner">
                                                    <div className="bounce1"/>
                                                    <div className="bounce2"/>
                                                    <div className="bounce3"/>
                                                </div>
                                            </div>*/}
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
                    <a href="#" title=""><i className="la la-times-circle-o"/></a>
                </div>
            </div>
        </div>
    );
};

export default Home;