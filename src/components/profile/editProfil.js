import React, {useEffect, useState} from 'react';
import './editProdil.css'
import user_img from '../../assets/images/resources/user-pro-img.png';
import cuver from "../../assets/images/resources/cover-img.jpg";
import {currentUser} from '../../_helper/services'
import * as Yup from "yup";
import {URL} from "../../redux/_helper/utility";
import {useToasts} from "react-toast-notifications";

const schema = Yup.object({
    email: Yup.string().email('Invalid email'),
    nom: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    prenom: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    date_naissance: Yup.date().max(new Date()),
    describtif: Yup.string().max(500),
    ville: Yup.string(),
    address: Yup.string(),
    fonction: Yup.string(),
    gender: Yup.string(),
});


function EditProfil() {
    const {addToast} = useToasts()
    const [photoProfil, setPhotoProfil] = useState(currentUser.photo_profil);
    const [photoCouverture, setPhotoCouverture] = useState(currentUser.photo_couverture);


    const onSubmit = (event) => {
        event.preventDefault();
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

    useEffect(() => {
        console.log(currentUser);
    }, []);
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
                                                                    <form>
                                                                        <input type="file" id="file" name="cuver"
                                                                               onChange={(e) => onCuverChange(e)}
                                                                        />
                                                                        <label htmlFor="file"> <i
                                                                            className="fa fa-camera-retro"/></label>
                                                                    </form>
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
                                                                <form>
                                                                    <input type="file" id="profil" name="profilIMg"
                                                                           onChange={e => onPhotoProfilChange(e)}
                                                                    />
                                                                    <label htmlFor="profil"><i
                                                                        className="fa fa-camera"/></label>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <form onSubmit={onSubmit}>
                                                <div className="form-group col-sm-12">
                                                    <label>Resumer:</label>
                                                    <textarea className="form-control" name="address" rows="5"
                                                              style={{lineHeight: "22px"}}
                                                              defaultValue={currentUser.Descriptif}
                                                              placeholder="maximum 500 character"
                                                              onChange={(e) => setDescribtif(e.target.value)}
                                                    >
                                                        </textarea>
                                                </div>
                                                <div className=" row align-items-center">
                                                    <div className="form-group col-sm-6">
                                                        <label htmlFor="fname">Nom :</label>
                                                        <input type="text" className="form-control" id="nom"
                                                               name="nom"
                                                               defaultValue={currentUser.nom}
                                                               onChange={(e) => setNom(e.target.value)}

                                                        />
                                                    </div>
                                                    <div className="form-group col-sm-6">
                                                        <label htmlFor="lname">Prénom:</label>
                                                        <input type="text" className="form-control" id="prenom"
                                                               defaultValue={currentUser.prenom}
                                                               onChange={(e) => setPrenom(e.target.value)}

                                                        />
                                                    </div>
                                                    <div className="form-group col-sm-6">
                                                        <label htmlFor="cname">Ville:</label>
                                                        <input type="text" className="form-control" id="ville"
                                                               defaultValue={currentUser.ville}
                                                               onChange={(e) => setVille(e.target.value)}

                                                        />
                                                    </div>
                                                    <div className="form-group col-sm-6">
                                                        <label className="d-block">Gender:</label>
                                                        <div
                                                            className="custom-control custom-radio custom-control-inline">
                                                            <input type="radio" id="customRadio6"
                                                                   name="customRadio1"
                                                                   className="custom-control-input" value="Homme"
                                                                   onChange={(e) => setGender(e.target.value)}/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customRadio6"> Homme </label>
                                                        </div>
                                                        <div
                                                            className="custom-control custom-radio custom-control-inline">
                                                            <input type="radio" id="customRadio7"
                                                                   name="customRadio1"
                                                                   className="custom-control-input" value="femme"
                                                                   onChange={(e) => setGender(e.target.value)}/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customRadio7"> Femme </label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-sm-6">
                                                        <label htmlFor="dob">Date de naissance:</label>
                                                        <input type="date" className="form-control" id="dob"
                                                               name="date_naissance"
                                                               defaultValue={currentUser.date_naissance}
                                                               onChange={(e) => setNaissance(e.target.value)}

                                                        />
                                                    </div>

                                                    <div className="form-group col-sm-6">
                                                        <label>Fonction :</label>
                                                        <input type="text" className="form-control" name="fonction"
                                                               defaultValue={currentUser.fonction}
                                                               onChange={(e) => setFonction(e.target.value)}

                                                        />
                                                    </div>
                                                    <div className="form-group col-sm-6">
                                                        <label htmlFor="cno">Télephone :</label>
                                                        <input type="text" className="form-control" id="cno"
                                                               defaultValue={currentUser.telephone}
                                                               onChange={(e) => setTele(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="form-group col-sm-6">
                                                        <label htmlFor="email">Email:</label>
                                                        <input type="text" className="form-control" id="email"
                                                               name="email"
                                                               defaultValue={currentUser.email}
                                                               onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="form-group col-sm-12">
                                                        <label>Address:</label>
                                                        <textarea className="form-control" name="address" rows="2"
                                                                  style={{lineHeight: "22px"}}
                                                                  defaultValue={currentUser.addr}
                                                                  onChange={(e) => setAddress(e.target.value)}
                                                                  placeholder="37 Cardinal Lane
                                                             Petersburg, VA 23803
                                                             United States of America
                                                             Zip Code: 85001"
                                                        >
                                                        </textarea>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary mr-2">Submit
                                                </button>
                                                <button type="reset" className="btn iq-bg-danger">Cancle</button>
                                            </form>
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