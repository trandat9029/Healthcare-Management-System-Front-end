import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

export default function Header() {
    const linkClass = ({isActive}) => 
        `px-3 py-2 ${isActive ? "font-bold bg-navbar-active rounded-full " : ""}`;

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
                <span className='text-xl font-normal cursor-pointer '>Đăng nhập</span>
            </div>
        </div>
    )
}
