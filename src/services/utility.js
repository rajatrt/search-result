import { ENDPOINT } from './variables.js'

export const getFreeImages = () => {
    const url = `${ENDPOINT}v2/list`;
    return fetch(url).then(res => res.json());
}