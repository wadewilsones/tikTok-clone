import axios from 'axios';

const instance = axios.create({
    baseURL:"https://tiktok-cl-bc.herokuapp.com/"
});

export default instance;