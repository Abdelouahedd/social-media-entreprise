import React, {useEffect, useState} from 'react';
import './editProdil.css'
import user_img from '../../assets/images/resources/user-pro-img.png';
import cuver from "../../assets/images/resources/cover-img.jpg";
import {currentUser} from '../../_helper/services'
import * as Yup from "yup";
import {URL} from "../../redux/_helper/utility";
import {useToasts} from "react-toast-notifications";
import {Formik} from "formik";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {logOut} from "../../redux/actions/authActions";
import {useHistory} from "react-router-dom";


function EditProfil() {
    const {addToast} = useToasts();
    const [photoProfil, setPhotoProfil] = useState(currentUser.photo_profil);
    const [photoCouverture, setPhotoCouverture] = useState(currentUser.photo_couverture);

    const dispatch = useDispatch();
    const history = useHistory();
    const schema = Yup.object({
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        nom: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        telephone: Yup.string()
            .required('Required'),
        prenom: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        date_naissance: Yup.date()
            .max(new Date(Date.now()))
            .required('Required'),
        descriptif: Yup.string()
            .max(500)
            .min(20),
        ville: Yup.string(),
        address: Yup.string(),
        fonction: Yup.string()
            .required('Required'),
        gender: Yup.string(),
    });


    const updateUser = async (user) => {
        fetch(`${URL}/users/editAccount/${currentUser._id}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')
            }
        }).then(res => res.json())
            .then((res) => {
                console.log(res);
                addToast(res.msg, {appearance: 'success', autoDismiss: true},);
            }).catch(err => {
            console.error(err);
            addToast(err.toString(), {appearance: 'error', autoDismiss: true},)
        });
    }

    const onSubmit = async (values, actions) => {
        try {
            console.log(values);
            updateUser(values);
            setTimeout(() => {
                dispatch(logOut());
                history.push('/sign');
            }, 1000);
            actions.setStatus({success: true})
            actions.setSubmitting(true)
        } catch (error) {
            console.error(error);
            actions.setStatus({success: false})
            actions.setSubmitting(false)
            actions.setErrors({submit: error.message})
            addToast(error.message.toString(), {appearance: 'error', autoDismiss: true},)

        }
    }
    const onPhotoProfilChange = (e) => {
        e.preventDefault();
        console.log("---------->" + e.target.name)
        const formData = new FormData();
        formData.append('profileImg', e.target.files[0]);
        fetch(`${URL}/users/imgProfil/${currentUser._id}`, {
            method: 'PUT',
            body: formData,
            headers: {
                'authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')
            }
        }).then(res => res.json())
            .then(res => {
                console.log(res);
                currentUser.photo_profil = res.imgUrl;
                setPhotoProfil(res.imgUrl);
                addToast(res.msg, {appearance: 'success', autoDismiss: true},)
            }).catch(err => {
            console.error(err);
            setTimeout(() => {
                addToast("Erreur while uploading image", {appearance: 'error', autoDismiss: true},)
            }, 300);
        });
    }
    const onCuverChange = (e) => {
        e.preventDefault();
        console.log("---------->" + e.target.name)
        const formData = new FormData();
        formData.append('imgCuver', e.target.files[0]);
        fetch(`${URL}/users/imgCuver/${currentUser._id}`, {
            method: 'PUT',
            body: formData,
            headers: {
                'authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')
            }
        }).then(res => res.json())
            .then(res => {
                console.log(res);
                currentUser.photo_couverture = res.imgUrl;
                setPhotoCouverture(res.imgUrl);
                addToast(res.msg, {appearance: 'success', autoDismiss: false},)
            }).catch(err => {
            console.error(err);
            setTimeout(() => {
                addToast("Erreur while uploading image", {appearance: 'error', autoDismiss: true},)
            }, 3000);
        });
    }

    return (
        <div id="content-page" className="acc-setting">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="iq-edit-list-data">
                            <div className="tab-content">
                                <div className="tab-pane fade active show" id="personal-information"
                                     role="tabpanel">
                                    <div className="iq-card">
                                        <div className="iq-card-body ">
                                            <div className="form-group row ">
                                                <section>
                                                    <img
                                                        src={photoCouverture === "" ? cuver : photoCouverture}
                                                        alt={"cuver img"}
                                                        className="img-fluid bg-img"
                                                    />
                                                    <div className="add-pic-box">
                                                        <div className="container">
                                                            <div className="row no-gutters">
                                                                <div className="col-lg-12 col-sm-12">

                                                                    <input type="file" id="file" name="cuver"
                                                                           onChange={(e) => onCuverChange(e)}
                                                                    />
                                                                    <label htmlFor="file"> <i
                                                                        className="fa fa-camera-retro"/></label>

                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </section>
                                                <div className="col-md-12 d-flex justify-content-center">
                                                    <div className="user_profile">
                                                        <div className="user-pro-img">
                                                            <img
                                                                src={photoProfil === "" ? user_img : photoProfil}
                                                                alt=""/>
                                                            <div className="add-dp" id="OpenImgUpload">
                                                                <input type="file" id="profil" name="profilIMg"
                                                                       onChange={e => onPhotoProfilChange(e)}
                                                                />
                                                                <label htmlFor="profil"><i
                                                                    className="fa fa-camera"/></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <Formik
                                                initialValues={{
                                                    email: currentUser.email,
                                                    nom: currentUser.nom,
                                                    prenom: currentUser.prenom,
                                                    date_naissance: currentUser.date_naissance,
                                                    ville: currentUser.ville,
                                                    address: currentUser.address,
                                                    fonction: currentUser.fonction,
                                                    gender: currentUser.gender,
                                                    descriptif: currentUser.descriptif,
                                                    telephone: currentUser.telephone
                                                }}
                                                validationSchema={schema}
                                                onSubmit={onSubmit}
                                            >{({
                                                   values,
                                                   errors,
                                                   touched,
                                                   handleChange,
                                                   handleSubmit,
                                                   isSubmitting,
                                                   isValide
                                               }) => (
                                                <form onSubmit={handleSubmit}>
                                                    <div className="form-group col-sm-12">
                                                        <label>Resumer:</label>
                                                        <textarea className="form-control" name="descriptif" rows="5"
                                                                  style={{lineHeight: "22px"}}
                                                                  value={values.descriptif}
                                                                  placeholder="maximum 500 character"
                                                                  onChange={handleChange}
                                                        >
                                                        </textarea>
                                                        {errors.descriptif && touched.descriptif ? (
                                                            <div
                                                                className=" alert alert-danger m-2">{errors.descriptif}</div>
                                                        ) : null}
                                                    </div>
                                                    <div className=" row align-items-center">
                                                        <div className="form-group col-sm-6">
                                                            <label htmlFor="fname">Nom :</label>
                                                            <input type="text" className="form-control" id="nom"
                                                                   name="nom"
                                                                // defaultValue={currentUser.nom}
                                                                   value={values.nom}
                                                                   onChange={handleChange}
                                                            />
                                                            {errors.nom && touched.nom ? (
                                                                <div
                                                                    className=" alert alert-danger m-2">{errors.nom}</div>
                                                            ) : null}
                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                            <label htmlFor="lname">Prénom:</label>
                                                            <input type="text" className="form-control" id="prenom"
                                                                // defaultValue={currentUser.prenom}
                                                                   value={values.prenom}
                                                                   onChange={handleChange}
                                                            />
                                                            {errors.prenom && touched.prenom ? (
                                                                <div
                                                                    className=" alert alert-danger m-2">{errors.prenom}</div>
                                                            ) : null}
                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                            <label htmlFor="cname">Ville:</label>
                                                            <input type="text" className="form-control" id="ville"
                                                                // defaultValue={currentUser.ville}
                                                                   value={values.ville}
                                                                   onChange={handleChange}
                                                            />
                                                            {errors.ville && touched.ville ? (
                                                                <div
                                                                    className=" alert alert-danger m-2">{errors.ville}</div>
                                                            ) : null}
                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                            <label className="d-block">Gender:</label>
                                                            <div
                                                                className="custom-control custom-radio custom-control-inline">
                                                                <input type="radio" id="customRadio6"
                                                                       name="gender"
                                                                       className="custom-control-input"
                                                                       value="Homme"
                                                                       checked={values.gender === "Homme"}
                                                                       onChange={handleChange}
                                                                />
                                                                <label className="custom-control-label"
                                                                       htmlFor="customRadio6"> Homme </label>
                                                            </div>
                                                            <div
                                                                className="custom-control custom-radio custom-control-inline">
                                                                <input type="radio" id="customRadio7"
                                                                       name="gender"
                                                                       className="custom-control-input"
                                                                       value="Femme"
                                                                       checked={values.gender === "Femme"}
                                                                       onChange={handleChange}
                                                                />
                                                                <label className="custom-control-label"
                                                                       htmlFor="customRadio7"> Femme </label>
                                                            </div>
                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                            <label htmlFor="naissance">Date de naissance:</label>
                                                            <input type="date" className="form-control" id="naissance"
                                                                   name="date_naissance"
                                                                   onChange={handleChange}
                                                                   value={values.date_naissance}
                                                            />
                                                            {errors.date_naissance && touched.date_naissance ? (
                                                                <div
                                                                    className=" alert alert-danger m-2">{errors.date_naissance}</div>
                                                            ) : null}
                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                            <label>Fonction :</label>
                                                            <input type="text" className="form-control"
                                                                   name="fonction"
                                                                // defaultValue={currentUser.fonction}
                                                                   onChange={handleChange}
                                                                   value={values.fonction}
                                                            />
                                                            {errors.fonction && touched.fonction ? (
                                                                <div
                                                                    className=" alert alert-danger m-2">{errors.fonction}</div>
                                                            ) : null}
                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                            <label htmlFor="tele">Télephone :</label>
                                                            <input type="text" className="form-control" id="tele"
                                                                   name="telephone"
                                                                // defaultValue={currentUser.telephone}
                                                                   onChange={handleChange}
                                                                   value={values.telephone}
                                                            />
                                                            {errors.telephone && touched.telephone ? (
                                                                <div
                                                                    className=" alert alert-danger m-2">{errors.telephone}</div>
                                                            ) : null}
                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                            <label htmlFor="email">Email:</label>
                                                            <input type="text" className="form-control" id="email"
                                                                   name="email"
                                                                // defaultValue={currentUser.email}
                                                                   onChange={handleChange}
                                                                   value={values.email}
                                                            />
                                                            {errors.email && touched.email ? (
                                                                <div
                                                                    className=" alert alert-danger m-2">{errors.email}</div>
                                                            ) : null}
                                                        </div>
                                                        <div className="form-group col-sm-12">
                                                            <label>Address:</label>
                                                            <textarea className="form-control" name="address"
                                                                      rows="2"
                                                                      style={{lineHeight: "22px"}}
                                                                // defaultValue={currentUser.addr}
                                                                      onChange={handleChange}
                                                                      value={values.address}
                                                                      placeholder="37 Cardinal Lane
                                                             Petersburg, VA 23803
                                                             United States of America
                                                             Zip Code: 85001"
                                                            >
                                                        </textarea>
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary mr-2"
                                                            disabled={isSubmitting}>
                                                        Submit
                                                    </button>
                                                    <button type="reset" className="btn iq-bg-danger">Cancle
                                                    </button>
                                                </form>
                                            )}
                                            </Formik>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProfil;