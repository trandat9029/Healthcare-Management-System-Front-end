import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <div className='px-60 py-4 flex w-full justify-between bg-header'>
            <div className='flex items-center'>
                <FontAwesomeIcon icon={faBars}  className=' flex text-3xl'/>
                <img src="/src/assets/images/header/logo.svg" alt="logo" className='w-full'/>
            </div>
            <div className='flex'>
                <ul className='px-5 flex items-center gap-8 text-2xl font-normal'>
                    <li >Trang chủ</li>
                    <li>Chuyên khoa </li>
                    <li>Cơ sở y tế</li> 
                    <li>Cẩm nang</li>
                </ul>
                <div className='flex items-center'> 
                    <div className='flex items-center border-black border rounded-full pr-2 h-14'>
                        <input className='text-2xl outline-0 px-4' type="text" placeholder='Tìm kiếm'/>
                        <button>
                            <FontAwesomeIcon icon={faSearch} className='text-2xl '/>
                        </button>
                    </div>
                </div>
            </div>
            
            <div className='flex items-center gap-2 text-2xl'>
                <span className='text-2xl font-normal cursor-pointer '>Đăng nhập</span>
            </div>
        </div>
    )
}
