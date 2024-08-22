import axios from 'axios';
const BASE_URL='https://blog-application-48nq.onrender.com';

export const axiosPublic=axios.create({
    baseURL:BASE_URL,
    headers:{
        'Content-Type':'application/json'
    },
    withCredentials:true
});

export const axiosPrivate=axios.create({
    baseURL:BASE_URL,
    headers:{
        'Content-Type':'application/json'
    },
    withCredentials:true
});