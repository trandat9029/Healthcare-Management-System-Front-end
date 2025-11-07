import Slider from 'react-slick'
import ButtonMore from '../../../components/common/button/ButtonMore'

export default function ProminentDoctor({settings}) {
    return (
         <div className='flex flex-col '>
            <div className=' flex justify-between items-center py-5'>
                <h3 className='text-3xl font-bold'>Bác sĩ nổi bật</h3>
                <ButtonMore />
            </div>
            <div className='py-5'>
                <Slider {...settings} >
                    <div className="p-5">
                        <div className=" p-5 cursor-pointer flex flex-col justify-center items-center">
                            <img src="/src/assets/images/homepage/top-doctorS/anh-dai-dien-bs.jpg" className='w-[222px] h-[222px] rounded-full' alt="image" />
                            <h3 className='text-center pt-6 text-xl font-bold cl-text-content'>Phó giáo sư, Tiến sĩ Kiều Đình Hùng</h3>
                            <p className='text-center pt-2 text-md cl-text-desc '>Thân kinh, Cột sống, Ngoại thần kinh</p>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className=" p-5 cursor-pointer flex flex-col justify-center items-center">
                            <img src="/src/assets/images/homepage/top-doctorS/anh-dai-dien-bs.jpg" className='w-[222px] h-[222px] rounded-full' alt="image" />
                            <h3 className='text-center pt-6 text-xl font-bold cl-text-content'>Phó giáo sư, Tiến sĩ Kiều Đình Hùng</h3>
                            <p className='text-center pt-2 text-md cl-text-desc '>Thân kinh, Cột sống, Ngoại thần kinh</p>
                        </div>
                    </div>
                   <div className="p-5">
                        <div className=" p-5 cursor-pointer flex flex-col justify-center items-center">
                            <img src="/src/assets/images/homepage/top-doctorS/anh-dai-dien-bs.jpg" className='w-[222px] h-[222px] rounded-full' alt="image" />
                            <h3 className='text-center pt-6 text-xl font-bold cl-text-content'>Phó giáo sư, Tiến sĩ Kiều Đình Hùng</h3>
                            <p className='text-center pt-2 text-md cl-text-desc '>Thân kinh, Cột sống, Ngoại thần kinh</p>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className=" p-5 cursor-pointer flex flex-col justify-center items-center">
                            <img src="/src/assets/images/homepage/top-doctorS/anh-dai-dien-bs.jpg" className='w-[222px] h-[222px] rounded-full' alt="image" />
                            <h3 className='text-center pt-6 text-xl font-bold cl-text-content'>Phó giáo sư, Tiến sĩ Kiều Đình Hùng</h3>
                            <p className='text-center pt-2 text-md cl-text-desc '>Thân kinh, Cột sống, Ngoại thần kinh</p>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className=" p-5 cursor-pointer flex flex-col justify-center items-center">
                            <img src="/src/assets/images/homepage/top-doctorS/anh-dai-dien-bs.jpg" className='w-[222px] h-[222px] rounded-full' alt="image" />
                            <h3 className='text-center pt-6 text-xl font-bold cl-text-content'>Phó giáo sư, Tiến sĩ Kiều Đình Hùng</h3>
                            <p className='text-center pt-2 text-md cl-text-desc '>Thân kinh, Cột sống, Ngoại thần kinh</p>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className=" p-5 cursor-pointer flex flex-col justify-center items-center">
                            <img src="/src/assets/images/homepage/top-doctorS/anh-dai-dien-bs.jpg" className='w-[222px] h-[222px] rounded-full' alt="image" />
                            <h3 className='text-center pt-6 text-xl font-bold cl-text-content'>Phó giáo sư, Tiến sĩ Kiều Đình Hùng</h3>
                            <p className='text-center pt-2 text-md cl-text-desc '>Thân kinh, Cột sống, Ngoại thần kinh</p>
                        </div>
                    </div>
              </Slider>
            </div>
        </div>
    )
}
