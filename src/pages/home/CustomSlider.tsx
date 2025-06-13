import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_BASE_URI } from "../../config/apiConfig";
import { FaPlay } from "react-icons/fa";

const CustomSlider = () => {
  interface Slide {
    text: string;
    userImage: string;
    userName: string;
    userTitle: string;
  }

  const [slides, setSlides] = useState<Slide[]>([]);

  useEffect(() => {
    fetch(`${API_BASE_URI}/api/homepage`) 
      .then((response) => response.json())
      .then((data) => setSlides(data.Home.section5.slides))
      .catch((error) => console.error("Error fetching slider data:", error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 1 slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  // Custom Arrow Components
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
       <button
                     className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-white border-gray-200 border p-3 rounded-full shadow-sm flex items-center justify-center z-10"
                    onClick={onClick}
                     aria-label="Next"
                     type="button"
                   >
                     <FaPlay size={12} />
                   </button>
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <button
                      className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-white border-gray-200 border p-3 rounded-full shadow-sm flex items-center justify-center z-10"
        onClick={onClick}
                      aria-label="Previous"
                      type="button"
                    >
                      <FaPlay size={12} className="rotate-180" />
                    </button>
      // <div 
      //   className={className}
      //   style={{ ...style, display: "block", background: "#a3a3a3", borderRadius: "50%" }}
      //   onClick={onClick}
      // />
    );
  }

  return (
    <div className="w-full md:w-[850px] mx-auto ">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="bg-white p-8 flex flex-col items-center justify-center rounded-lg shadow-md min-h-[277px] md:min-h-[227px]"
            style={{ minHeight: '227px', height: 'auto' }}
          >
            {/* Text Content */}
            <p className="text-8xl font-['arial'] text-yellow-300 text-left p-0 m-0 mb-[-50px]">“</p>
            <p className="text-[18px] text-gray-800 text-left break-words whitespace-pre-line">{slide.text}</p>

            {/* User Card */}
            <div className="w-[301px] h-[53px] flex items-center gap-4 mt-6 p-3 bg-white rounded-lg">
              {/* User Image */}
              <img
                src={slide.userImage} // Use user image from JSON
                alt={slide.userName}
                className="w-12 h-12 rounded-full object-cover"
              />

              {/* User Info */}
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-900">{slide.userName}</p>
                <p className="text-xs text-gray-500">{slide.userTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
