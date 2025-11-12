import React from 'react'

export default function SectionAbout() {
    return (
        <div className='pt-5 pb-7'>
            <div className='text-center text-3xl font-semibold cl-text-title'>
                <h3>Truyền thông nói về BookingHealth</h3>
            </div>
            <div className='flex mt-10 gap-8'>
                <div className='w-[50%]'>
                    <iframe
                        className="rounded-3xl"
                        width="100%"
                        height="400"
                        src="https://www.youtube.com/embed/FyDQljKtWnI"
                        title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾP"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className='w-[50%] '>
                    <div className='grid grid-cols-2 gap-4 mt-5'>
                         <div className=" bg-white p-5 mx-auto w-[274px] rounded-xl cursor-pointer ">
                            <a href="">
                                <img 
                                    src="/src/assets/images/homepage/aboutS/vnexpress.png" 
                                    alt="logo" className='m-auto w-[164px] h-[39px]' 
                                />
                            </a>
                         </div>
                        <div className=" bg-white p-5 mx-auto w-[274px] rounded-xl cursor-pointer">
                            <a href="">
                                <img 
                                    src="/src/assets/images/homepage/aboutS/suckhoedoisong.png" 
                                    alt="logo" className='m-auto w-[164px] h-[39px]' 
                                />
                            </a>
                         </div>
                        <div className=" bg-white p-5 mx-auto w-[274px] rounded-xl cursor-pointer">
                            <a href="">
                                <img 
                                    src="/src/assets/images/homepage/aboutS/142415-logo-vnnet.png" 
                                    alt="logo" className='m-auto w-[164px] h-[39px]' 
                                />
                            </a>
                         </div>
                        <div className=" bg-white p-5 mx-auto w-[274px] rounded-xl cursor-pointer">
                            <a href="">
                                <img 
                                    src="/src/assets/images/homepage/aboutS/vtv1.png" 
                                    alt="logo" className='m-auto w-[164px] h-[39px]' 
                                />
                            </a>
                         </div>
                        <div className=" bg-white p-5 mx-auto w-[274px] rounded-xl cursor-pointer">
                            <a href="">
                                <img 
                                    src="/src/assets/images/homepage/aboutS/165432-vtcnewslogosvg.png" 
                                    alt="logo" className='m-auto w-[164px] h-[39px]' 
                                />
                            </a>
                         </div>
                        <div className=" bg-white p-5 mx-auto w-[274px] rounded-xl cursor-pointer">
                            <a href="">
                               <img 
                                    src="/src/assets/images/homepage/aboutS/vnexpress.png" 
                                    alt="logo" className='m-auto w-[164px] h-[39px]' 
                                />
                            </a>
                         </div>
                        <div className=" bg-white p-5 mx-auto w-[274px] rounded-xl cursor-pointer">
                            <a href="">
                                <img 
                                    src="/src/assets/images/homepage/aboutS/vtv1.png" 
                                    alt="logo" className='m-auto w-[164px] h-[39px]' 
                                />
                            </a>
                         </div>
                        <div className=" bg-white p-5 mx-auto w-[274px] rounded-xl cursor-pointer">
                            <a href="">
                                <img 
                                    src="/src/assets/images/homepage/aboutS/110757-dantrilogo.png" 
                                    alt="logo" className='m-auto w-[164px] h-[39px]' 
                                />
                            </a>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
