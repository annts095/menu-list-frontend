import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_S3_JSON_ENDPOINT,
    timeout: 3000,
});

export async function fetchMenus() {
    const uri = '/menus.json';
    return axiosInstance.get(uri);
}
