import axios from 'axios';

const baseURL = 'https://travel-backend-qjvs.onrender.com/api/';

export const userRequest = axios.create({
	baseURL: baseURL,
});

export const publicRequest = axios.create({
	baseURL: baseURL
});

