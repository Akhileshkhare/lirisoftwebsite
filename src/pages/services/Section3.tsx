import React, { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SectionProps } from '../home/Section1';

  interface Slide {
    text: string;
    userImage: string;
    userName: string;
    userTitle: string;
  }

export const Section3: React.FC<SectionProps> = ({ data }) => {   
  const sectionData:any=data || null;
  const [slides, setSlides] = useState<Slide[]>([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 1 slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Hide left and right navigation buttons
  };

  const { title1, highlight1, title2,title3, imageSrc, imageAlt } = sectionData;

  return (
    <section className="w-full  py-20 px-4 md:px-0 h-auto">
            <div className="w-full max-w-6xl mx-auto text-center pt-10">

        {/* <Slider {...settings}> */}

     
      <div className="w-full   mx-auto flex flex-row  items-center gap-10 md:gap-20 relative px-8 md:px-20">
        <div className="w-full  mx-auto flex flex-row  items-center space-x-6">
       
        <div className="w-full md:w-1/2 pl-0 md:h-[480px]  flex justify-center items-start pt-16">
          <div className="w-full h-[391px] md:h-[340px]">
            <img
              src={imageSrc}
              alt={imageAlt}
              style={{ backgroundRepeat: 'no-repeat' }}
              className="w-full h-[440px] object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 pl-0 md:h-[480px] flex items-start flex-col">
          <p className="text-3xl md:text-[34px] font-normal text-left mt-16  text-[#043A53] leading-snug md:leading-normal">
            <span className="font-bold">{highlight1}</span> {title1}
          </p>
          <p className="text-1xl md:text-[17px] text-left mt-4 leading-relaxed pr-0">
            {title2}          
          </p>
          <p className='text-1xl md:text-[17px] text-left mt-2 leading-relaxed pr-0'>  {title3}</p>
        </div>
        </div>
      </div>
      {/* <div className="w-full  mx-auto flex md:flex-row flex-col items-center gap-10 md:gap-20 relative px-8 md:px-20">
      <div className="w-full  mx-auto flex flex-row  items-center">

        <div className="w-full md:w-1/2 pl-0 md:h-[480px] flex justify-center items-start flex-col">
          <p className="text-3xl md:text-[34px] font-normal text-left text-[#043A53] leading-snug md:leading-normal">
            <span className="font-bold">{highlight1}</span> {title1}
          </p>
          <p className="text-1xl md:text-[17px] text-left mt-4 leading-relaxed">
            {title2}
          </p>
        </div>
        <div className="w-full md:w-1/2 pl-0 md:h-[480px] flex justify-center items-start pt-16">
          <div className="w-full h-[391px] md:h-[340px]">
            <img
              src={imageSrc}
              alt={imageAlt}
              style={{ backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      </div> */}
      {/* </Slider> */}
      </div>
    </section>
  );
}
