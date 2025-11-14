
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faBell  } from '@fortawesome/free-solid-svg-icons';
import { useAuthStore } from '../../store/useAuthStore';
import { useNavigate } from 'react-router-dom';



export default function AdminHeader() {

    const { user, logout } = useAuthStore();
    const navigate = useNavigate();


    const handleLogout = async () =>{
        try {
            await logout();
            navigate("/login") 
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className=' flex justify-between items-center bg-header'>
            <div className='pl-10'>
                <img src="/src/assets/images/header/logo.svg" alt="logo" />
            </div>
            <div className='flex px-40 items-center gap-8'>
                <div className='text-2xl'>
                    <FontAwesomeIcon icon={faBell} />
                </div>
                <div className='flex items-center gap-2' > 
                    <img
                        className='w-11 h-11 border-2 border-gray-400 p-2 rounded-full' 
                        src="/src/assets/images/header/User-avatar.svg.png" 
                        alt="avatar" 
                    />
                    <p className='text-xl font-semibold'>{user.lastName}</p>
                </div>
                <div 
                    onClick={handleLogout}
                    className='flex items-center gap-2 cursor-pointer'
                >
                    <FontAwesomeIcon icon={faArrowRightFromBracket} className='text-2xl' />
                    <p className='text-lg font-semibold'>Đăng xuất</p>
                </div>
            </div>
        </div>
    )
}
