import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_API_URL}`,
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('TOKEN');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

axiosClient.interceptors.response.use((res) => {
    return res;
}, (err) => {
    const {response} = err;
    if (response.status === 401){
        localStorage.removeItem('TOKEN');
    }
    throw err;
})

export default axiosClient;