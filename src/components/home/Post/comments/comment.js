import React, {useEffect, useState} from 'react';
import './comments.css';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {addComments, getPost} from "../../../../redux/actions/postActions";
import {currentUser} from "../../../../_helper/services";

function Comment(props) {

    const [comment, setComment] = useState(props.comment);

    useEffect(() => {
        setComment(props.comment);

    }, [props.comment]);

    return (
        <div>
            <div className=" comment container-fluid">
                <div className="media">
                    <div className="media-left">
                        <img src={comment.userComment.photo_profil} className="rounded-circle"
                             style={{width: "40px"}}/>
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading title">{comment.userComment.nom}</h4>
                        <p className="komen text-justify">
                            {comment.content}
                        </p>
                        <a href="#">reply</a>
                    </div>
                </div>
                {
                    (comment.replays !== undefined && comment.replays.length !== 0)
                        ?
                        comment.replays.map((re, index) => {
                            return <div key={index}>
                                <div className="geser">
                                    <div className="media">
                                        <div className="media-left">
                                            <img src={re.userComment.photo_profil} className="rounded-circle"
                                                 style={{width: "40px"}}/>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="media-heading title">{re.userComment.nom}</h4>
                                            <p className="komen">
                                                {re.content}
                                            </p>
                                            <a href="#">reply</a>
                                        </div>
                                    </div>
                                    <div className="box-footer">
                                        <form action="#" method="post">
                                            <img className="img-responsive img-circle img-sm"
                                                 src={currentUser.photo_profil}
                                                 alt="Alt Text"/>
                                            <div className="img-push">
                                                <input type="text" className="form-control input-sm"
                                                       placeholder="Press enter to post comment"/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        })
                        : null
                }
            </div>
        </div>
    );
}

export default Comment;