import decode from 'jwt-decode';


let token = sessionStorage.getItem('jwtToken')

export const currentUser = token ? decode(token).user : {};