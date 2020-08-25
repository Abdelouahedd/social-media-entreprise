import React, { useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { useToasts } from 'react-toast-notifications'
import { useHistory } from 'react-router-dom';
import { authStart, authSuccess, authFail } from '../../../redux/actions/authActions';
import { URL } from '../../../redux/_helper/utility';
import SpinnerLoad from '../../shared/spinner/SpinnerLoad';
import * as Yup from 'yup';
import { Formik } from 'formik';


export default function SignIn() {
    const { addToast } = useToasts()
    const authentification = useSelector(state => state.auth, shallowEqual);
    const dispatch = useDispatch();
    const history = useHistory();
    const signInSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .required('Required'),
    });

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
                dispatch(authSuccess(response.token, response.msg));
                addToast(response.msg, { appearance: 'success', autoDismiss: true },);
                setTimeout(() => {
                    history.push('/');
                }, 1000);
            } else {
                setTimeout(() => {
                    dispatch(authFail(response.msg));
                    addToast(response.msg, { appearance: 'error', autoDismiss: true },)
                }, 1000);
            }
        }).catch(err => {
            console.error(err);
            dispatch(authFail(err));
            alert('Error logging in please try again');
        });
    }

    const onSubmit = async (values, actions) => {
        try {
            const user = {
                email: values.email,
                mot_pass: values.password
            }
            dispatch(auth(user));
            actions.setStatus({ success: true })
        } catch (error) {
            actions.setStatus({ success: false })
            actions.setSubmitting(false)
            actions.setErrors({ submit: error.message })
        }
    }

    return (
        <>
            <div className="sign_in_sec current" id="tab-1">
                <h3>Sign in</h3>
                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    validationSchema={signInSchema}
                    onSubmit={onSubmit}
                >
                    {
                        ({ values,
                            errors,
                            touched,
                            handleChange,
                            handleSubmit,
                        }) =>
                            (<form onSubmit={handleSubmit} method="POST">
                                <div className="row">
                                    <div className="col-lg-12 no-pdd">
                                        <div className="sn-field" >
                                            <input type="text"
                                                name="email"
                                                placeholder="Email"
                                                value={values.email}
                                                onChange={handleChange}
                                                style={{ borderColor: (errors.email && touched.email) ? "red" : " #e5e5e5" }}
                                            />
                                            <i className="fa fa-user" /><br />
                                        </div>
                                        {errors.email && touched.email ? (
                                            <div className="sn-field alert alert-danger">{errors.email}</div>
                                        ) : null}
                                    </div>
                                    <div className="col-lg-12 no-pdd">
                                        <div className="sn-field">
                                            <input type="password"
                                                name="password"
                                                placeholder="Password"
                                                value={values.password}
                                                onChange={handleChange}
                                                style={{ borderColor: (errors.password && touched.password) ? "red" : " #e5e5e5" }}
                                            />
                                            <i className="la la-lock" />
                                        </div>
                                        {errors.password && touched.password ? (
                                            <div className="sn-field alert alert-danger">{errors.password}</div>
                                        ) : null}
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
                            </form>)
                    }
                </Formik>


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
