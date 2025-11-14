import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default function AdminSidebar({menu}) {
    const linkClass = ({isActive}) => 
        `w-[260px] block border-2 border-[#ccc]  text-center py-2.5 rounded-2xl ${isActive ? "font-bold bg-navbar-active  " : ""}`;


    return (
        <div className="px-5 ">
            <FontAwesomeIcon icon={faBars}  className='text-2xl pb-5 cursor-pointer'/>
            <ul className='flex flex-col gap-4 justify-center items-center'>
                {menu.map((item, index) => (
                    <li
                        className='' 
                        key={index}
                    >
                        <NavLink 
                            to={item.link}
                            end
                            className={linkClass} 
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}
