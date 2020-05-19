import axios from 'axios';

const UNSPLASH_API_KEY = `${process.env.REACT_APP_UNSPLASH_API_ACCESS_KEY.toString()}`; /* Replace with your own API key from unsplash. */


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ' + UNSPLASH_API_KEY.toString(),
    }
})