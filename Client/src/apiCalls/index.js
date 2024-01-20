import axios from 'axios';

export const axiosInstance = axios.create({
    Headers:{
        cridentials:'include',
        'Content-Type':"application/json"
    }
})
