import Axios from 'axios';

const axios = Axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api`,
    timeout: 2000,
});

export default axios;