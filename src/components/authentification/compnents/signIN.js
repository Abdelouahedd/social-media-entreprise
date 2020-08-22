import React, { useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { useToasts } from 'react-toast-notifications'
import { useHistory } from 'react-router-dom';
import { authStart, authSuccess, authFail } from '../../../redux/actions/authActions';
import { URL } from '../../../redux/_helper/utility';
import SpinnerLoad from '../../shared/spinner/SpinnerLoad';


export default function SignIn() {
    const { addToast } = useToasts()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({ errorEmail: false, errorPass: false })
    const authentification = useSelector(state => state.auth, shallowEqual);
    const dispatch = useDispatch();
    const history = useHistory();

    const auth = (user) => async (dispatch) => {
        dispatch(authStart());
        fetch(`${URL}/users/signIN`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async (res) => {
            let response = await res.json();
            console.log(response);
            if (res.status === 200) {
                setTimeout(() => {
                    dispatch(authSuccess(response.token, response.msg));
                    addToast(response.msg, { appearance: 'success', autoDismiss: true },);
                    history.push('/');
                }, 3000);
            } else {
                setTimeout(() => {
                    dispatch(authFail(response.msg));
                    addToast(response.msg, { appearance: 'error', autoDismiss: true },)
                }, 3000);
            }
        }).catch(err => {
            console.error(err);
            dispatch(authFail(err));
            alert('Error logging in please try again');
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
        pass.length < 6 ?
            setError({ ...error, errorPass: true }) :
            setError({ ...error, errorPass: false });

        setPassword(event.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (error.errorPass == true) {
            return addToast("Min 6 caractere pour le mot de passe", { appearance: 'error', autoDismiss: true },)
        }
        if (error.errorEmail == true) {
            return addToast("Entrer valide Email", { appearance: 'error', autoDismiss: true },)
        }
        const user = {
            email: email,
            mot_pass: password
        }
        dispatch(auth(user));
    }
 
    return (
        <>
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
                            {
                                authentification.loading == true ?
                                    <SpinnerLoad /> :
                                    <button type="submit" value="submit">Sign in</button>
                            }

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


        </>
    )
}
