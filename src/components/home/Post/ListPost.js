import React, { useEffect, useState } from 'react';
import Post from "./Post";



function ListPost(props) {

    const [posts, setposts] = useState(props.posts);

    useEffect(() => {
        setposts(props.posts);
        console.log(props.posts);
    }, [props]);

    console.log("Render", posts);

    return (
        <>
            { posts.map((post) => <Post key={post._id} {...post} />)}
        </>
    );
}

export default React.memo(ListPost);