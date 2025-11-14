import api from '../libs/axios'

export const handleLogin = async (data) => {
    const res = await api.post('/auth/login', data);
    return res;
}

export const handleLogout = async () =>{
    return api.post('/auth/logout', {}, {withCredentials: true})
}