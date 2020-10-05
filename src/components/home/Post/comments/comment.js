import React, { useEffect, useState } from 'react';
import './comments.css';
import { Avatar, Comment, message } from 'antd';
import 'antd/dist/antd.css';
import { currentUser } from "../../../../_helper/services";
import { URL } from "../../../../redux/_helper/utility";
import { Link } from 'react-router-dom';


const CommentReplay = (props) => {
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
            <Comment
                style={{ paddingRight: "15px", paddingLeft: "15px" }}
                actions={[<span key="comment-nested-reply-to" onClick={() => setReplay(true)}>Reply to</span>]}
                author={<Link to={`/profile/${comment.userComment._id}`}>{comment.userComment.nom + " " + comment.userComment.prenom}</Link>}
                avatar={
                    <Avatar
                        src={URL + comment.userComment.photo_profil}
                        alt={comment.userComment.nom}
                    />
                }
                content={<p className="komen text-justify">{comment.content}</p>}
            >
                {replays.map((re, index) => <CommentReplay key={index} {...re} />)}
                <div className={showReplay ? "box-footer" : "box-footer active"}>
                    <form onSubmit={onSubmit}>
                        <img className="img-responsive img-circle img-sm"
                            src={URL + currentUser.photo_profil}
                            alt={currentUser.nom} />

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