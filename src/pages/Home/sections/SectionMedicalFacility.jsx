import React from 'react'
import Slider from 'react-slick'
import ButtonMore from '../../../components/common/button/ButtonMore'

export default function SectionMedicalFacility({settings}) {
    return (
        <div className='flex flex-col'>
            <div className=' flex justify-between items-center py-5'>
                <h3 className='text-3xl font-bold'>Cơ sở y tế</h3>
                <ButtonMore />
            </div>
            <div className='pb-5'>
                <Slider {...settings} >
                    <div className="p-5">
                        <div className="border-slide p-5 cursor-pointer">
                            <img src="/src/assets/images/homepage/medical-facilityS/lo-go-viet-duc.jpg" className='w-[300px] h-[196px]' alt="image" />
                            <h3 className='text-center pt-6 text-xl font-bold'>Co so y te 1</h3>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="border-slide p-5 cursor-pointer">
                            <img src="/src/assets/images/homepage/medical-facilityS/lo-go-viet-duc.jpg" className='w-[300px] h-[196px]' alt="image" />
                            <h3 className='text-center pt-6 text-xl font-bold'>Co so y te 2</h3>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="border-slide p-5 cursor-pointer">
                            <img src="/src/assets/images/homepage/medical-facilityS/lo-go-viet-duc.jpg" className='w-[300px] h-[196px]' alt="image" />
                            <h3 className='text-center pt-6 text-xl font-bold'>Co so y te 3</h3>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="border-slide p-5 cursor-pointer">
                            <img src="/src/assets/images/homepage/medical-facilityS/lo-go-viet-duc.jpg" className='w-[300px] h-[196px]' alt="image" />
                            <h3 className='text-center pt-6 text-xl font-bold'>Co so y te 4</h3>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="border-slide p-5 cursor-pointer">
                            <img src="/src/assets/images/homepage/medical-facilityS/lo-go-viet-duc.jpg" className='w-[300px] h-[196px]' alt="image" />
                            <h3 className='text-center pt-6 text-xl font-bold'>Co so y te 5</h3>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="border-slide p-5 cursor-pointer">
                            <img src="/src/assets/images/homepage/medical-facilityS/lo-go-viet-duc.jpg" className='w-[300px] h-[196px]' alt="image" />
                            <h3 className='text-center pt-6 text-xl font-bold'>Co so y te 6</h3>
                        </div>
                    </div>
              </Slider>
            </div>
        </div>
    )
}
