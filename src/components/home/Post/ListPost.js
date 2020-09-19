import React, { useEffect, useState } from 'react';
import Post from "./Post";
import { URL } from "../../../redux/_helper/utility";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { getAllPosts } from "../../../redux/actions/postActions";

function ListPost(props) {

    const dispatch = useDispatch();
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const fetchData = () => {
            fetch(`${URL}/posts/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')
                }
            }).then(res => res.json())
                .then((response) => {
                    dispatch(getAllPosts(response.post));
                    setPosts(response.post);
                })
                .catch(err => message.error('Error logging in please try again', err));
        }
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {posts.map((post) => <Post key={post._id} {...post} />)}
        </>
    );
}

export default ListPost;