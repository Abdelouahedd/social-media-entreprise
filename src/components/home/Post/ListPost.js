import React, { useEffect, useState } from 'react';
import Event from './event/event';
import Post from './post/Post';
import Sondage from './sondage/sondage';




function ListPost(props) {

    const [posts, setposts] = useState(props.posts);

    useEffect(() => {
        setposts(props.posts);
    }, [props]);

    return (
        <>
            { posts.map((post) => {
                if (post.type === 'post') {
                    return <Post key={post._id} {...post} />
                } else if (post.type === 'event') {
                    return <Event key={post._id} {...post} />
                } else if (post.type === 'sondage') {
                    return <Sondage key={post._id} {...post} />
                }
                return null;
            })}
        </>
    );
}

export default React.memo(ListPost);