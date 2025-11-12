import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useLocation } from "react-router-dom"
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import { adminMenu, doctorMenu } from '../../routes/MenuApp'
import { USER_ROLE } from '../../utils/formatting/constant'
import checkAccess from '../../utils/validation/CheckAccess'

export default function Admin() {

    const [menu, setMenu] = useState([]);
    const [userRole, setUserRole] = useState(USER_ROLE.DOCTOR); 
    const location = useLocation();

    useEffect(() =>{
        if (userRole === USER_ROLE.ADMIN) {
            setMenu(adminMenu);
        } else if (userRole === USER_ROLE.DOCTOR) {
            setMenu(doctorMenu);
        }
    }, [userRole])

    // Kiểm tra quyền truy cập của Doctor đối với route hiện tại
    const hasAccess = checkAccess(userRole, location.pathname);

     if (!hasAccess) {
        return <Navigate to="/admin/manage-patient" />; // Chuyển hướng về trang quản lý bệnh nhân cho Doctor
    }

    return (
        <div className='main'>
            <div className='header'>
                <AdminHeader />
            </div>
            <div className='flex'>
                <div className='w-[16%]'>
                    <AdminSidebar menu={menu} />
                </div>
                <div className='w-[84%]'>
                    {<Outlet />}
                </div>
            </div>
        </div>
    )
}
