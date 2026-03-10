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
    <section className="w-full py-12 md:py-20 px-4 md:px-0 min-h-[400px]">
      <div className="w-full max-w-6xl mx-auto text-center pt-6 md:pt-10">
        <div className="w-full mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10 relative px-4 md:px-8">
          
          {/* Image Section - Shows first on mobile, left on desktop */}
          <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-1">
            <div className="w-full max-w-[500px]">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto max-h-[300px] md:max-h-[440px] object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Text Section - Shows second on mobile, right on desktop */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start order-2 md:order-2 px-2 md:px-0">
            <p className="text-2xl md:text-[34px] font-normal text-left text-[#043A53] leading-snug md:leading-normal mb-4">
              <span className="font-bold">{highlight1}</span> {title1}
            </p>
            <p className="text-base md:text-[17px] text-left leading-relaxed mb-3">
              {title2}          
            </p>
            <p className='text-base md:text-[17px] text-left leading-relaxed'>
              {title3}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
