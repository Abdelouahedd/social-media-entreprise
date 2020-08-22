export const authStart = () => {
    return {
        type: "AUTH_START"
    };
};


export const authSuccess = (token, message) => {
    return {
        type: "AUTH_SUCCESS",
        token: token,
        message: message
    };
};


export const authFail = (error) => {
    return {
        type: "AUTH_FAIL",
        error: error
    };
};
export const logOut = (state, action) => {
    return {
        type: "LOGOUT",
        token: "",
        message: "log out",
        error: false
    };
}


/* export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            passwrd: password
        };
        let url = 'http://127.0.0.1/php-react/back-end/api/loginProf.php';
        axios.post(url, authData)
            .then(response => {
                dispatch(authSuccess(response.data.jwt, response.data.message));
                history.push("/");
            })
            .catch(err => {
                console.log(err);
                alert(err);
                dispatch(authFail(err));
            });
    };
}; */