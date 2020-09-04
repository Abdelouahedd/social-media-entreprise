import React, {useEffect, useState} from 'react';
import Post from "./Post";
import {URL} from "../../../redux/_helper/utility";
import {message} from "antd";
import {logger} from "redux-logger/src";
import Axios from "axios";

function ListPost(props) {
    // <Post {...post}/>
    const [posts, setPosts] = useState([]);

    const getAllPost = () => {
        fetch(`${URL}/posts/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')
            }
        }).then(res => res.json())
            .then((response) => {
                console.log(response)
                setPosts(response.post)
            })
            .catch(err => message.error('Error logging in please try again', err));
    }

    useEffect(() => {
        console.log("UseEffect");
        getAllPost();
    }, []);

    return (
        <>
            <h1>Post List</h1>
            {posts.map((post) => <Post key={post._id} {...post}/>)}
        </>
    );
}

export default ListPost;