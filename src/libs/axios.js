import axios from"axios"

//Tạo hàm axios để tái sử dụng
const api = axios.create({
    baseURL: import.meta.env.MODE == "development" ? "http://localhost:8080/api" : "/api",
    withCredentials: true,
    headers: {
    'Content-Type': 'application/json',
  },
});

// INTERCEPTOR GỬI TOKEN TỰ ĐỘNG
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // hoặc sessionStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


// Chỉ trả về data (giữ nguyên)
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Xử lý lỗi 401 toàn cục (tùy chọn)
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
