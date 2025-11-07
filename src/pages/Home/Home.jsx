import React from 'react'
import HeroBanner from './sections/HeroBanner'
import SectionSpecialty from './sections/SectionSpecialty'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionMedicalFacility from './sections/SectionMedicalFacility';
import ProminentDoctor from './sections/ProminentDoctor';
import Handbook from './sections/Handbook';
import SectionAbout from './sections/SectionAbout';


export default function Home() {

  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className='flex flex-col gap-5'>
      {/* hero banner */}
      <div className=''>
        <HeroBanner />
      </div>
      {/* Section- */}
      <div className=' max-w-[1200px] m-auto'>
        {/* Specialty*/}
        <SectionSpecialty settings={settings}/>
        {/* Medical-Facilities */}
        <SectionMedicalFacility settings={settings}/>
      </div>
      <div className='bg-prominent-doctor'>
        <div className=' max-w-[1200px] m-auto'>
          {/* Out-standing */}
          <ProminentDoctor settings={settings}/>
        </div>
      </div>
      <div className='max-w-[1200px] m-auto'>
        {/* Handbook */}
        <Handbook settings={settings} />
      </div>
      <div className='bg-about'>
        <div className=' max-w-[1200px] m-auto'>
          {/* About */}
          <SectionAbout />
        </div>
      </div>
    </div>
  )
}
