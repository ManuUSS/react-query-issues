import axios from 'axios';

const configValue : string = process.env.REACT_APP_GIT_TOKEN;

export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: `Bearer ${ configValue }`
    }
});