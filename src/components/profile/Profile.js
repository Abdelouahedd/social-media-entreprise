import React, { useEffect, useState } from 'react';
import cuver from '../../assets/images/resources/cover-img.jpg';
import "./profile.css";
import LeftSideBar from './components/left-sideBar';
import RightSideBar from './components/right-sideBar';
import { URL } from "../../redux/_helper/utility";
import { useToasts } from "react-toast-notifications";
import { useParams } from "react-router-dom";

function Profile() {
    var initialState = [
        {
            data_tab: 'feed-dd',
            className: 'animated fadeIn active',
            src: require('../../assets/images/ic1.png'),
            name: 'Feed'
        },
        {
            data_tab: 'info-dd',
            className: '',
            src: require('../../assets/images/ic2.png'),
            name: 'Info'

        },
        {
            data_tab: 'my-bids',
            className: 'animated fadeIn',
            src: require('../../assets/images/ic5.png'),
            name: 'Bids'
        },
    ];
    const [tabs, setTabs] = useState(initialState);
    const [user, setUser] = useState({});
    const { addToast } = useToasts();
    const param = useParams();

    useEffect(() => {
        fetch(`${URL}/users/${param.id}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')
                }
            }
        ).then(res => res.json())
            .then((res) => setUser(res.user))
            .catch(err => {
                console.error(err);
                addToast(err.toString(), { appearance: 'error', autoDismiss: true },)
            });
    }, [param.id, addToast]);


    const showProductFeed = (event) => {

        let prevTab = tabs.findIndex((e) => e.className.includes('active'));
        tabs[prevTab].className = 'animated fadeIn';
        let newTab = tabs.findIndex((e) => e.data_tab === event.data_tab);
        tabs[newTab].className = 'animated fadeIn active';

        let selectPrevTab = document.getElementById(tabs[prevTab].data_tab);
        selectPrevTab.classList.remove('current');

        let selectNewTab = document.getElementById(tabs[newTab].data_tab);
        selectNewTab.classList.add('current', 'animated', 'fadeIn');

        setTabs([...tabs]);
    }
    const overviewOpen = () => {
        document.getElementById("overview-box").classList.add("open");
        document.querySelector(".wrapper").classList.add("overlay");
    }
    const closeBox = () => {
        document.getElementById("overview-box").classList.remove("open");
        document.querySelector(".wrapper").classList.remove("overlay");
    }

    return (
        <div className="wrapper">
            <section className="cover-sec">
                <img src={user.photo_couverture === "" ? cuver : URL+user.photo_couverture} alt={"cuver img"}
                    className="img-fluid bg-img" />
            </section>
            <main>
                <div className="main-section">
                    <div className="container">
                        <div className="main-section-data">
                            <div className="row">
                                <div className="col-lg-3 justify-content-center">
                                    <LeftSideBar user={user} />
                                </div>
                                <div className="col-lg-6">
                                    <div className="main-ws-sec">
                                        <div className="user-tab-sec rewivew">
                                            <h3>{user.nom + " " + user.prenom}</h3>
                                            <div className="star-descp">
                                                <span>Join at : {new Date(user.createdAt).toLocaleDateString("en-us")}</span>
                                            </div>
                                            <div className="tab-feed st2 settingjb">
                                                <ul style={{
                                                    display: "flex",
                                                    justifyContent: "center"
                                                }}>
                                                    {
                                                        tabs.map((el, i) =>
                                                            <li key={i} data-tab={el.data_tab} className={el.className}
                                                                onClick={showProductFeed.bind(null, el)}
                                                            >
                                                                <p style={{ cursor: 'pointer' }}>
                                                                    <img src={(el.src)}
                                                                        alt={el.src.split('/')[4]} />
                                                                    <span>{el.name}</span>
                                                                </p>
                                                            </li>
                                                        )
                                                    }
                                                </ul>

                                            </div>
                                        </div>
                                        {/*Post section*/}
                                        <div className="product-feed-tab current" id="feed-dd">
                                            <div className="posts-section">
                                                {/*<Post/>*/}
                                            </div>
                                        </div>
                                        {/*END Post section*/}
                                        {/*Bids*/}
                                        <div className="product-feed-tab" id="my-bids">
                                            <ul className="nav nav-tabs bid-tab" id="myTab" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" id="home-tab" data-toggle="tab"
                                                        href="#home" role="tab" aria-controls="home"
                                                        aria-selected="true">Manage Bids</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="bidders-tab" data-toggle="tab"
                                                        href="#bidders" role="tab" aria-controls="contact"
                                                        aria-selected="false">Manage Bidders</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="profile-tab" data-toggle="tab"
                                                        href="#profile" role="tab" aria-controls="profile"
                                                        aria-selected="false">My Active Bids</a>
                                                </li>
                                            </ul>
                                            <div className="tab-content" id="myTabContent">
                                                <div className="tab-pane fade show active" id="home" role="tabpanel"
                                                    aria-labelledby="home-tab">
                                                    <div className="post-bar">
                                                        <div className="post_topbar">
                                                            <div className="wordpressdevlp">
                                                                <h2>Travel Wordpress Theme</h2>

                                                                <p><i className="la la-clock-o"></i>5 Hour Lefts</p>
                                                            </div>
                                                            <ul className="savedjob-info mangebid manbids">
                                                                <li>
                                                                    <h3>Bids</h3>
                                                                    <p>4</p>
                                                                </li>
                                                                <li>
                                                                    <h3>Avg Bid (USD)</h3>
                                                                    <p>$510</p>
                                                                </li>
                                                                <li>
                                                                    <h3>Project Budget (USD)</h3>
                                                                    <p>$500 - $600</p>
                                                                </li>
                                                                <ul className="bk-links bklink">
                                                                    <li><a href="#/" title=""><i
                                                                        className="la la-bookmark"></i></a></li>
                                                                    <li><a href="#/" title=""><i
                                                                        className="la la-envelope"></i></a></li>
                                                                </ul>
                                                            </ul>
                                                            <br />
                                                            <div className="cadidatesbtn bidsbtn">
                                                                <button type="button" className="btn btn-primary">
                                                                    <span className="badge badge-light">3</span>Candidates
                                                                </button>
                                                                <a href="#/">
                                                                    <i className="far fa-edit"></i>
                                                                </a>
                                                                <a href="#/">
                                                                    <i className="far fa-trash-alt"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="post-bar">
                                                        <div className="post_topbar">
                                                            <div className="wordpressdevlp">
                                                                <h2>Travel Wordpress Theme</h2>

                                                                <p><i className="la la-clock-o"></i>5 Hour Lefts</p>
                                                            </div>
                                                            <ul className="savedjob-info mangebid manbids">
                                                                <li>
                                                                    <h3>Bids</h3>
                                                                    <p>4</p>
                                                                </li>
                                                                <li>
                                                                    <h3>Avg Bid (USD)</h3>
                                                                    <p>$510</p>
                                                                </li>
                                                                <li>
                                                                    <h3>Project Budget (USD)</h3>
                                                                    <p>$500 - $600</p>
                                                                </li>
                                                                <ul className="bk-links bklink">
                                                                    <li><a href="#/" title=""><i
                                                                        className="la la-bookmark"></i></a></li>
                                                                    <li><a href="#/" title=""><i
                                                                        className="la la-envelope"></i></a></li>
                                                                </ul>
                                                            </ul>
                                                            <br />
                                                            <div className="cadidatesbtn bidsbtn">
                                                                <button type="button" className="btn btn-primary">
                                                                    <span className="badge badge-light">3</span>Candidates
                                                                </button>
                                                                <a href="#/">
                                                                    <i className="far fa-edit"></i>
                                                                </a>
                                                                <a href="#/">
                                                                    <i className="far fa-trash-alt"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="post-bar">
                                                        <div className="post_topbar">
                                                            <div className="wordpressdevlp">
                                                                <h2>Travel Wordpress Theme</h2>

                                                                <p><i className="la la-clock-o"></i>5 Hour Lefts</p>
                                                            </div>
                                                            <ul className="savedjob-info mangebid manbids">
                                                                <li>
                                                                    <h3>Bids</h3>
                                                                    <p>4</p>
                                                                </li>
                                                                <li>
                                                                    <h3>Avg Bid (USD)</h3>
                                                                    <p>$510</p>
                                                                </li>
                                                                <li>
                                                                    <h3>Project Budget (USD)</h3>
                                                                    <p>$500 - $600</p>
                                                                </li>
                                                                <ul className="bk-links bklink">
                                                                    <li><a href="#/" title=""><i
                                                                        className="la la-bookmark"></i></a></li>
                                                                    <li><a href="#/" title=""><i
                                                                        className="la la-envelope"></i></a></li>
                                                                </ul>
                                                            </ul>
                                                            <br />
                                                            <div className="cadidatesbtn bidsbtn">
                                                                <button type="button" className="btn btn-primary">
                                                                    <span className="badge badge-light">3</span>Candidates
                                                                </button>
                                                                <a href="#/">
                                                                    <i className="far fa-edit"></i>
                                                                </a>
                                                                <a href="#/">
                                                                    <i className="far fa-trash-alt"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="profile" role="tabpanel"
                                                    aria-labelledby="profile-tab">
                                                    <div className="post-bar">
                                                        <div className="post_topbar active-bids">
                                                            <div className="usy-dt">
                                                                <div className="wordpressdevlp">
                                                                    <h2>Travel Wordpress Theme</h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <ul className="savedjob-info activ-bidinfo">
                                                            <li>
                                                                <h3>Fixed Price</h3>
                                                                <p>$500</p>
                                                            </li>
                                                            <li>
                                                                <h3>Delivery Time</h3>
                                                                <p>8 Days</p>
                                                            </li>
                                                            <div className="devepbtn activebtn">
                                                                <a href="#/">
                                                                    <i className="far fa-edit"></i>
                                                                </a>
                                                                <a href="#/">
                                                                    <i className="far fa-trash-alt"></i>
                                                                </a>
                                                            </div>
                                                        </ul>
                                                    </div>
                                                    <div className="post-bar">
                                                        <div className="post_topbar active-bids">
                                                            <div className="usy-dt">
                                                                <div className="wordpressdevlp">
                                                                    <h2>Restaurant Android Application</h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <ul className="savedjob-info activ-bidinfo">
                                                            <li>
                                                                <h3>Fixed Price</h3>
                                                                <p>$1500</p>
                                                            </li>
                                                            <li>
                                                                <h3>Delivery Time</h3>
                                                                <p>15 Days</p>
                                                            </li>
                                                            <div className="devepbtn activebtn">
                                                                <a href="#/">
                                                                    <i className="far fa-edit"></i>
                                                                </a>
                                                                <a href="#/">
                                                                    <i className="far fa-trash-alt"></i>
                                                                </a>
                                                            </div>
                                                        </ul>
                                                    </div>
                                                    <div className="post-bar">
                                                        <div className="post_topbar active-bids">
                                                            <div className="usy-dt">
                                                                <div className="wordpressdevlp">
                                                                    <h2>Online Shopping Html Template with PHP</h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <ul className="savedjob-info activ-bidinfo">
                                                            <li>
                                                                <h3>Fixed Price</h3>
                                                                <p>$1500</p>
                                                            </li>
                                                            <li>
                                                                <h3>Delivery Time</h3>
                                                                <p>15 Days</p>
                                                            </li>
                                                            <div className="devepbtn activebtn">
                                                                <a href="#/">
                                                                    <i className="far fa-edit"></i>
                                                                </a>
                                                                <a href="#/">
                                                                    <i className="far fa-trash-alt"></i>
                                                                </a>
                                                            </div>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="contact" role="tabpanel"
                                                    aria-labelledby="contact-tab">
                                                    <div className="post-bar">
                                                        <div className="post_topbar">
                                                            <div className="usy-dt">
                                                                <div className="wordpressdevlp">
                                                                    <h2>Senior Wordpress Developer</h2>
                                                                    <br />
                                                                    <p><i className="la la-clock-o"></i>Posted on 30
                                                                        August 2018</p>
                                                                </div>
                                                            </div>
                                                            <div className="ed-opts">
                                                                <a href="#/" title="" className="ed-opts-open"><i
                                                                    className="la la-ellipsis-v"></i></a>
                                                                <ul className="ed-options">
                                                                    <li><a href="#/" title="">Edit Post</a></li>
                                                                    <li><a href="#/" title="">Unsaved</a></li>
                                                                    <li><a href="#/" title="">Unbid</a></li>
                                                                    <li><a href="#/" title="">Close</a></li>
                                                                    <li><a href="#/" title="">Hide</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <ul className="savedjob-info">
                                                            <li>
                                                                <h3>Applicants</h3>
                                                                <p>10</p>
                                                            </li>
                                                            <li>
                                                                <h3>Job Type</h3>
                                                                <p>Full Time</p>
                                                            </li>
                                                            <li>
                                                                <h3>Salary</h3>
                                                                <p>$600 - Mannual</p>
                                                            </li>
                                                            <li>
                                                                <h3>Posted : 5 Days Ago</h3>
                                                                <p>Open</p>
                                                            </li>
                                                            <div className="devepbtn">
                                                                <a className="clrbtn" href="#/">Applied</a>
                                                                <a className="clrbtn" href="#/">Message</a>
                                                                <a href="#/">
                                                                    <i className="far fa-trash-alt"></i>
                                                                </a>
                                                            </div>
                                                        </ul>
                                                    </div>
                                                    <div className="post-bar">
                                                        <div className="post_topbar">
                                                            <div className="usy-dt">
                                                                <div className="wordpressdevlp">
                                                                    <h2>Senior PHP Developer</h2>
                                                                    <br />
                                                                    <p><i className="la la-clock-o"></i>Posted on 30
                                                                        August 2018</p>
                                                                </div>
                                                            </div>
                                                            <div className="ed-opts">
                                                                <a href="#/" title="" className="ed-opts-open"><i
                                                                    className="la la-ellipsis-v"></i></a>
                                                                <ul className="ed-options">
                                                                    <li><a href="#/" title="">Edit Post</a></li>
                                                                    <li><a href="#/" title="">Unsaved</a></li>
                                                                    <li><a href="#/" title="">Unbid</a></li>
                                                                    <li><a href="#/" title="">Close</a></li>
                                                                    <li><a href="#/" title="">Hide</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <ul className="savedjob-info">
                                                            <li>
                                                                <h3>Applicants</h3>
                                                                <p>10</p>
                                                            </li>
                                                            <li>
                                                                <h3>Job Type</h3>
                                                                <p>Full Time</p>
                                                            </li>
                                                            <li>
                                                                <h3>Salary</h3>
                                                                <p>$600 - Mannual</p>
                                                            </li>
                                                            <li>
                                                                <h3>Posted : 5 Days Ago</h3>
                                                                <p>Open</p>
                                                            </li>
                                                            <div className="devepbtn">
                                                                <a className="clrbtn" href="#/">Applied</a>
                                                                <a className="clrbtn" href="#/">Message</a>
                                                                <a href="#/">
                                                                    <i className="far fa-trash-alt"></i>
                                                                </a>
                                                            </div>
                                                        </ul>
                                                    </div>
                                                    <div className="post-bar">
                                                        <div className="post_topbar">
                                                            <div className="usy-dt">
                                                                <div className="wordpressdevlp">
                                                                    <h2>UI UX Designer</h2>
                                                                    <br />
                                                                    <p><i className="la la-clock-o"></i>Posted on 30
                                                                        August 2018</p>
                                                                </div>
                                                            </div>
                                                            <div className="ed-opts">
                                                                <a href="#/" title="" className="ed-opts-open"><i
                                                                    className="la la-ellipsis-v"></i></a>
                                                                <ul className="ed-options">
                                                                    <li><a href="#/" title="">Edit Post</a></li>
                                                                    <li><a href="#/" title="">Unsaved</a></li>
                                                                    <li><a href="#/" title="">Unbid</a></li>
                                                                    <li><a href="#/" title="">Close</a></li>
                                                                    <li><a href="#/" title="">Hide</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <ul className="savedjob-info">
                                                            <li>
                                                                <h3>Applicants</h3>
                                                                <p>10</p>
                                                            </li>
                                                            <li>
                                                                <h3>Job Type</h3>
                                                                <p>Full Time</p>
                                                            </li>
                                                            <li>
                                                                <h3>Salary</h3>
                                                                <p>$600 - Mannual</p>
                                                            </li>
                                                            <li>
                                                                <h3>Posted : 5 Days Ago</h3>
                                                                <p>Open</p>
                                                            </li>
                                                            <div className="devepbtn">
                                                                <a className="clrbtn" href="#/">Applied</a>
                                                                <a className="clrbtn" href="#/">Message</a>
                                                                <a href="#/">
                                                                    <i className="far fa-trash-alt"></i>
                                                                </a>
                                                            </div>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="bidders" role="tabpanel"
                                                    aria-labelledby="bidders-tab">
                                                    <div className="post-bar">
                                                        <div className="post_topbar post-bid">
                                                            <div className="usy-dt">
                                                                <img src="images/resources/us-pic.png" alt=""/>
                                                                <div className="usy-name">
                                                                    <h3>John Doe</h3>
                                                                    <div className="epi-sec epi2">
                                                                        <ul className="descp descptab bklink">
                                                                            <li><img src="images/icon8.png" alt=""
                                                                            /><span>Epic Coder</span>
                                                                            </li>
                                                                            <li><img src="images/icon9.png" alt=""
                                                                            /><span>India</span></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ed-opts">
                                                                <a href="#/" title="" className="ed-opts-open"><i
                                                                    className="la la-ellipsis-v"></i></a>
                                                                <ul className="ed-options">
                                                                    <li><a href="#/" title="">Edit Post</a></li>
                                                                    <li><a href="#/" title="">Accept</a></li>
                                                                    <li><a href="#/" title="">Unbid</a></li>
                                                                    <li><a href="#/" title="">Close</a></li>
                                                                    <li><a href="#/" title="">Hide</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="job_descp noborder">
                                                                <div className="star-descp review profilecnd">
                                                                    <ul className="bklik">
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star-half-o"></i></li>
                                                                        <a href="#/" title="">5.0 of 5 Reviews</a>
                                                                    </ul>
                                                                </div>
                                                                <ul className="savedjob-info biddersinfo">
                                                                    <li>
                                                                        <h3>Fixed Price</h3>
                                                                        <p>$500</p>
                                                                    </li>
                                                                    <li>
                                                                        <h3>Delivery Time</h3>
                                                                        <p>10 Days</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="devepbtn appliedinfo bidsbtn">
                                                                    <a className="clrbtn" href="#/">Accept</a>
                                                                    <a className="clrbtn" href="#/">View Profile</a>
                                                                    <a className="clrbtn" href="#/">Message</a>
                                                                    <a href="#/">
                                                                        <i className="far fa-trash-alt"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="post-bar">
                                                        <div className="post_topbar post-bid">
                                                            <div className="usy-dt">
                                                                <img
                                                                alt=""
                                                                    src="http://www.gambolthemes.net/workwise-new/images/resources/Jassica.jpg"
                                                                />
                                                                <div className="usy-name">
                                                                    <h3>John Doe</h3>
                                                                    <div className="epi-sec epi2">
                                                                        <ul className="descp descptab bklink">
                                                                            <li><img src="images/icon8.png" alt=""
                                                                            />><span>Epic Coder</span>
                                                                            </li>
                                                                            <li><img src="images/icon9.png" alt=""
                                                                            />><span>India</span></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ed-opts">
                                                                <a href="#/" title="" className="ed-opts-open"><i
                                                                    className="la la-ellipsis-v"></i></a>
                                                                <ul className="ed-options">
                                                                    <li><a href="#/" title="">Edit Post</a></li>
                                                                    <li><a href="#/" title="">Accept</a></li>
                                                                    <li><a href="#/" title="">Unbid</a></li>
                                                                    <li><a href="#/" title="">Close</a></li>
                                                                    <li><a href="#/" title="">Hide</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="job_descp noborder">
                                                                <div className="star-descp review profilecnd">
                                                                    <ul className="bklik">
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star-half-o"></i></li>
                                                                        <a href="#/" title="">5.0 of 5 Reviews</a>
                                                                    </ul>
                                                                </div>
                                                                <ul className="savedjob-info biddersinfo">
                                                                    <li>
                                                                        <h3>Fixed Price</h3>
                                                                        <p>$500</p>
                                                                    </li>
                                                                    <li>
                                                                        <h3>Delivery Time</h3>
                                                                        <p>10 Days</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="devepbtn appliedinfo bidsbtn">
                                                                    <a className="clrbtn" href="#/">Accept</a>
                                                                    <a className="clrbtn" href="#/">View Profile</a>
                                                                    <a className="clrbtn" href="#/">Message</a>
                                                                    <a href="#/">
                                                                        <i className="far fa-trash-alt"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="post-bar">
                                                        <div className="post_topbar post-bid">
                                                            <div className="usy-dt">
                                                                <img src="images/resources/rock.jpg" alt="" />
                                                                <div className="usy-name">
                                                                    <h3>John Doe</h3>
                                                                    <div className="epi-sec epi2">
                                                                        <ul className="descp descptab bklink">
                                                                            <li><img src="images/icon8.png" alt=""
                                                                            />><span>Epic Coder</span>
                                                                            </li>
                                                                            <li><img src="images/icon9.png" alt=""
                                                                            />><span>India</span></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ed-opts">
                                                                <a href="#/" title="" className="ed-opts-open"><i
                                                                    className="la la-ellipsis-v"></i></a>
                                                                <ul className="ed-options">
                                                                    <li><a href="#/" title="">Edit Post</a></li>
                                                                    <li><a href="#/" title="">Accept</a></li>
                                                                    <li><a href="#/" title="">Unbid</a></li>
                                                                    <li><a href="#/" title="">Close</a></li>
                                                                    <li><a href="#/" title="">Hide</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="job_descp noborder">
                                                                <div className="star-descp review profilecnd">
                                                                    <ul className="bklik">
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star-half-o"></i></li>
                                                                        <a href="#/" title="">5.0 of 5 Reviews</a>
                                                                    </ul>
                                                                </div>
                                                                <ul className="savedjob-info biddersinfo">
                                                                    <li>
                                                                        <h3>Fixed Price</h3>
                                                                        <p>$500</p>
                                                                    </li>
                                                                    <li>
                                                                        <h3>Delivery Time</h3>
                                                                        <p>10 Days</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="devepbtn appliedinfo bidsbtn">
                                                                    <a className="clrbtn" href="#/">Accept</a>
                                                                    <a className="clrbtn" href="#/">View Profile</a>
                                                                    <a className="clrbtn" href="#/">Message</a>
                                                                    <a href="#/">
                                                                        <i className="far fa-trash-alt"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*END Bids*/}
                                        {/*InFO*/}
                                        <div className="product-feed-tab" id="info-dd">
                                            <div className="user-profile-ov">
                                                <h3><a href="#/" title="" className="overview-open">Overview</a>
                                                    <a href="#/" title="" className="overview-open"><i
                                                        className="fa fa-pencil" onClick={overviewOpen}></i></a></h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                                tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit
                                                amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam
                                                lectus commodo viverra. Nunc eu augue nec arcu efficitur faucibus.
                                                Aliquam accumsan ac magna convallis bibendum. Quisque laoreet augue
                                                eget augue fermentum scelerisque. Vivamus dignissim mollis est
                                                dictum blandit. Nam porta auctor neque sed congue. Nullam rutrum
                                                eget ex at maximus. Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Donec eget vestibulum lorem.</p>
                                            </div>
                                            <div className="user-profile-ov st2">
                                                <h3><a href="#/" title="" className="exp-bx-open">Experience </a><a
                                                    href="#/" title="" className="exp-bx-open" onClick={overviewOpen}><i
                                                        className="fa fa-pencil"></i></a> <a href="#/" title=""
                                                            className="exp-bx-open"><i
                                                                className="fa fa-plus-square"></i></a></h3>
                                                <h4>Web designer <a href="#/" title=""><i
                                                    className="fa fa-pencil"></i></a></h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                                tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit
                                                amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam
                                                    lectus commodo viverra. </p>
                                                <h4>UI / UX Designer <a href="#/" title=""><i
                                                    className="fa fa-pencil"></i></a></h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                                    tempor aliquam felis, nec condimentum ipsum commodo id.</p>
                                                <h4>PHP developer <a href="#/" title=""><i className="fa fa-pencil"></i></a>
                                                </h4>
                                                <p className="no-margin">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum
                                                commodo id. Vivamus sit amet augue nec urna efficitur tincidunt.
                                                    Vivamus consectetur aliquam lectus commodo viverra. </p>
                                            </div>
                                            <div className="user-profile-ov">
                                                <h3><a href="#/" title="" className="ed-box-open">Education</a> <a
                                                    href="#/" title="" className="ed-box-open"><i
                                                        className="fa fa-pencil"></i></a> <a href="#/" title=""><i
                                                            className="fa fa-plus-square"></i></a></h3>
                                                <h4>Master of Computer Science</h4>
                                                <span>2015 - 2018</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                                tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit
                                                amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam
                                                    lectus commodo viverra. </p>
                                            </div>
                                            <div className="user-profile-ov">
                                                <h3><a href="#/" title="" className="lct-box-open">Location</a> <a
                                                    href="#/" title="" className="lct-box-open"><i
                                                        className="fa fa-pencil"></i></a> <a href="#/" title=""><i
                                                            className="fa fa-plus-square"></i></a></h3>
                                                <h4>India</h4>
                                                <p>151/4 BT Chownk, Delhi </p>
                                            </div>
                                            <div className="user-profile-ov">
                                                <h3><a href="#/" title="" className="skills-open">Skills</a> <a href="#/"
                                                    title=""
                                                    className="skills-open"><i
                                                        className="fa fa-pencil"></i></a> <a href="#/"><i
                                                            className="fa fa-plus-square"></i></a></h3>
                                                <ul>
                                                    <li><a href="#/" title="">HTML</a></li>
                                                    <li><a href="#/" title="">PHP</a></li>
                                                    <li><a href="#/" title="">CSS</a></li>
                                                    <li><a href="#/" title="">Javascript</a></li>
                                                    <li><a href="#/" title="">Wordpress</a></li>
                                                    <li><a href="#/" title="">Photoshop</a></li>
                                                    <li><a href="#/" title="">Illustrator</a></li>
                                                    <li><a href="#/" title="">Corel Draw</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/*END InFO*/}

                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <RightSideBar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/*overview pop up*/}
            <div className="overview-box" id="overview-box">
                <div className="overview-edit">
                    <h3>Overview</h3>
                    <span>5000 character left</span>
                    <form>
                        <textarea></textarea>
                        <button type="submit" className="save">Save</button>
                        <button type="submit" className="cancel">Cancel</button>
                    </form>
                    <a href="#/" title="" className="close-box" onClick={closeBox}><i className="la la-close"></i></a>
                </div>
            </div>
            {/*overview-edit end*/}

            {/*Experience*/}
            <div className="overview-box" id="experience-box">
                <div className="overview-edit">
                    <h3>Experience</h3>
                    <form>
                        <input type="text" name="subject" placeholder="Subject" />
                        <textarea></textarea>
                        <button type="submit" className="save">Save</button>
                        <button type="submit" className="save-add">Save &amp; Add More</button>
                        <button type="submit" className="cancel">Cancel</button>
                    </form>
                    <a href="#/" title="" className="close-box" onClick={closeBox}><i className="la la-close"></i></a>
                </div>
            </div>
            {/*overview-edit end*/}


        </div>
    );
}

export default Profile;