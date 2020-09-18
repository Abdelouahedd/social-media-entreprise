import React, { useEffect, useState } from 'react';
import './comments.css';
import { Avatar, Comment, message } from 'antd';
import 'antd/dist/antd.css';
import { currentUser } from "../../../../_helper/services";
import { URL } from "../../../../redux/_helper/utility";
import { Link } from 'react-router-dom';


const CommentReplay = (props) => {
    console.log(props);
    const commantaire = props;
    return <Comment
        actions={[]}
        author={<Link to={`/profile/${commantaire.userComment._id}`}>{commantaire.userComment.nom + " " + commantaire.userComment.prenom}</Link>}
        avatar={
            <Avatar
                src={commantaire.userComment.photo_profil}
                alt={commantaire.userComment.nom}
            />
        }
        content={<p className="komen text-justify">{commantaire.content}</p>}
    />
}
    ;

function CommentCard(props) {

    const [comment, setComment] = useState(props.comment);
    const [replays, setReplays] = useState(props.comment.replays);
    const [replayComment, setReplayComment] = useState("");
    const [showReplay, setReplay] = useState(false);

    useEffect(() => {
        setComment(props.comment);
    }, [props.comment]);

    const addReplayComment = async (content) => {
        await fetch(`${URL}/comment/addReplayComment/${props.comment._id}`, {
            method: 'POST',
            body: JSON.stringify(content),
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')
            }
        }).then(res => res.json())
            .then((response) => {
                console.log(response);
                replays.push(response.replay);
                setReplays(replays);
                comment.replays = replays;
                setComment(comment);
                message.success(response.msg);
            })
            .catch(err => message.error('Error logging in please try again', err));
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const NewReplayComment = {
            content: replayComment
        }
        await addReplayComment(NewReplayComment);
        setReplayComment("");
    }

    return (
        <div>
            {/* <div className=" comment container-fluid">
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
                        <p style={{cursor: "pointer"}}>reply</p>
                    </div>
                </div>
                <div className="geser">
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
                {

                        comment.replays.map((re, index) => {
                            return <div key={index} className="geser">
                                //replay comment
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
                        }))
                }
            </div>*/}
            <Comment
                style={{ paddingRight: "15px", paddingLeft: "15px" }}
                actions={[<span key="comment-nested-reply-to" onClick={() => setReplay(true)}>Reply to</span>]}
                author={<Link to={`/profile/${comment.userComment._id}`}>{comment.userComment.nom + " " + comment.userComment.prenom}</Link>}
                avatar={
                    <Avatar
                        src={comment.userComment.photo_profil}
                        alt={comment.userComment.nom}
                    />
                }
                content={
                    <p className="komen text-justify">{comment.content}</p>
                }
            >
                {
                    replays.map((re, index) =>
                        <CommentReplay key={index} {...re} />)
                }
                <div className={showReplay ? "box-footer" : "box-footer active"}>
                    <form onSubmit={onSubmit}>
                        <img className="img-responsive img-circle img-sm"
                            src={currentUser.photo_profil}
                            alt="Alt Text" />
                        <div className="img-push">
                            <input type="text" className="form-control input-sm"
                                placeholder="Press enter to post comment" value={replayComment}
                                onChange={(e) => setReplayComment(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
            </Comment>
        </div>
    );
}

export default CommentCard;