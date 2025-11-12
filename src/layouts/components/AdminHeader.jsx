import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell  } from '@fortawesome/free-solid-svg-icons';



export default function AdminHeader() {
    return (
        <div className=' flex justify-between items-center bg-header'>
            <div className='pl-10'>
                <img src="/src/assets/images/header/logo.svg" alt="logo" />
            </div>
            <div className='flex pr-40 items-center gap-8'>
                <div className='text-2xl'>
                    <FontAwesomeIcon icon={faBell} />
                </div>
                <div className='flex items-center gap-2' > 
                    <img
                        className='w-11 h-11 border-2 border-gray-400 p-2 rounded-full' 
                        src="/src/assets/images/header/User-avatar.svg.png" 
                        alt="avatar" 
                    />
                    <p className='text-xl font-semibold'>Admin</p>
                </div>
            </div>
        </div>
    )
}
