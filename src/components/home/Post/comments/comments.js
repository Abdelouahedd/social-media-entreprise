import React, {useEffect, useState} from 'react';
import Comment from "./comment";
import './comments.css';
import {shallowEqual, useDispatch, useSelector, useStore} from "react-redux";
import {getPost, updatePost} from "../../../../redux/actions/postActions";
import {currentUser} from "../../../../_helper/services";
import {URL} from "../../../../redux/_helper/utility";
import {message} from "antd";

function Comments(props) {

    const postsStore = useSelector(state => state.posts, shallowEqual);
    const store = useStore();
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
                console.log(response)
                dispatch(updatePost(response.post));
                console.log("use store", store.getState());
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
        console.log("store", postsStore);
        setContent("");
    }


    const handlerChange = (e) => setContent(e.target.value);
    return (
        <div className={props.showComments == true ? "section_comment active" : "section_comment"}>
            <div className="box-footer">
                <form onSubmit={onSubmit}>
                    <img className="img-responsive img-circle img-sm"
                         src={currentUser.photo_profil} alt="Alt Text"/>
                    <div className="img-push">
                        <input type="text" className="form-control input-sm"
                               placeholder="Press enter to post comment" value={content}
                               onChange={(e) => handlerChange(e)}
                        />
                    </div>
                </form>
            </div>
            {props.post.commantaires.map((c, index) => <Comment key={index} comment={c}/>)}
        </div>
    );
}

export default Comments;