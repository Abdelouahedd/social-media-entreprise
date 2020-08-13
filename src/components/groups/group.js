import React from 'react';
import GroupCard from "./compenet/GroupCard";
import './group.css'
function Group(props) {
    const groups = [
        {
            id: 1,
            name: "Facebook Inc.",
            img: "images/resources/cmp-icon1.png",
            post: 120,
            member: 100
        },
        {
            id: 2,
            name: "Facebook Inc.",
            img: "images/resources/cmp-icon1.png",
            post: 120,
            member: 100
        },
        {
            id: 3,
            name: "Facebook Inc.",
            img: "images/resources/cmp-icon1.png",
            post: 120,
            member: 100
        },
        {
            id: 4,
            name: "Facebook Inc.",
            img: "images/resources/cmp-icon1.png",
            post: 120,
            member: 100
        }
    ]
    return (
        <section className="companies-info">
            <div className="container">
                {/*<div className="company-title">*/}
                {/*    <h3>All Groupes</h3>*/}
                {/*</div>*/}
                <div className="header-for-bg">
                    <div className="background-header position-relative">
                        <img src={require("../../assets/images/page-img/profile-bg7.jpg")} className="img-fluid w-100 rounded rounded"
                             alt="header-bg"/>
                            <div className="title-on-header">
                                <div className="data-block">
                                    <h2>Groups</h2>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="companies-list">
                    <div className="row">
                        {
                            groups.map(group =>
                                <GroupCard key={group.id} id={group.id}
                                           name={group.name}
                                           img={group.img}
                                           post={group.post}
                                           member={group.member}/>
                            )
                        }
                        {/* <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="company_profile_info">
                                <div className="company-up-info">
                                    <img src={require("../../assets/images/resources/cmp-icon.png")} alt=""/>
                                    <h3>Facebook Inc.</h3>
                                    <h4>Establish Feb, 2004</h4>
                                    <ul>
                                        <li className="pl-3 pr-3">
                                            <p className="mb-0">Post </p>
                                            <h6>120</h6>
                                        </li>
                                        <li>
                                            <p className="mb-0">Member </p>
                                            <h6>120</h6>
                                        </li>
                                    </ul>
                                </div>
                                <a href="/" title="" className="view-more-pro">Join</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="company_profile_info">
                                <div className="company-up-info">
                                    <img src={require("../../assets/images/resources/cmp-icon1.png")} alt=""/>
                                    <h3>Google Inc.</h3>
                                    <h4>Establish Feb, 2004</h4>
                                    <ul>
                                        <li><a href="#" title="" className="follow">Follow</a></li>
                                        <li><a href="#" title="" className="message-us"><i
                                            className="fa fa-envelope"/></a></li>
                                    </ul>
                                </div>
                                <a href="/" title="" className="view-more-pro">Join</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="company_profile_info">
                                <div className="company-up-info">
                                    <img src={require("../../assets/images/resources/cmp-icon2.png")} alt=""/>
                                    <h3>Pinterest</h3>
                                    <h4>Establish Feb, 2004</h4>
                                    <ul>
                                        <li><a href="#" title="" className="follow">Follow</a></li>
                                        <li><a href="#" title="" className="message-us"><i
                                            className="fa fa-envelope"/></a></li>
                                    </ul>
                                </div>
                                <a href="/" title="" className="view-more-pro">Join</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="company_profile_info">
                                <div className="company-up-info">
                                    <img src={require("../../assets/images/resources/cmp-icon3.png")} alt=""/>
                                    <h3>Microsoft Inc.</h3>
                                    <h4>Establish Feb, 2004</h4>
                                    <ul>
                                        <li><a href="#" title="" className="follow">Follow</a></li>
                                        <li><a href="#" title="" className="message-us"><i
                                            className="fa fa-envelope"/></a></li>
                                    </ul>
                                </div>
                                <a href="/" title="" className="view-more-pro">Join</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="company_profile_info">
                                <div className="company-up-info">
                                    <img src={require("../../assets/images/resources/cmp-icon4.png")} alt=""/>
                                    <h3>Line Inc.</h3>
                                    <h4>Establish Feb, 2004</h4>
                                    <ul>
                                        <li><a href="#" title="" className="follow">Follow</a></li>
                                        <li><a href="#" title="" className="message-us"><i
                                            className="fa fa-envelope"/></a></li>
                                    </ul>
                                </div>
                                <a href="/" title="" className="view-more-pro">Join</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="company_profile_info">
                                <div className="company-up-info">
                                    <img src={require("../../assets/images/resources/cmp-icon5.png")} alt=""/>
                                    <h3>Linked In</h3>
                                    <h4>Establish Feb, 2004</h4>
                                    <ul>
                                        <li><a href="#" title="" className="follow">Follow</a></li>
                                        <li><a href="#" title="" className="message-us"><i
                                            className="fa fa-envelope"/></a></li>
                                    </ul>
                                </div>
                                <a href="/" title="" className="view-more-pro">Join</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="company_profile_info">
                                <div className="company-up-info">
                                    <img src={require("../../assets/images/resources/cmp-icon6.png")} alt=""/>
                                    <h3>Apple Inc.</h3>
                                    <h4>Establish Feb, 2004</h4>
                                    <ul>
                                        <li><a href="#" title="" className="follow">Follow</a></li>
                                        <li><a href="#" title="" className="message-us"><i
                                            className="fa fa-envelope"/></a></li>
                                    </ul>
                                </div>
                                <a href="/" title="" className="view-more-pro">Join</a>
                            </div>
                        </div>*/}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Group;