import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookMedical, faHome, faHospital, faHouseMedical, faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

export default function HeroBanner() {
    const linkClass = ({isActive}) => 
        `text-center text-[#49bce2] ${isActive ? "font-bold   " : ""}`;

    return (
        <div className='bg-hero-banner h-[80vh] flex flex-col '>
            <div className='h-[65%] bg-hero-banner-up pt-20 flex flex-col '>
            <div className='bg-hero-banner-title flex flex-col gap-1 text-4xl'>
                <h2>Nền tảng y tế</h2>
                <h2>Chăm sóc sức khỏe toàn diện</h2>
            </div>
            <div className='bg-hero-banner-search p-3 m-auto mt-12 flex gap-1'>
                <FontAwesomeIcon icon={faSearch} className='text-xl' />
                <input type="text" className='outline-0 h-[30px] w-[400px] bg-transparent border-0 text-lg'  placeholder='Tìm chuyên khoa khám bệnh'/>
            </div>
            </div>
            <div className='h-[35%] bg-hero-banner-down flex items-end justify-center pb-5'>
                <nav className='flex items-center gap-20 text-2xl font-normal'>
                    <NavLink to="/" className={linkClass}>
                        <FontAwesomeIcon icon={faHome} className='text-3xl'/>
                        <p>Trang chủ</p>
                    </NavLink>
                    <NavLink to="/specialty" className={linkClass}>
                        <FontAwesomeIcon icon={faHospital} className='text-3xl'/>
                        <p>Chuyên khoa</p> 
                    </NavLink>
                    <NavLink to="/medical-facilities" className={linkClass}>
                        <FontAwesomeIcon icon={faHouseMedical} className='text-3xl'/>
                        <p>Cơ sở y tế</p>
                    </NavLink> 
                    <NavLink to="/handbook" className={linkClass}>
                        <FontAwesomeIcon icon={faBookMedical} className='text-3xl'/>
                        <p>Cẩm nang</p>
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}

