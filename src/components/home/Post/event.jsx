import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { URL } from '../../../redux/_helper/utility';
import moment from "moment";
import './event.css'
function Event(props) {
    const event = { ...props }
    const [editOption, setEditOption] = useState(false);
    const [showComments, setShowComments] = useState(false);


    


    return (
        <div className="card gedf-card" id="">
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

            {/* <div className="card ">
            <i className="fa fa-clock-o text-info" style={{ marginRight: "2px" }} /> {moment().from(event.createdAt)}
                <img className="card-img-top" src={URL + event.cover_img} alt={event.titre} />
                <div className="card-body">
                    <div className="row">
                        <div className="col-4">
                           <h4  className="card-title center" dangerouslySetInnerHTML={{ __html: urlify(event.titre) }}></h4>
                        </div>
                        <div className="col-4">
                            
                        </div>
                        <div className="col-4">
                            
                            <i className="fa fa-users text-info" style={{ marginRight: "2px" }}></i>4 portions
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">

                        </div>
                        <div className="col-6">
                        </div>
                    </div>
                    <div className="row">
                    <a href="/" className="btn btn-info">participant</a>

                    </div>
                </div>
            </div> */}

            <div className="card pb-2">
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
                    <div className="row mt-4">
                        <div className="col-4">
                            <button type="button" class="btn btn-outline-dark btn-sm btn-block">participer</button>
                        </div>

                        <div className="col my-auto">
                            <i className="fa fa-users text-info" style={{ marginRight: "2px" }}></i>
          1000 autres participants...
        </div>
                    </div>
                </div>
            </div>


            <div className="card-footer bg-white border-1 p-0">
                <div className="d-flex justify-content-between align-items-center my-1">
                    <div className="col">
                        <button type="button" className="btn btn-fbook btn-block btn-sm"
                            onClick={() => setShowComments(!showComments)}><i
                                className="fa fa-comment-o"
                                aria-hidden="true" /> Commente
                    </button>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-fbook btn-block btn-sm">
                            <i className="fa fa-share" aria-hidden="true" /> Share
                    </button>
                    </div>
                </div>
            </div>
            {/*Comment*/}
            {/* <Comments event={event} showComments={showComments} /> */}
        </div>
    );
}

export default Event;