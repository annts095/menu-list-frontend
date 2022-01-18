import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_S3_JSON_ENDPOINT,
    timeout: 3000,
});

export async function fetchCategories() {
    const uri = '/categories.json';
    return axiosInstance.get(uri);
}
