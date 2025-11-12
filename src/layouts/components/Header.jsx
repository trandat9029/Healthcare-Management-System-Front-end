
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,  } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Modal from '../../components/modals/Modal';
import Login from '../../features/auth/components/Login/Login';
import Resgiter from '../../features/auth/components/Resgiter/Resgiter';
import { MODE } from '../../utils/formatting/constant';


export default function Header() {

    const [open, setOpen] = useState(false);
    const[mode, setMode] = useState(MODE.LOGIN)

    const linkClass = ({isActive}) => 
        `px-3 py-2 ${isActive ? "font-bold bg-navbar-active rounded-full " : ""}`;

    const handleClose = () =>{
        setOpen(false);
    }

    return (
        <div className='px-60 py-2 flex w-full justify-between bg-header'>
            <div className='flex items-center'>
                {/* <FontAwesomeIcon icon={faBars}  className=' flex text-3xl'/> */}
                <img src="/src/assets/images/header/logo.svg" alt="logo" className='w-full'/>
            </div>
            <div className='flex'>
                <nav className='px-5 flex items-center gap-6 text-xl font-normal'>
                    <NavLink to="/" className={linkClass}>Trang chủ</NavLink>
                    <NavLink to="/specialty" className={linkClass}>Chuyên khoa </NavLink>
                    <NavLink to="/medical-facilities" className={linkClass}>Cơ sở y tế</NavLink> 
                    <NavLink to="/handbook" className={linkClass}>Cẩm nang</NavLink>
                </nav>
                <div className='flex items-center'> 
                    <div className='flex items-center border-black border rounded-full pr-2 h-12'>
                        <input className='text-xl outline-0 px-4' type="text" placeholder='Tìm kiếm'/>
                        <button>
                            <FontAwesomeIcon icon={faSearch} className='text-2xl '/>
                        </button>
                    </div>
                </div>
            </div>
            
            <div className='flex items-center gap-2 '>
                <button 
                    className='text-xl font-normal cursor-pointer '
                    onClick={() => setOpen(true)}
                >
                    Đăng nhập
                </button>
                {mode === MODE.LOGIN && (
                    <Modal
                        open={open}
                        onClose={() => setOpen(false)}
                        area='w-[min(60vw,540px)]'
                        // title="Đăng nhập"
                        closeOnEsc={true}
                    >   
                        <div  className='pt-8'>
                            <Login closeDialog={handleClose}/>
                            <div className='flex justify-center'>
                                <button 
                                    onClick={() => setMode(MODE.REGISTER)}
                                    className='p-2.5 text-md text-blue-500 mt-8 uppercase font-bold cursor-pointer rounded-3xl hover:bg-[#daf3f6]'
                                >
                                    Chưa có tài khoản. Đăng ký ngay
                                </button>
                            </div>
                        </div>
                    </Modal> 
                )}
                { mode === MODE.REGISTER && (
                    <Modal
                        open={open}
                        onClose={() => setOpen(false)}
                        area='w-[min(80vw,740px)]'
                        closeOnEsc={true}
                    >   
                        <div  className='pt-8'>
                            <Resgiter  closeDialog={handleClose}/>
                            <div className='flex justify-center'>
                                <button 
                                    onClick={() => setMode(MODE.LOGIN)}
                                    className='p-2.5 text-md text-blue-500 mt-8 uppercase font-bold cursor-pointer rounded-3xl hover:bg-[#daf3f6]'
                                >
                                    Đã có tài khoản rồi. Đăng nhập ngay
                                </button>
                            </div>
                            
                        </div>
                    </Modal>
                )}
            </div>
        </div>
    )
}
