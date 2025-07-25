import axios from "axios";

export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

// apiClient.interceptors.request.use((config) => {
//     const token = localStorage.getItem('authToken');
//     if(token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// })

// apiClient.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         if (error.response?.status === 401) {
//             localStorage.removeItem('authToken');
//             window.location.href = '/login';
//         }
//         return Promise.reject(error);
//     }
// )