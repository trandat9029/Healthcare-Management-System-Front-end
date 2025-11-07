import Slider from 'react-slick'
import ButtonMore from '../../../components/common/button/ButtonMore'

export default function Handbook({settings}) {
    return (
        <div className='flex flex-col'>
            <div className=' flex justify-between items-center py-5'>
                <h3 className='text-3xl font-bold'>Cẩm nang</h3>
                <ButtonMore />
            </div>
            <div className='py-5'>
                <Slider {...settings} >
                    <div className="p-2">
                        <div className="  cursor-pointer">
                            <img src="/src/assets/images/homepage/handbook/tam-soat-dot-quy-tphcm.png" className='w-[320px] h-[191px]' alt="image" />
                            <h3 className='w-[320px] cl-text-content pt-6  text-md font-[600]'>Trồng răng implant ở đâu uy tín, an toàn tại Hà Nội? (Phần 2)</h3>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className=" cursor-pointer">
                            <img src="/src/assets/images/homepage/handbook/tam-soat-dot-quy-tphcm.png" className='w-[320px] h-[191px]' alt="image" />
                            <h3 className='w-[320px] cl-text-content pt-6  text-md font-[600]'>Trồng răng implant ở đâu uy tín, an toàn tại Hà Nội? (Phần 2)</h3>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className=" cursor-pointer">
                            <img src="/src/assets/images/homepage/handbook/tam-soat-dot-quy-tphcm.png" className='w-[320px] h-[191px]' alt="image" />
                            <h3 className='w-[320px] cl-text-content pt-6  text-md font-[600]'>Trồng răng implant ở đâu uy tín, an toàn tại Hà Nội? (Phần 2)</h3>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className=" cursor-pointer">
                            <img src="/src/assets/images/homepage/handbook/tam-soat-dot-quy-tphcm.png" className='w-[320px] h-[191px]' alt="image" />
                            <h3 className='w-[320px] cl-text-content pt-6  text-md font-[600]'>Trồng răng implant ở đâu uy tín, an toàn tại Hà Nội? (Phần 2)</h3>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className=" cursor-pointer">
                            <img src="/src/assets/images/homepage/handbook/tam-soat-dot-quy-tphcm.png" className='w-[320px] h-[191px]' alt="image" />
                            <h3 className='w-[320px] cl-text-content pt-6  text-md font-[600]'>Trồng răng implant ở đâu uy tín, an toàn tại Hà Nội? (Phần 2)</h3>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className=" cursor-pointer">
                            <img src="/src/assets/images/homepage/handbook/tam-soat-dot-quy-tphcm.png" className='w-[320px] h-[191px]' alt="image" />
                            <h3 className='w-[320px] cl-text-content pt-6  text-md font-[600]'>Trồng răng implant ở đâu uy tín, an toàn tại Hà Nội? (Phần 2)</h3>
                        </div>
                    </div>
              </Slider>
            </div>
        </div>
    )
}
