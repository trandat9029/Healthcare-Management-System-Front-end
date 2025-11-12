// checkAccess.js
import { USER_ROLE } from '../formatting/constant'; // Import USER_ROLE từ menuApp

// Hàm kiểm tra quyền truy cập
const checkAccess = (role, path) => {
    if (role === USER_ROLE.DOCTOR) {
        // Các route mà Doctor không được phép truy cập
        const restrictedRoutes = [
            "/admin/manage-users",
            "/admin/manage-specialty",
            "/admin/manage-medical-facilities",
            "/admin/manage-handbook"
            ];
            
            if (restrictedRoutes.includes(path)) {
            // Nếu Doctor cố gắng truy cập vào các route này, trả về true để chuyển hướng
            return false;
            }
        }
    
    // Nếu không bị hạn chế, trả về true để render trang
        return true;
    };

export default checkAccess;
