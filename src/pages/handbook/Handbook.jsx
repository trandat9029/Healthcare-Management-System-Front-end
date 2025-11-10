import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, } from '@fortawesome/free-solid-svg-icons';

export default function Handbook() {
  return (
    <div className='py-10 max-w-[1200px] m-auto'>
      <div className='flex justify-between pb-5'>
        <h3 className='text-3xl font-semibold'>Cẩm nang</h3>
        <div className='bg-search p-3 w-[350px] flex justify-between items-center rounded-full text-lg font-normal'>
          <input type="text" placeholder='Tìm kiếm' className='outline-none'/>
          <FontAwesomeIcon icon={faSearch} className='cursor-pointer'/>
        </div>
      </div>
      <div className='py-5'>
        <div className='grid grid-cols-4 gap-y-8 gap-x-4'>
          <div className='border-slide p-4 cursor-pointer'>
            <img src="/src/assets/images/homepage/handbook/102426-adn-13.png" alt="logo" className='w-[264px] h-[146px]' />
            <h4 className='text-lg font-semibold  mt-2.5 truncate-2-lines'>7 Địa chỉ Nha khoa uy tín tại quận Hai Bà Trưng, Hà Nội</h4>
          </div>
          <div className='border-slide p-4 cursor-pointer'>
            <img src="/src/assets/images/homepage/handbook/nha-khoa-uy-tin-quan-tan-phu.png" alt="logo" className='w-[264px] h-[146px]' />
            <h4 className='text-lg font-semibold  mt-2.5 truncate-2-lines'>Nha khoa nào tốt quận Tân Phú, TP.HCM? Tiêu chí đánh giá nha khoa uy tín</h4>
          </div>
          <div className='border-slide p-4 cursor-pointer'>
            <img src="/src/assets/images/homepage/handbook/nha-khoa-uy-tin-quan-10.png" alt="logo" className='w-[264px] h-[146px]' />
            <h4 className='text-lg font-semibold  mt-2.5 truncate-2-lines'>Nha khoa uy tín Quận 10, TP.HCM: Top 6 phòng nha được đánh giá tốt (phần 1)</h4>
          </div>
          <div className='border-slide p-4 cursor-pointer'>
            <img src="/src/assets/images/homepage/handbook/eview-nha-khoa-uy-tin-quan-cau-giay--bookingcare.png" alt="logo" className='w-[264px] h-[146px]' />
            <h4 className='text-lg font-semibold  mt-2.5 truncate-2-lines'>Review 7 địa chỉ nha khoa uy tín tại Quận Cầu Giấy, Hà Nội</h4>
          </div>
          <div className='border-slide p-4 cursor-pointer'>
            <img src="/src/assets/images/homepage/handbook/nha-khoa-ha-noi-trong-rang-chuyen-sau-uy-tin-tai-ha-noibookingcare.png" alt="logo" className='w-[264px] h-[146px]' />
            <h4 className='text-lg font-semibold  mt-2.5 truncate-2-lines'>Trồng răng implant ở đâu uy tín, an toàn tại Hà Nội? (Phần 2)</h4>
          </div>
          <div className='border-slide p-4 cursor-pointer'>
            <img src="/src/assets/images/homepage/handbook/nha-khoa-uy-tin-quan-tan-phu.png" alt="logo" className='w-[264px] h-[146px]' />
            <h4 className='text-lg font-semibold  mt-2.5 truncate-2-lines'>9 Địa chỉ Nha khoa uy tín tại Quận Phú Nhuận, TP.HCM</h4>
          </div>
          <div className='border-slide p-4 cursor-pointer'>
            <img src="/src/assets/images/homepage/handbook/trong-rang-implant-bao-nhieu-tien.png" alt="logo" className='w-[264px] h-[146px]' />
            <h4 className='text-lg font-semibold  mt-2.5 truncate-2-lines'>Trồng răng Implant giá bao nhiêu? Bảng giá 11 địa chỉ Nha khoa uy tín TPHCM?</h4>
          </div>
          <div className='border-slide p-4 cursor-pointer'>
            <img src="/src/assets/images/homepage/handbook/nha-khoa-trong-rang-sai-gon-nha-khoa-tot-nhat.jpg" alt="logo" className='w-[264px] h-[146px]' />
            <h4 className='text-lg font-semibold  mt-2.5 truncate-2-lines'>Địa chỉ Nha khoa hàng đầu được nhiều Việt kiều lựa chọn làm răng tại TPHCM</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
