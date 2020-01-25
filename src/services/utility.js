import { ENDPOINT } from './variables.js'

export const getFreeImages = (page) => {
    const url = `${ENDPOINT}v2/list?page=${page}`;
    return fetch(url).then(res => res.json());
}