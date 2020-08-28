export const getUser = (id) => {
    return {
        type: "GET_USER",
        id: id
    };
}

export const getAllUsers = () => {
    return {
        type: "GET_ALL_USERS"
    };
}

export const updateUser = (user) => {
    return {
        type: "UPDATE_USER",
        payload: user
    }
}
