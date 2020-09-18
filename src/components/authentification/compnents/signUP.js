import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Spinner from 'react-spinkit';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { URL } from '../../../redux/_helper/utility';




const SignUp = () => {

    const history = useHistory();
    const { addToast } = useToasts()



    var SignupSchema = Yup.object().shape({
        nom: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        prenom: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .min(6, 'Password must at less 6 characters')
            .required('Required'),
        repeatPassword: Yup.string().when('password', {
            is: (val) => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
                [Yup.ref('password')],
                'Passwords do not match'
            ),
        }),
        acceptTerms: Yup.bool().oneOf([true], 'Accept Terms & Conditions is required')
    });

    const sign = (user) => {
        fetch(`${URL}/users/signUP`, {
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
                    addToast(response.msg, { appearance: 'success', autoDismiss: true },);
                    history.push('/');
                }, 2000);
            } else {
                setTimeout(() => {
                    addToast(response.msg, { appearance: 'error', autoDismiss: true },)
                }, 2000);
            }
        }).catch(err => {
            console.error(err);
            addToast('Error logging in please try again', { appearance: 'error', autoDismiss: true },)
        });
    }

    const onSubmit = async (values, actions) => {
        try {
            const user = {
                nom: values.nom,
                prenom: values.prenom,
                email: values.email,
                mot_pass: values.password
            }
            sign(user);
            actions.resetForm({})
            actions.setStatus({ success: true })
        } catch (error) {
            actions.setStatus({ success: false })
            actions.setSubmitting(false)
            actions.setErrors({ submit: error.message })
        }
    }
    return (
        <div className="sign_in_sec" id="tab-2">
            <div className="dff-tab current" id="tab-3">
                <Formik
                    initialValues={{
                        nom: '',
                        prenom: '',
                        email: '',
                        password: '',
                        repeatPassword: '',
                        acceptTerms: false
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={onSubmit}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-12 no-pdd">
                                        <div className="sn-field">
                                            <input onChange={handleChange} type="email" name="email" placeholder="Email" value={values.email} /> <i className="la la-envelope" />
                                        </div>
                                        {errors.email && touched.email ? (
                                            <div className="sn-field alert alert-danger">{errors.email}</div>
                                        ) : null}
                                    </div>
                                    <div className="col-lg-12 no-pdd">
                                        <div className="sn-field">
                                            <input onChange={handleChange} type="text" name="nom" placeholder="Nom" value={values.nom} />
                                            <i className="fa fa-user-circle" />
                                        </div>
                                        {errors.nom && touched.nom ? (
                                            <div className="sn-field alert alert-danger">{errors.nom}</div>
                                        ) : null}
                                    </div>
                                    <div className="col-lg-12 no-pdd">
                                        <div className="sn-field">
                                            <input onChange={handleChange} type="text" name="prenom" placeholder="Prenom" value={values.prenom} />
                                            <i className="fa fa-user-circle" />
                                        </div>
                                        {errors.prenom && touched.prenom ? (
                                            <div className="sn-field alert alert-danger">{errors.prenom}</div>
                                        ) : null}
                                    </div>
                                    <div className="col-lg-12 no-pdd">
                                        <div className="sn-field">
                                            <input onChange={handleChange} type="password" name="password"
                                                placeholder="Password" value={values.password} />
                                            <i className="la la-lock" />
                                        </div>
                                        {errors.password && touched.password ? (
                                            <div className="sn-field alert alert-danger">{errors.password}</div>
                                        ) : null}
                                    </div>
                                    <div className="col-lg-12 no-pdd">
                                        <div className="sn-field">
                                            <input onChange={handleChange} type="password" name="repeatPassword"
                                                placeholder="Repeat Password" value={values.repeatPassword} />
                                            <i className="la la-lock" />
                                        </div>
                                        {errors.repeatPassword && touched.repeatPassword ? (
                                            <div className="sn-field alert alert-danger">{errors.repeatPassword}</div>
                                        ) : null}
                                    </div>
                                    <div className="col-lg-12 no-pdd">
                                        <div className="checky-sec st2">
                                            <div className="fgt-sec">
                                                <input onChange={handleChange} type="checkbox" id="c2" name="acceptTerms" value={values.acceptTerms} />
                                                <label htmlFor="c2">
                                                    <span />
                                                </label>
                                                <small>
                                                    Yes, I understand and agree to the workwise Terms & Conditions.
                                        </small>
                                            </div>
                                            {errors.acceptTerms && touched.repeatPassword ? (
                                                <div className="sn-field alert alert-danger">{errors.acceptTerms}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="col-lg-12 no-pdd">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                        >
                                            {
                                                isSubmitting ?
                                                    (<Spinner name="circle" color="white" />) :
                                                    (<span>Get Started</span>)
                                            }
                                        </button>
                                    </div>
                                </div>
                            </form>
                        )}
                </Formik>
            </div>
        </div >
    );
}
export default SignUp;