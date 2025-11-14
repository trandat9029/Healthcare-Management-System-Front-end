import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../libs/axios';


// Async Thunk: Đăng nhập bằng Axios
export const login = createAsyncThunk(
    'auth/login',
    async({email, password}, {rejectWithValue}) =>{
        try {
            const response = await instance.post('/login', {
                email,
                password,
            });

            const { user, token } = response.data;

            // Lưu vào localStorage
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            return { user, token };
        } catch (error) {
            const message =
                error.response?.message || error.message || 'Đăng nhập thất bại';
            return rejectWithValue(message);
        }
    }
)

// Async Thunk: Kiểm tra token khi load trang (tùy chọn)



