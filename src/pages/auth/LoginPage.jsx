import React, { useEffect } from 'react'
import LoginForm from '../../features/auth/components/LoginForm/LoginForm';
import { useAuthStore } from '../../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {

    const { login, loading, error, isAuthenticated, initialize } = useAuthStore();
    const navigate = useNavigate();

    useEffect(() =>{
        initialize();
        if(isAuthenticated){
            navigate('/admin')
        }
    },[initialize, isAuthenticated, navigate])

    const handleSubmit = async (values) =>{
        console.log('check values: ', values)
        try { 
            
            await login(values);
            
        } catch (error) {
            console.error(error);
        }
    }

    if (isAuthenticated) return null;

    return (
        <div className='flex w-screen h-screen  '>
            <div className='w-[25%] h-[450px] m-auto border-black border-2 rounded-2xl p-10' >
                <LoginForm onSubmit={handleSubmit}/>
                {loading && <p className="text-center text-blue-600 mt-4">Đang đăng nhập...</p>}
                {error && <p className="text-center text-red-600 mt-4">{error}</p>}
            </div>
        </div>
    )
}
