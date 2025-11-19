import {create} from 'zustand'
import { toast } from 'sonner'
import { handleLogin, handleLogout } from '../services/authService';

export const useAuthStore = create((set) =>({
    accessToken: null,
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,

    clearState: () =>{
        set({ 
            accessToken: null,
            user: null,
            isAuthenticated: false,
            loading: false,
        })
    },

    // Login
    login: async (data) =>{
        
        set({ loading: true, error: null});
        try {
            const {user , accessToken} = await handleLogin(data);

            // Lưu vào localStorage (tùy chọn)
            localStorage.setItem('token', accessToken);
            localStorage.setItem('user', JSON.stringify(user));

            set({
                user,
                accessToken,
                isAuthenticated: true,
                loading: false,
            });
            toast.success("Login succeed");
        } catch (error) {
            console.error(error);
            toast.error("Login failed")
            const message = error.response?.message || 'Đăng nhập thất bại';
            set({ error: message, loading: false });
        }
    },

    logout: async () =>{
        set({ loading: true });
        try {
            // get().clearState();
            await handleLogout();
            toast.success("Logout succeed");
        } catch (error) {
            console.error('Logout error:', error);
            toast.error("Logout failed")
        }finally{
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            set({
                user: null,
                accessToken: null,
                isAuthenticated: false,
                loading: false,
            });
        }
    },

    // Initialize
    initialize: () =>{
        const accessToken = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        if(accessToken && user){
            set({
                accessToken,
                user: JSON.parse(user),
                isAuthenticated: true,
            })
        }
    }

}))