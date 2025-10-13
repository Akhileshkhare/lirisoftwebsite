import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { SectionProps } from '../home/Section1';

export const Section4: React.FC<SectionProps> = ({ data }) => {   
  const sectionData:any=data || null;

  const { title1, highlight1, title2, imageSrc, imageAlt, highlight2, title3, sliderImages } = sectionData;

  // Use sliderImages if provided, otherwise fallback to [imageSrc]
  const images: { src: string; alt: string }[] = sliderImages && Array.isArray(sliderImages) && sliderImages.length > 0
    ? sliderImages
    : [
        { src: imageSrc, alt: imageAlt },
        { src: imageSrc, alt: imageAlt },
        { src: imageSrc, alt: imageAlt }
      ];

  const [current, setCurrent] = useState(0);

  const goPrev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goNext = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  // Removed auto scroll effect

  return (
    <section className="w-full py-8 px-6 md:px-0 h-auto bg-gray-100">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-10 md:gap-6 relative py-2">
        <div className="w-full pl-0 flex justify-center items-start flex-col">
          <p className="text-3xl md:text-[34px] font-normal text-left text-[#043A53] leading-snug md:leading-normal">
            <span className="font-bold">{highlight1} </span>{title1}
          </p>
          <p className="text-1xl md:text-[15px] text-[#12141D] text-left mt-4 leading-relaxed">
            {title2}
          </p>
        </div>
        <div className="w-full rounded-md bg-white pl-0 md:h-auto flex flex-col md:flex-row items-center justify-center items-stretch pt-0 gap-3">
          <div className="w-full p-0 h-[670px] md:h-[680px] relative flex items-start flex-col">
            <div className="flex w-full justify-center items-center flex-col relative" style={{ height: "400px" }}>
              {/* Slider navigation and image */}
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 border-none p-0 rounded-full shadow-sm flex items-center justify-center z-10 w-[26px] h-[27px] transition-colors duration-200"
                onClick={goPrev}
                aria-label="Previous"
                type="button"
                style={{ cursor: 'pointer' }}
                onMouseEnter={e => {
                  const icon = e.currentTarget.firstChild as HTMLElement;
                  if (icon) icon.style.color = '#F0B73F';
                }}
                onMouseLeave={e => {
                  const icon = e.currentTarget.firstChild as HTMLElement;
                  if (icon) icon.style.color = '#818181';
                }}
              >
                <FaChevronLeft size={22} color="#818181" />
              </button>
              <img
                src={images[current].src}
                alt={images[current].alt}
                style={{
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  height: "100%", // Fixed height for image
                  maxHeight: "400px", // Ensures image doesn't exceed container
                  width: "auto"
                }}
                className="w-[90%] object-cover md:pt-10 pt-0"
              />
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 border-none p-0 rounded-full shadow-sm flex items-center justify-center z-10 w-[26px] h-[27px] transition-colors duration-200"
                onClick={goNext}
                aria-label="Next"
                type="button"
                style={{ cursor: 'pointer' }}
                onMouseEnter={e => {
                  const icon = e.currentTarget.firstChild as HTMLElement | null;
                  if (icon) icon.style.color = '#F0B73F';
                }}
                onMouseLeave={e => {
                  const icon = e.currentTarget.firstChild as HTMLElement | null;
                  if (icon) icon.style.color = '#818181';
                }}
              >
                <FaChevronRight size={22} color="#818181" />
              </button>
              {/* Dots navigation */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-3 h-3 rounded-full ${current === idx ? "bg-[#043A53]" : "bg-gray-300"}`}
                    onClick={() => setCurrent(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    type="button"
                  />
                ))}
              </div>
            </div>
            <div className="md:p-10 p-8 text-[#12141D] flex flex-col gap-4">
              <h1 className="font-bold">{highlight2}</h1>
              <p>{title3}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
