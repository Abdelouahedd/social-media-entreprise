import decode from 'jwt-decode';


export const currentUser = decode(sessionStorage.getItem('jwtToken')).user;