import React from 'react';
import {Formik} from "formik";
import * as Yup from 'yup'
import {useHistory} from "react-router-dom";
import {URL} from "../../../redux/_helper/utility";
import {useToasts} from "react-toast-notifications";
import {currentUser} from "../../../_helper/services";

function UpdatePassword(props) {
    const history = useHistory();
    const {addToast} = useToasts()

    const schema = Yup.object().shape({
        password: Yup.string()
            .min(6, 'Password must at less 6 characters')
            .required('Required'),
        repeatPassword: Yup.string().when('password', {
            is: (val) => (!!(val && val.length > 0)),
            then: Yup.string().oneOf(
                [Yup.ref('password')],
                'Passwords do not match'
            ),
        }),
    });
    const onSubmit = async (values, actions) => {
        try {
            actions.setStatus({success: true});
            actions.setSubmitting(true);
            const newPass = {
                password: values.password
            }
            fetch(`${URL}/users/updatePass/${currentUser._id}`, {
                method: 'PUT',
                body: JSON.stringify(newPass),
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')
                }
            }).then(res => res.json())
                .then(res => {
                    console.log(res);
                    if (res.success === true) {
                        addToast(res.msg, {appearance: 'success', autoDismiss: true},);
                        setTimeout(() => history.push('/sign'), 1000);
                    }
                }).catch(err => {
                console.error(err);
                addToast(err.message, {appearance: 'error', autoDismiss: true},);
            });
        } catch (e) {
            console.error(e);
            actions.setStatus({success: false});
            actions.setSubmitting(false);
        }
    }
    return (
        <div className="acc-setting">
            <h3>Account Setting</h3>
            <Formik
                initialValues={{
                    password: "",
                    repeatPassword: ""
                }}
                validationSchema={schema}
                onSubmit={onSubmit}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleSubmit,
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="cp-field">
                            <h5>New Password</h5>
                            <div className="cpp-fiel">
                                <input type="password" name="password" placeholder="New Password"
                                       onChange={handleChange}
                                       value={values.password}
                                />
                                <i className="fa fa-lock"></i>
                            </div>
                            {errors.password && touched.password ? (
                                <div className="sn-field alert alert-danger"
                                     style={{marginTop: "12px"}}>{errors.password}</div>
                            ) : null}
                        </div>
                        <div className="cp-field">
                            <h5>Repeat Password</h5>
                            <div className="cpp-fiel">
                                <input type="password" name="repeatPassword"
                                       placeholder="Repeat Password"
                                       onChange={handleChange}
                                       value={values.repeatPassword}
                                />
                                <i className="fa fa-lock"></i>
                            </div>
                            {errors.repeatPassword && touched.repeatPassword ? (
                                <div className="sn-field alert alert-danger"
                                     style={{marginTop: "12px"}}>{errors.repeatPassword}</div>
                            ) : null}
                        </div>
                        <div className="save-stngs pd2">
                            <ul>
                                <li>
                                    <button type="submit">Save</button>
                                </li>

                            </ul>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default UpdatePassword;