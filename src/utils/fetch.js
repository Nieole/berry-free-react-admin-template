import config from '../config';

const login = ({ userName, password }) => {
    const urlencoded = new URLSearchParams();
    urlencoded.append('username', userName);
    urlencoded.append('password', password);
    return fetch(`${config.serverHost}/login`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlencoded
    });
};

export default login;
