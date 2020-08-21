import React from 'react';


const SignIn = () => {
    return (
        <div className="sign_in_sec" id="tab-2">
            <div className="signup-tab">
                <i className="fa fa-long-arrow-left" />
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
                                <input type="text" name="name" placeholder="Full Name" />
                                <i className="la la-user" />
                            </div>
                        </div>
                        <div className="col-lg-12 no-pdd">
                            <div className="sn-field">
                                <input type="text" name="country"
                                    placeholder="Country" />
                                <i className="la la-globe" />
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
                                <i className="la la-dropbox" />
                                <span><i className="fa fa-ellipsis-h" /></span>
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
                            <div className="sn-field">
                                <input type="password" name="repeat-password"
                                    placeholder="Repeat Password" />
                                <i className="la la-lock" />
                            </div>
                        </div>
                        <div className="col-lg-12 no-pdd">
                            <div className="checky-sec st2">
                                <div className="fgt-sec">
                                    <input type="checkbox" name="cc" id="c2" />
                                    <label htmlFor="c2">
                                        <span />
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
                                    placeholder="Company Name" />
                                <i className="la la-building" />
                            </div>
                        </div>
                        <div className="col-lg-12 no-pdd">
                            <div className="sn-field">
                                <input type="text" name="country"
                                    placeholder="Country" />
                                <i className="la la-globe" />
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
                            <div className="sn-field">
                                <input type="password" name="repeat-password"
                                    placeholder="Repeat Password" />
                                <i className="la la-lock" />
                            </div>
                        </div>
                        <div className="col-lg-12 no-pdd">
                            <div className="checky-sec st2">
                                <div className="fgt-sec">
                                    <input type="checkbox" name="cc" id="c3" />
                                    <label htmlFor="c3">
                                        <span />
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
    );

}
export default SignIn;