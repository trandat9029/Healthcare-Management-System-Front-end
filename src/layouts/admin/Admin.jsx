import React, { useMemo } from 'react'
import { Navigate, Outlet, useLocation } from "react-router-dom"
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import { adminMenu, doctorMenu } from '../../routes/MenuApp'
import { USER_ROLE } from '../../utils/formatting/constant'
import { useAuthStore } from '../../store/useAuthStore'

export default function Admin() {

    const { user, isAuthenticated } = useAuthStore();
    const location = useLocation();


    // Khởi tạo auth khi vào layout
//    useEffect(() => {
//         initialize();
//     });

    // Tính menu theo role
    const menu = useMemo(() => {
        return user.roleId === USER_ROLE.ADMIN ? adminMenu : doctorMenu;
    }, [user.roleId]);
    
    // Danh sách trang Doctor được phép
    const doctorAllowedPaths = useMemo(() => {
        return doctorMenu.map(item => item.link);
    }, []);

    // Nếu chưa đăng nhập → App.jsx đã chặn, nhưng vẫn check lại
    if (!isAuthenticated || !user) {
        return <Navigate to="/login" replace />;
    }

    // Kiểm tra quyền truy cập
    const hasAccess = user.roleId === USER_ROLE.ADMIN || doctorAllowedPaths.includes(location.pathname);

    // Doctor vào trang không được phép → về manage-patient
    if (!hasAccess) {
        return <Navigate to="/admin/manage-patient" replace />;
    }

    return (
        <div className='main'>
            <div className='header'>
                <AdminHeader />
            </div>
            <div className='flex pt-5'>
                <div className='w-[16%]'>
                    <AdminSidebar menu={menu} />
                </div>
                <div className='w-[84%] h-[90vh] p-8 bg-gray-200 rounded-md' >
                    <div className='bg-white h-full rounded-lg'>
                        {<Outlet />}
                    </div>
                </div>
            </div>
        </div>
    )
}
