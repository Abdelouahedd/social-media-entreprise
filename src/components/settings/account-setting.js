import React from 'react';
import EditProfil from "../profile/editProfil";
import UpdatePassword from "./components/UpdatePassword";
import Notification from "./components/notification";
import Blocking from "./components/blocking";
import DeactivateAccount from "./components/deactivateAccount";

function AccountSetting(props) {
    return (
        <section className="profile-account-setting">
            <div className="container">
                <div className="account-tabs-setting">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className=" acc-leftbar ">
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    {/*Edit Profile of current user*/}
                                    <a className="nav-item nav-link active" id="nav-acc-tab" data-toggle="tab"
                                       href="#nav-acc" role="tab" aria-controls="nav-acc" aria-selected="true"><i
                                        className="la la-cogs"/>Account Setting</a>
                                    {/*update password of current User*/}
                                    <a className="nav-item nav-link" id="nav-password-tab" data-toggle="tab"
                                       href="#nav-password" role="tab" aria-controls="nav-password"
                                       aria-selected="false"><i className="fa fa-lock"/>Change Password</a>
                                    {/*show All notification*/}
                                    <a className="nav-item nav-link" id="nav-notification-tab" data-toggle="tab"
                                       href="#nav-notification" role="tab" aria-controls="nav-notification"
                                       aria-selected="false"><i className="fa fa-flash"/>Notifications</a>

                                    <a className="nav-item nav-link" id="nav-privcy-tab" data-toggle="tab"
                                       href="#privcy" role="tab" aria-controls="privacy" aria-selected="false"><i
                                        className="fa fa-group"/>Requests</a>

                                    <a className="nav-item nav-link" id="security" data-toggle="tab"
                                       href="#security-login" role="tab" aria-controls="security-login"
                                       aria-selected="false"><i className="fa fa-user-secret"/>Security and Login</a>
                                    <a className="nav-item nav-link" id="nav-privacy-tab" data-toggle="tab"
                                       href="#privacy" role="tab" aria-controls="privacy" aria-selected="false"><i
                                        className="fa fa-paw"/>Privacy</a>
                                    <a className="nav-item nav-link" id="nav-blockking-tab" data-toggle="tab"
                                       href="#blockking" role="tab" aria-controls="blockking" aria-selected="false"><i
                                        className="fa fa-cc-diners-club"/>Blocking</a>
                                    <a className="nav-item nav-link" id="nav-deactivate-tab" data-toggle="tab"
                                       href="#nav-deactivate" role="tab" aria-controls="nav-deactivate"
                                       aria-selected="false"><i className="fa fa-random"/>Deactivate Account</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-acc" role="tabpanel"
                                     aria-labelledby="nav-acc-tab">
                                    <EditProfil/>
                                </div>
                                <div className="tab-pane fade" id="nav-password" role="tabpanel"
                                     aria-labelledby="nav-password-tab">
                                    <UpdatePassword/>
                                </div>
                                <div className="tab-pane fade" id="nav-notification" role="tabpanel"
                                     aria-labelledby="nav-notification-tab">
                                    <Notification/>
                                </div>
                                <div className="tab-pane fade" id="privcy" role="tabpanel"
                                     aria-labelledby="nav-privcy-tab">
                                    <div className="acc-setting">
                                        <h3>Requests</h3>
                                        <div className="requests-list">
                                            <div className="request-details">
                                                <div className="noty-user-img">
                                                    <img src="images/resources/r-img1.png" alt=""/>
                                                </div>
                                                <div className="request-info">
                                                    <h3>Jessica William</h3>
                                                    <span>Graphic Designer</span>
                                                </div>
                                                <div className="accept-feat">
                                                    <ul>
                                                        <li>
                                                            <button type="submit" className="accept-req">Accept</button>
                                                        </li>
                                                        <li>
                                                            <button type="submit" className="close-req"><i
                                                                className="la la-close"></i></button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="request-details">
                                                <div className="noty-user-img">
                                                    <img src="images/resources/r-img2.png" alt=""/>
                                                </div>
                                                <div className="request-info">
                                                    <h3>John Doe</h3>
                                                    <span>PHP Developer</span>
                                                </div>
                                                <div className="accept-feat">
                                                    <ul>
                                                        <li>
                                                            <button type="submit" className="accept-req">Accept</button>
                                                        </li>
                                                        <li>
                                                            <button type="submit" className="close-req"><i
                                                                className="la la-close"></i></button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="request-details">
                                                <div className="noty-user-img">
                                                    <img src={require("../../assets/images/resources/r-img3.png")}
                                                         alt=""/>
                                                </div>
                                                <div className="request-info">
                                                    <h3>Poonam</h3>
                                                    <span>Wordpress Developer</span>
                                                </div>
                                                <div className="accept-feat">
                                                    <ul>
                                                        <li>
                                                            <button type="submit" className="accept-req">Accept</button>
                                                        </li>
                                                        <li>
                                                            <button type="submit" className="close-req"><i
                                                                className="la la-close"></i></button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="request-details">
                                                <div className="noty-user-img">
                                                    <img src="images/resources/r-img4.png" alt=""/>
                                                </div>
                                                <div className="request-info">
                                                    <h3>Bill Gates</h3>
                                                    <span>C & C++ Developer</span>
                                                </div>
                                                <div className="accept-feat">
                                                    <ul>
                                                        <li>
                                                            <button type="submit" className="accept-req">Accept</button>
                                                        </li>
                                                        <li>
                                                            <button type="submit" className="close-req"><i
                                                                className="la la-close"></i></button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="request-details">
                                                <div className="noty-user-img">
                                                    <img src="images/resources/r-img5.png" alt=""/>
                                                </div>
                                                <div className="request-info">
                                                    <h3>Jessica William</h3>
                                                    <span>Graphic Designer</span>
                                                </div>
                                                <div className="accept-feat">
                                                    <ul>
                                                        <li>
                                                            <button type="submit" className="accept-req">Accept</button>
                                                        </li>
                                                        <li>
                                                            <button type="submit" className="close-req"><i
                                                                className="la la-close"></i></button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="request-details">
                                                <div className="noty-user-img">
                                                    <img src="images/resources/r-img6.png" alt=""/>
                                                </div>
                                                <div className="request-info">
                                                    <h3>John Doe</h3>
                                                    <span>PHP Developer</span>
                                                </div>
                                                <div className="accept-feat">
                                                    <ul>
                                                        <li>
                                                            <button type="submit" className="accept-req">Accept</button>
                                                        </li>
                                                        <li>
                                                            <button type="submit" className="close-req"><i
                                                                className="la la-close"></i></button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="security-login" role="tabpanel"
                                     aria-labelledby="security">
                                    <div className="privacy security">
                                        <div className="row">
                                            <div className="col-12">
                                                <h3>Security and Login</h3>
                                                <hr/>
                                                <h3>Two - Step Verification</h3>
                                                <p>Help protect your account by enabling extra layers of
                                                    security.</p>
                                                <hr/>
                                                <h3>Security question</h3><i className="la la-edit"></i>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input"
                                                           id="customCheck1"/>
                                                    <label className="custom-control-label"
                                                           htmlFor="customCheck1">Conform your identity with
                                                        a question only you know the answer to</label>
                                                </div>
                                                <hr/>
                                                <h3>Security question</h3>
                                                <p>Before can you set a new security question,</p>
                                                <hr/>
                                                <h3>Current Question</h3>
                                                <p>Q: Your favorite actor?</p>
                                                <br/>
                                                <h3>New Question</h3>
                                                <form>
                                                    <div className="form-group">
                                                        <select className="form-control"
                                                                id="exampleFormControlSelect1"
                                                                style={{
                                                                    WebkitAppearance: "menulist-button",

                                                                }}>
                                                            <option>Please Select New Question
                                                            </option>
                                                            <option>Select Second Queston</option>
                                                        </select>
                                                    </div>
                                                </form>
                                                <h3>Answer</h3>
                                                <form>

                                                    <div className="form-group">
                                                        <input type="text" className="form-control"
                                                               id="exampleInputPassword1"
                                                               placeholder=" Answer here"/>
                                                    </div>
                                                </form>
                                                <div className="checkbox">
                                                    <div className="form-check">
                                                        <div
                                                            className="custom-control custom-radio">
                                                            <input type="radio" id="customRadio1"
                                                                   name="customRadio"
                                                                   className="custom-control-input"/>
                                                            <label
                                                                className="custom-control-label"
                                                                htmlFor="customRadio1">I
                                                                understand my account will be
                                                                locked if I am unable to answer
                                                                this question</label>
                                                        </div>
                                                    </div>
                                                    <div className="form-check">
                                                        <div
                                                            className="custom-control custom-radio">
                                                            <input type="radio" id="customRadio2"
                                                                   name="customRadio"
                                                                   className="custom-control-input"/>
                                                            <label
                                                                className="custom-control-label"
                                                                htmlFor="customRadio2">Remember
                                                                this device</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr/>
                                            </div>
                                        </div>
                                        <div className="btns">
                                            <a href="#">Save</a>
                                            <a href="#">Cancel</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="blockking" role="tabpanel"
                                     aria-labelledby="nav-blockking-tab">
                                    <Blocking/>
                                </div>
                                <div className="tab-pane fade" id="privciy" role="tabpanel"
                                     aria-labelledby="nav-privcy-tab">
                                    <div className="acc-setting">
                                        <h3>Requests</h3>
                                        <div className="requests-list">
                                            <div className="request-details">
                                                <div className="noty-user-img">
                                                    <img src="images/resources/r-img1.png" alt=""/>
                                                </div>
                                                <div className="request-info">
                                                    <h3>Jessica William</h3>
                                                    <span>Graphic Designer</span>
                                                </div>
                                                <div className="accept-feat">
                                                    <ul>
                                                        <li>
                                                            <button type="submit" className="accept-req">Accept</button>
                                                        </li>
                                                        <li>
                                                            <button type="submit" className="close-req"><i
                                                                className="la la-close"></i></button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="request-details">
                                                <div className="noty-user-img">
                                                    <img src="images/resources/r-img2.png" alt=""/>
                                                </div>
                                                <div className="request-info">
                                                    <h3>John Doe</h3>
                                                    <span>PHP Developer</span>
                                                </div>
                                                <div className="accept-feat">
                                                    <ul>
                                                        <li>
                                                            <button type="submit" className="accept-req">Accept</button>
                                                        </li>
                                                        <li>
                                                            <button type="submit" className="close-req"><i
                                                                className="la la-close"></i></button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="request-details">
                                                <div className="noty-user-img">
                                                    <img src="images/resources/r-img3.png" alt=""/>
                                                </div>
                                                <div className="request-info">
                                                    <h3>Poonam</h3>
                                                    <span>Wordpress Developer</span>
                                                </div>
                                                <div className="accept-feat">
                                                    <ul>
                                                        <li>
                                                            <button type="submit" className="accept-req">Accept</button>
                                                        </li>
                                                        <li>
                                                            <button type="submit" className="close-req"><i
                                                                className="la la-close"></i></button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="request-details">
                                                <div className="noty-user-img">
                                                    <img src="images/resources/r-img4.png" alt=""/>
                                                </div>
                                                <div className="request-info">
                                                    <h3>Bill Gates</h3>
                                                    <span>C & C++ Developer</span>
                                                </div>
                                                <div className="accept-feat">
                                                    <ul>
                                                        <li>
                                                            <button type="submit" className="accept-req">Accept</button>
                                                        </li>
                                                        <li>
                                                            <button type="submit" className="close-req"><i
                                                                className="la la-close"></i></button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="request-details">
                                                <div className="noty-user-img">
                                                    <img src="images/resources/r-img5.png" alt=""/>
                                                </div>
                                                <div className="request-info">
                                                    <h3>Jessica William</h3>
                                                    <span>Graphic Designer</span>
                                                </div>
                                                <div className="accept-feat">
                                                    <ul>
                                                        <li>
                                                            <button type="submit" className="accept-req">Accept</button>
                                                        </li>
                                                        <li>
                                                            <button type="submit" className="close-req"><i
                                                                className="la la-close"></i></button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="request-details">
                                                <div className="noty-user-img">
                                                    <img src="images/resources/r-img6.png" alt=""/>
                                                </div>
                                                <div className="request-info">
                                                    <h3>John Doe</h3>
                                                    <span>PHP Developer</span>
                                                </div>
                                                <div className="accept-feat">
                                                    <ul>
                                                        <li>
                                                            <button type="submit" className="accept-req">Accept</button>
                                                        </li>
                                                        <li>
                                                            <button type="submit" className="close-req"><i
                                                                className="la la-close"></i></button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="privacy" role="tabpanel"
                                     aria-labelledby="nav-privacy-tab">
                                    <div className="privac">
                                        <div className="row">
                                            <div className="col-12">
                                                <h3>Privacy</h3>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="dropdown privacydropd">
                                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Who
                                                        can see your email address</a>
                                                    <div className="dropdown-menu">
                                                        <p>Choose who can see your email address on your profile</p>
                                                        <div className="row">
                                                            <div className="col-md-9 col-sm-12">
                                                                <form className="radio-form">
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input type="checkbox"
                                                                               className="custom-control-input"
                                                                               id="customCheck1"/>
                                                                        <label className="custom-control-label"
                                                                               htmlFor="customCheck1">Everyone</label>
                                                                    </div>
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input type="checkbox"
                                                                               className="custom-control-input"
                                                                               id="customCheck2"/>
                                                                        <label className="custom-control-label"
                                                                               htmlFor="customCheck2">Friends</label>
                                                                    </div>
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input type="checkbox"
                                                                               className="custom-control-input"
                                                                               id="customCheck3"/>
                                                                        <label className="custom-control-label"
                                                                               htmlFor="customCheck3">Only
                                                                            Me</label>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            <div className="col-md-3 col-sm-12">
                                                                <p style={{float: "right"}}>Everyone</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="dropdown privacydropd">
                                                    <a href="#" className="dropdown-toggle"
                                                       data-toggle="dropdown">Who can see your Friends</a>
                                                    <div className="dropdown-menu">
                                                        <p>Choose who can see your list of connections</p>
                                                        <div className="row">
                                                            <div className="col-md-9 col-sm-12">
                                                                <form className="radio-form">
                                                                    <div
                                                                        className="custom-control custom-checkbox">
                                                                        <input type="checkbox"
                                                                               className="custom-control-input"
                                                                               id="customCheck4"/>
                                                                        <label
                                                                            className="custom-control-label"
                                                                            htmlFor="customCheck4">Everyone</label>
                                                                    </div>
                                                                    <div
                                                                        className="custom-control custom-checkbox">
                                                                        <input type="checkbox"
                                                                               className="custom-control-input"
                                                                               id="customCheck5"/>
                                                                        <label
                                                                            className="custom-control-label"
                                                                            htmlFor="customCheck5">Friends</label>
                                                                    </div>
                                                                    <div
                                                                        className="custom-control custom-checkbox">
                                                                        <input type="checkbox"
                                                                               className="custom-control-input"
                                                                               id="customCheck6"/>
                                                                        <label
                                                                            className="custom-control-label"
                                                                            htmlFor="customCheck6">Only
                                                                            Me</label>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            <div className="col-md-3 col-sm-12">
                                                                <p style={{float: "right"}}>Everyone</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="dropdown privacydropd">
                                                    <a href="#" className="dropdown-toggle"
                                                       data-toggle="dropdown">Manage who can discover your
                                                        profile from your email address</a>
                                                    <div className="dropdown-menu">
                                                        <p>Choose who can discover your profile if they are
                                                            not connected to you but have your email
                                                            address</p>
                                                        <div className="row">
                                                            <div className="col-md-9 col-sm-12">
                                                                <form className="radio-form">
                                                                    <div
                                                                        className="custom-control custom-checkbox">
                                                                        <input type="checkbox"
                                                                               className="custom-control-input"
                                                                               id="customCheck7"/>
                                                                        <label
                                                                            className="custom-control-label"
                                                                            htmlFor="customCheck7">Everyone</label>
                                                                    </div>
                                                                    <div
                                                                        className="custom-control custom-checkbox">
                                                                        <input type="checkbox"
                                                                               className="custom-control-input"
                                                                               id="customCheck8"/>
                                                                        <label
                                                                            className="custom-control-label"
                                                                            htmlFor="customCheck8">Friends</label>
                                                                    </div>
                                                                    <div
                                                                        className="custom-control custom-checkbox">
                                                                        <input type="checkbox"
                                                                               className="custom-control-input"
                                                                               id="customCheck9"/>
                                                                        <label
                                                                            className="custom-control-label"
                                                                            htmlFor="customCheck9">Only
                                                                            Me</label>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            <div className="col-md-3 col-sm-12">
                                                                <p style={{float: "right"}}>Everyone</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="dropdown privacydropd">
                                                    <a href="#" className="dropdown-toggle"
                                                       data-toggle="dropdown">Search history</a>
                                                    <div className="dropdown-menu">
                                                        <p>Clear all previous searches performed on
                                                            LinkedIn</p>
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <form className="radio-form">
                                                                    <div
                                                                        className="custom-control custom-checkbox">
                                                                        <input type="checkbox"
                                                                               className="custom-control-input"
                                                                               id="customCheck10"/>
                                                                        <label
                                                                            className="custom-control-label"
                                                                            htmlFor="customCheck10">Clear
                                                                            All History</label>
                                                                    </div>
                                                                </form>
                                                                <div className="privabtns">
                                                                    <a href="#">Clear All History</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="dropdown privacydropd">
                                                    <a href="#" className="dropdown-toggle"
                                                       data-toggle="dropdown">Sharing your profile
                                                        when you click apply</a>
                                                    <div className="dropdown-menu">
                                                        <p>Chose if you want to share your full
                                                            profile with the job poster when you're
                                                            taken off linkedin after clicking
                                                            apply </p>
                                                        <div className="row">
                                                            <div className="col-md-9 col-sm-12">
                                                                <form className="radio-form">
                                                                    <div
                                                                        className="custom-control custom-radio">
                                                                        <input type="radio"
                                                                               id="customRadio5"
                                                                               name="customRadio"
                                                                               className="custom-control-input"/>
                                                                        <label
                                                                            className="custom-control-label"
                                                                            htmlFor="customRadio5">Yes</label>
                                                                    </div>
                                                                    <div
                                                                        className="custom-control custom-radio">
                                                                        <input type="radio"
                                                                               id="customRadio6"
                                                                               name="customRadio"
                                                                               className="custom-control-input"/>
                                                                        <label
                                                                            className="custom-control-label"
                                                                            htmlFor="customRadio6">Yes</label>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            <div className="col-md-3 col-sm-12">
                                                                <p style={{float: "right"}}>Yes</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="privabtns">
                                                    <a href="#">Save</a>
                                                    <a href="#">Cancel</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-deactivate" role="tabpanel"
                                     aria-labelledby="nav-deactivate-tab">
                                    <DeactivateAccount/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default AccountSetting;