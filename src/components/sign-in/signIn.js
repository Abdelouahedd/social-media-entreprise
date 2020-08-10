import React from 'react';
import logo from "../../assets/images/cm-logo.png"
import cuver from "../../assets/images/cm-main-img.png"
import $ from 'jquery'

class SignIn extends React.Component {
    /*componentDidMount() {
        $('.sign-control li').on("click", function () {
            var tab_id = $(this).attr('data-tab');
            $('.sign-control li').removeClass('current');
            $('.sign_in_sec').removeClass('current');
            $(this).addClass('current animated fadeIn');
            $("#" + tab_id).addClass('current animated fadeIn');
            return false;
        });
        $('.signup-tab ul li').on("click", function () {
            var tab_id = $(this).attr('data-tab');
            $('.signup-tab ul li').removeClass('current');
            $('.dff-tab').removeClass('current');
            $(this).addClass('current animated fadeIn');
            $("#" + tab_id).addClass('current animated fadeIn');
            return false;
        });
        $('.tab-feed ul li').on("click", function () {
            var tab_id = $(this).attr('data-tab');
            $('.tab-feed ul li').removeClass('active');
            $('.product-feed-tab').removeClass('current');
            $(this).addClass('active animated fadeIn');
            $("#" + tab_id).addClass('current animated fadeIn');
            return false;
        });
    }
*/
    render() {
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
                                                <img src={logo} alt="logo"/>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
                                                    consequuntur deserunt, dolor, est illo non nulla officia pariatur
                                                    quam
                                                    rem repellendus saepe soluta, voluptas! Facilis laboriosam minima
                                                    minus
                                                    nam officiis.
                                                </p>
                                            </div>
                                            <img src={cuver} alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="login-sec">
                                            <ul className="sign-control">
                                                <li data-tab="tab-1"
                                                    className="current"><a
                                                    href="#" title=""
                                                >Sign in</a>
                                                </li>
                                                <li data-tab="tab-2"><a href="#"
                                                                        title="">Sign up</a></li>
                                            </ul>
                                            {/*SIGN IN*/}
                                            <div className="sign_in_sec" id="tab-2">
                                                <div className="signup-tab">
                                                    <i className="fa fa-long-arrow-left"></i>
                                                    <h2>johndoe@example.com</h2>
                                                    <ul>
                                                        <li data-tab="tab-3" className="current"><a href="#"
                                                                                                    title="">User</a>
                                                        </li>
                                                        <li data-tab="tab-4"><a href="#" title="">Company</a></li>
                                                    </ul>
                                                </div>
                                                <div className="dff-tab current" id="tab-3">
                                                    <form>
                                                        <div className="row">
                                                            <div className="col-lg-12 no-pdd">
                                                                <div className="sn-field">
                                                                    <input type="text" name="name" placeholder="Full Name"/>
                                                                    <i className="la la-user"></i>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 no-pdd">
                                                                <div className="sn-field">
                                                                    <input type="text" name="country"
                                                                           placeholder="Country"/>
                                                                    <i className="la la-globe"></i>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 no-pdd">
                                                                <div className="sn-field">
                                                                    <select>
                                                                        <option>Category</option>
                                                                        <option>Category 1</option>
                                                                        <option>Category 2</option>
                                                                        <option>Category 3</option>
                                                                        <option>Category 4</option>
                                                                    </select>
                                                                    <i className="la la-dropbox"></i>
                                                                    <span><i className="fa fa-ellipsis-h"></i></span>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 no-pdd">
                                                                <div className="sn-field">
                                                                    <input type="password" name="password"
                                                                           placeholder="Password"/>
                                                                    <i className="la la-lock"></i>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 no-pdd">
                                                                <div className="sn-field">
                                                                    <input type="password" name="repeat-password"
                                                                           placeholder="Repeat Password"/>
                                                                    <i className="la la-lock"></i>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 no-pdd">
                                                                <div className="checky-sec st2">
                                                                    <div className="fgt-sec">
                                                                        <input type="checkbox" name="cc" id="c2"/>
                                                                        <label htmlFor="c2">
                                                                            <span></span>
                                                                        </label>
                                                                        <small>Yes, I understand and agree to the workwise
                                                                            Terms & Conditions.</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 no-pdd">
                                                                <button type="submit" value="submit">Get Started</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="dff-tab" id="tab-4">
                                                    <form>
                                                        <div className="row">
                                                            <div className="col-lg-12 no-pdd">
                                                                <div className="sn-field">
                                                                    <input type="text" name="company-name"
                                                                           placeholder="Company Name"/>
                                                                    <i className="la la-building"></i>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 no-pdd">
                                                                <div className="sn-field">
                                                                    <input type="text" name="country"
                                                                           placeholder="Country"/>
                                                                    <i className="la la-globe"></i>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 no-pdd">
                                                                <div className="sn-field">
                                                                    <input type="password" name="password"
                                                                           placeholder="Password"/>
                                                                    <i className="la la-lock"></i>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 no-pdd">
                                                                <div className="sn-field">
                                                                    <input type="password" name="repeat-password"
                                                                           placeholder="Repeat Password"/>
                                                                    <i className="la la-lock"></i>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 no-pdd">
                                                                <div className="checky-sec st2">
                                                                    <div className="fgt-sec">
                                                                        <input type="checkbox" name="cc" id="c3"/>
                                                                        <label htmlFor="c3">
                                                                            <span></span>
                                                                        </label>
                                                                        <small>Yes, I understand and agree to the workwise
                                                                            Terms & Conditions.</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 no-pdd">
                                                                <button type="submit" value="submit">Get Started</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            {/*sign UP*/}
                                            <div className="sign_in_sec current" id="tab-1">
                                                <h3>Sign in</h3>
                                                <form>
                                                    <div className="row">
                                                        <div className="col-lg-12 no-pdd">
                                                            <div className="sn-field">
                                                                <input type="text" name="username" placeholder="Username"/>
                                                                <i className="fa fa-user"></i>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 no-pdd">
                                                            <div className="sn-field">
                                                                <input type="password" name="password"
                                                                       placeholder="Password"/>
                                                                <i className="la la-lock"></i>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 no-pdd">
                                                            <div className="checky-sec">
                                                                <div className="fgt-sec">
                                                                    <input type="checkbox" name="cc" id="c1"/>
                                                                    <label htmlFor="c1">
                                                                        <span></span>
                                                                    </label>
                                                                    <small>Remember me</small>
                                                                </div>
                                                                <a href="#" title="">Forgot Password?</a>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 no-pdd">
                                                            <button type="submit" value="submit">Sign in</button>
                                                        </div>
                                                    </div>
                                                </form>
                                                <div className="login-resources">
                                                    <h4>Login Via Social Account</h4>
                                                    <ul>
                                                        <li>
                                                            <a href="/" title="" className="fb">
                                                                <i className="fa fa-facebook"/>Login Via Facebook</a>
                                                        </li>
                                                        <li>
                                                            <a href="/" title="" className="tw">
                                                                <i className="fa fa-twitter"/>Login Via Twitter</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
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
        );
    }
}

export default SignIn;