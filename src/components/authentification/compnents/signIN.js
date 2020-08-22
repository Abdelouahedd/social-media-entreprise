import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { ToastProvider, useToasts } from 'react-toast-notifications'
import { useHistory } from 'react-router-dom';
import { authStart, authSuccess, authFail } from '../../../redux/actions/authActions';
import Axios from 'axios';
import { URL } from '../../../redux/_helper/utility';

export default function SignIn() {
    const { addToast } = useToasts()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({ errorEmail: false, errorPass: false })
    const authentification = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();

    const auth = (user) => async (dispatch) => {
        dispatch(authStart());
        Axios.post(`${URL}/users/signIN`, user).
            then((response) => {
                console.log(response);
                dispatch(authSuccess(response.data.token, response.data.msg));
                addToast(response.data.msg, { appearance: 'success', autoDismiss: true },)

                console.log('GLOBAL STATE IS :', authentification)
                history.push('/');
            })
            .catch(err => {
                console.log(err);
                addToast(err.message, { appearance: 'error', autoDismiss: true },)
                dispatch(authFail(err));
            });

    }


    const emailHandlerChanger = (event) => {
        let emailTarget = event.target.value;
        !emailTarget.includes('@') ?
            setError({ ...error, errorEmail: true }) :
            setError({ ...error, errorEmail: false });
        setEmail(event.target.value);
    }
    const passwordHandler = event => {
        let pass = event.target.value;
        pass.length < 5 ?
            setError({ ...error, errorPass: true }) :
            setError({ ...error, errorPass: false });

        setPassword(event.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: email,
            mot_pass: password
        }
        console.log('BEFORE GLOBAL STATE IS :', authentification)
        dispatch(auth(user));
    }

    return (
        <div className="sign_in_sec current" id="tab-1">
            <h3>Sign in</h3>

            <form onSubmit={onSubmit} method="POST">
                <div className="row">
                    <div className="col-lg-12 no-pdd">
                        <div className="sn-field" >
                            <input type="text"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={emailHandlerChanger}
                                style={{ borderColor: error.errorEmail ? "red" : " #e5e5e5" }}

                            />
                            <i className="fa fa-user" /><br />
                        </div>
                    </div>
                    <div className="col-lg-12 no-pdd">
                        <div className="sn-field">
                            <input type="password"
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={passwordHandler}
                                style={{ borderColor: error.errorPass ? "red" : " #e5e5e5" }}
                            />
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
