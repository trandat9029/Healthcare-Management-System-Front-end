import api from '../libs/axios'

export const handleGetALlUser = async (inputId) => {
    const res = await api.get(`/users/list?id=${inputId}`);
    return res;
}

// export const handleLogout = async () =>{
//     return api.post('/auth/logout', {}, {withCredentials: true})
// }