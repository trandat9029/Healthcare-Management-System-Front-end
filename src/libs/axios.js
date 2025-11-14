import axios from"axios"

const api = axios.create({
    baseURL: import.meta.env.MODE == "development" ? "http://localhost:8080/api" : "/api",
    withCredentials: true,
    headers: {
    'Content-Type': 'application/json',
  },
});

// // Interceptor: tự động thêm token vào header
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

api.interceptors.response.use(
    (response) => {
        // Thrown error for request with OK status code
        const { data } = response;
        return response.data;
    },
    // (error) => {
    //     if (error.response?.status === 401) {
    //         localStorage.removeItem('token');
    //         localStorage.removeItem('user');
    //         window.location.href = '/login'; // Chuyển về login
    //     }
    //     return Promise.reject(error);
    // }
    
);

export default api;
