import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { URL } from '../../../../redux/_helper/utility';
import moment from "moment";
import './event.css'

function Event(props) {
    const event = { ...props }
    const [editOption, setEditOption] = useState(false);
    return (
        <div className="card gedf-card">
            <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="mr-2">
                            <img className="avatar rounded-circle" src={URL + event.user.photo_profil} alt="user_img" />
                        </div>
                        <div className="ml-2">
                            <Link to={`/profile/${event.user._id}`}>
                                <div className="h5 m-0">{event.user.nom + " " + event.user.prenom}</div>
                            </Link>
                        </div>
                    </div>
                    <div className="ed-opts">
                        <p className="ed-opts-open" style={{ cursor: "pointer" }}
                            onClick={() => setEditOption(!editOption)}
                        >
                            <i className="la la-ellipsis-v" />
                        </p>
                        <ul className={editOption ? "ed-options active" : "ed-options"}>
                            <li><a href="edit" title="">Edit event</a></li>
                            <li><a href="delete" title="">delete event</a></li>
                            <li><a href="Hide" title="">Hide</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="card">
                <img src={URL + event.cover_img} alt={event.titre} sizes="" height="300" />
                <div className="container-fluid pt-4 " id="test">
                    <div className="row">
                        <div className="col"><h2 className="text-uppercase font-weight-bolder">{event.titre} </h2></div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <i className="fa fa-map-marker text-info" aria-hidden="true" style={{ marginRight: "2px" }}></i>
                            {event.place}
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-6">DE : {moment(event.date_debut).format('YYYY-MM-DD')}</div>
                        <div className="col-6">A : {moment(event.date_fin).format('YYYY-MM-DD')}</div>
                    </div>
                    <div className="row mt-4 mb-2">
                        <div className="col-4">
                            <button type="button" className="btn btn-outline-dark btn-sm btn-block">participer</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event;