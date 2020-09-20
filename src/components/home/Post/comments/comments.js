import React, { useState } from 'react';
import './comments.css';
import { useDispatch } from "react-redux";
import { updatePost } from "../../../../redux/actions/postActions";
import { currentUser } from "../../../../_helper/services";
import { URL } from "../../../../redux/_helper/utility";
import { message } from "antd";
import 'antd/dist/antd.css';
import CommentCard from "./comment";

function Comments(props) {

    const [content, setContent] = useState("");
    const [comments, setComments] = useState(props.post.commantaires);

    const dispatch = useDispatch();

    const addComment = async (comment) => {
        await fetch(`${URL}/comment/addComment/${props.post._id}`, {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')
            }
        }).then(res => res.json())
            .then((response) => {
                dispatch(updatePost(response.post));
                comments.push(response.comment);
                setComments(comments);
                message.success(response.msg);
            })
            .catch(err => message.error('Error logging in please try again', err));
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("Submit form");
        const NewComment = {
            content: content
        }
        await addComment(NewComment);
        setContent("");
    }


    const handlerChange = (e) => setContent(e.target.value);
    return (
        <div className={props.showComments === true ? "section_comment active" : "section_comment"}>
            <div className="box-footer">
                <form onSubmit={onSubmit}>
                    <img className="img-responsive img-circle img-sm"
                        src={URL + currentUser.photo_profil} alt={currentUser.nom} />
                    <div className="img-push">
                        <input type="text" className="form-control input-sm"
                            placeholder="Press enter to post comment" value={content}
                            onChange={(e) => handlerChange(e)}
                        />
                    </div>
                </form>
            </div>
            {comments.map((c, index) => <CommentCard key={index} comment={c} />)}
        </div>
    );
}

export default Comments;