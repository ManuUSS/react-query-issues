import axios from 'axios';

export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
});