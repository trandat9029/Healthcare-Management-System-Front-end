import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, } from '@fortawesome/free-solid-svg-icons';

export default function MedicalFacility() {
  return (
    <div className='py-10 max-w-[1200px] m-auto'>
      <div className='flex justify-between pb-5'>
        <h3 className='text-3xl font-semibold'>Cơ sở y tế</h3>
        <div className='flex gap-2.5'>
          <input 
            type="text" 
            placeholder='Tỉnh thành' 
            className='border-2'
          />
          <div className='bg-search p-3 w-[350px] flex justify-between items-center rounded-full text-lg font-normal'>
            <input type="text" placeholder='Tìm kiếm' />
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </div>
      <div className='py-5'>
        <div className='grid grid-cols-4 gap-y-8 gap-x-4'>
          <div className='border-slide p-4'>
            <img src="/src/assets/images/homepage/medical-facilityS/an-viet.jpg" alt="logo" className='w-[264px] h-[146px]' />
            <h4 className='text-lg font-bold  mt-2.5'>Bệnh viện Đa khoa An Việt</h4>
          </div>
          <div className='border-slide p-4'>
            <img src="/src/assets/images/homepage/medical-facilityS/da-khoa-ha-noi.png" alt="logo" className='w-[264px] h-[146px]' />
            <h4 className='text-lg font-bold  mt-2.5'>Bệnh viện Đa khoa Hà Nội</h4>
          </div>
          <div className='border-slide p-4'>
            <img src="/src/assets/images/homepage/medical-facilityS/da-lieu.png" alt="logo" className='w-[264px] h-[146px]' />
            <h4 className='text-lg font-bold  mt-2.5'>Hệ thống Phòng khám Da liễu Hà Nội</h4>
          </div>
          <div className='border-slide p-4'>
            <img src="/src/assets/images/homepage/medical-facilityS/dk-ha-dong.png" alt="logo" className='w-[264px] h-[146px]' />
            <h4 className='text-lg font-bold  mt-2.5'>Bệnh viện Đa khoa Hà Đông</h4>
          </div>
          <div className='border-slide p-4'>
            <img src="/src/assets/images/homepage/medical-facilityS/lo-go-viet-duc.jpg" alt="logo" className='w-[264px] h-[146px]' />
            <h4 className='text-lg font-bold  mt-2.5'>Bệnh viện Hữu nghị Việt Đức</h4>
          </div>
          <div className='border-slide p-4'>
            <img src="/src/assets/images/homepage/medical-facilityS/mat-ha-noi.png" alt="logo" className='w-[264px] h-[146px]' />
            <h4 className='text-lg font-bold  mt-2.5'>Bệnh viện Mắt Hà Nội 2</h4>
          </div>
          <div className='border-slide p-4'>
            <img src="/src/assets/images/homepage/medical-facilityS/phu-san.png" alt="logo" className='w-[264px] h-[146px]' />
            <h4 className='text-lg font-bold  mt-2.5'>Phòng khám Chuyên khoa Sản Phụ Khoa</h4>
          </div>
          <div className='border-slide p-4'>
            <img src="/src/assets/images/homepage/medical-facilityS/thucuc.png" alt="logo" className='w-[264px] h-[146px]' />
            <h4 className='text-lg font-bold  mt-2.5'>Hệ thống Y tế Thu Cúc TCI</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
