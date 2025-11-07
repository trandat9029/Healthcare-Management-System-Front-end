
import ButtonMore from '../../../components/common/button/ButtonMore'
import Slider from 'react-slick'

export default function SectionSpecialty({settings}) {
    return (
        <div className='flex flex-col '>
            <div className=' flex justify-between items-center py-5'>
                <h3 className='text-3xl font-bold'>Chuyên khoa</h3>
                <ButtonMore />
            </div>
            <div className=''>
                <Slider {...settings} >
                    <div className="p-5">
                        <div className="border-slide p-5 cursor-pointer">
                            <img src="/src/assets/images/homepage/specitaltyS/co-xuong-khop.png" className='w-[300px] h-[196px]' alt="image" />
                            <h3 className='text-center pt-6 text-xl font-bold'>Co xuong khop 1</h3>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="border-slide p-5 cursor-pointer">
                            <img src="/src/assets/images/homepage/specitaltyS/co-xuong-khop.png" className='w-[300px] h-[196px]' alt="image" />
                            <h3 className='text-center pt-6 text-xl font-bold'>Co xuong khop 1</h3>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="border-slide p-5 cursor-pointer">
                            <img src="/src/assets/images/homepage/specitaltyS/co-xuong-khop.png" className='w-[300px] h-[196px]' alt="image" />
                            <h3 className='text-center pt-6 text-xl font-bold'>Co xuong khop 1</h3>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="border-slide p-5 cursor-pointer">
                            <img src="/src/assets/images/homepage/specitaltyS/co-xuong-khop.png" className='w-[300px] h-[196px]' alt="image" />
                            <h3 className='text-center pt-6 text-xl font-bold'>Co xuong khop 1</h3>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="border-slide p-5 cursor-pointer">
                            <img src="/src/assets/images/homepage/specitaltyS/co-xuong-khop.png" className='w-[300px] h-[196px]' alt="image" />
                            <h3 className='text-center pt-6 text-xl font-bold'>Co xuong khop 1</h3>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="border-slide p-5 cursor-pointer">
                            <img src="/src/assets/images/homepage/specitaltyS/co-xuong-khop.png" className='w-[300px] h-[196px]' alt="image" />
                            <h3 className='text-center pt-6 text-xl font-bold'>Co xuong khop 1</h3>
                        </div>
                    </div>
              </Slider>
            </div>
        </div>
    )
}
