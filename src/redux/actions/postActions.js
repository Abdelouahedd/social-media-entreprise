export const getAllPosts = (posts) => {
    return {
        type: "GET_ALL_POST",
        payload: posts
    };
}

export const addPost = (post) => {
    return {
        type: "ADD_POST",
        payload: post
    };
}


export const getPost = (post) => {
    return {
        type: "GET_POST",
        payload: post
    };
}

export const updatePost = (post) => {
    return {
        type: "UPDATE_POST",
        payload: post
    }
}

export const deletePost = (id) => {
    return {
        type: "DELETE_POST",
        payload: id
    };
}


export const addComments = (comment) => {
    return {
        type: "ADD_COMMENT",
        payload: comment
    };
}

export const addReplayComment = (idCommet, replayComment) => {
    return {
        type: "ADD_REPLAY_COMMENT",
        payload: replayComment,
        _idComment: idCommet
    };
}
