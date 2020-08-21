import React from 'react'

export default function SignUp() {
    return (
        <div className="sign_in_sec current" id="tab-1">
            <h3>Sign in</h3>
            <form>
                <div className="row">
                    <div className="col-lg-12 no-pdd">
                        <div className="sn-field">
                            <input type="text" name="username" placeholder="Username" />
                            <i className="fa fa-user" />
                        </div>
                    </div>
                    <div className="col-lg-12 no-pdd">
                        <div className="sn-field">
                            <input type="password" name="password"
                                placeholder="Password" />
                            <i className="la la-lock" />
                        </div>
                    </div>
                    <div className="col-lg-12 no-pdd">
                        <div className="checky-sec">
                            <div className="fgt-sec">
                                <input type="checkbox" name="cc" id="c1" />
                                <label htmlFor="c1">
                                    <span />
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
                            <i className="fa fa-facebook" />Login Via Facebook</a>
                    </li>
                    <li>
                        <a href="/" title="" className="tw">
                            <i className="fa fa-twitter" />Login Via Twitter</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
