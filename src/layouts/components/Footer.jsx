import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <div  className='w-full '>
            <div className='px-60 bg-footer-up flex justify-between py-6'>
                <div className='flex flex-col gap-8 w-lg'>
                    <div className='w-lg'>
                        <h4 className='text-xl font-bold mb-2.5'>Công ty cổ phần Công nghệ BookingHealth</h4>
                        <ul className='flex flex-col gap-3 '>
                            <li className='text-lg flex items-center gap-2'>
                                <FontAwesomeIcon icon={faMapLocationDot} />
                                <p >Khu đô thị mới Cầu Giấy, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam</p>
                            </li>
                            <li className='text-lg flex items-center gap-2'>
                                <FontAwesomeIcon icon={faPhone}/>
                                <p>024-7301-2468 (7h - 18h)</p>
                            </li>
                            <li className='text-lg flex items-center gap-2'>
                                <FontAwesomeIcon icon={faEnvelope}/>
                                <p>support@bookingcare.vn (7h - 18h)</p>
                            </li>
                        </ul>
                    </div>
                    <div className=''>
                        <h4 className='text-xl font-bold mb-2.5'>Văn phòng tại TP Hà Nội</h4>
                        <div className='text-lg flex items-center gap-2 '>
                            <FontAwesomeIcon icon={faMapLocationDot} />
                            <span>Khu đô thị mới Cầu Giấy, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội</span>
                        </div>
                    </div>
                </div>
                <div className='w-80'>
                    <img src="/src/assets/images/header/logo.svg" alt="logo" className='mx-auto' />
                    <ul className='flex flex-col text-lg gap-3 '>
                        <li>Liên hệ hợp tác</li>
                        <li>Chuyển đổi số</li>
                        <li>Chính sách bảo mật</li>
                        <li>Quy chế hoạt động</li>
                        <li>Câu hỏi thường gặp</li>
                    </ul>
                </div>
                <div className='w-lg'>
                    <h4 className='text-xl font-bold mb-2.5'>Đối tác bảo trợ nội dung</h4>
                    <ul className='flex flex-col gap-5'>
                        <li className='flex gap-4'>
                            <img src="/src/assets/images/footer/hellodoctorlogo.png" alt="Hello Doctor"  className='w-20 h-20 bg-center bg-contain'/>
                            <div className='text-lg'>
                                <p className='font-bold'>Hello Doctor</p>
                                <p>Bảo trợ chuyên mục nội dung "sức khỏe tinh thần"</p>
                            </div>
                        </li>
                        <li className='flex gap-4'>
                            <img src="/src/assets/images/footer/logo-bernard.png" alt="Bernard" className='w-20 h-20 bg-center bg-contain'/>
                            <div className='text-lg'>
                                <p className='font-bold'>hệ thông y khoa chuyên sâu quốc tế Bernard</p>
                                <p>Bảo trợ chuyên mục nội dung "y khoa chuyên sâu"</p>
                            </div>
                        </li>
                        <li className='flex gap-4'>
                            <img src="/src/assets/images/footer/doctor-check-2.png" alt="Doctor Check" className='w-20 h-20 bg-center bg-contain' />
                            <div className='text-lg'>
                                <p className='font-bold'>Doctor Check - Tầm soát bệnh để sống thọ hơn</p>
                                <p>Bảo trợ chuyên mục nội dung "sức khỏe tổng quát"</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='px-60 bg-footer-down h-20 flex justify-between pt-2.5' >
                <p className='text-white text-md font-bold'>© 2025 BookingCare.</p>
                <ul className='flex gap-2'>
                    <li><img src="/src/assets/images/footer/tiktok.png" alt="tiktok" className='w-8 h-8 rounded-lg' /></li>
                    <li><img src="/src/assets/images/footer/facebook.png" alt="facebook" className='w-8 h-8 rounded-lg' /></li>
                    <li><img src="/src/assets/images/footer/youtube.png" alt="youtube" className='w-8 h-8 rounded-lg' /></li>
                </ul>
            </div>
        </div>
    )
}
