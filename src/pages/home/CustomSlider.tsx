import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_BASE_URI } from "../../config/apiConfig";
import { FaChevronCircleLeft } from "react-icons/fa";

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
        type="button"
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        background: "#a3a3a3",
          width: 24,
          height: 23,
        borderRadius:'50%',
          zIndex: 2,
          cursor: "pointer",
          border: "none",
          transition: "background 0.2s"
        }}
        onClick={onClick}
        onMouseOver={e => (e.currentTarget.style.background = '#F0B73F')}
        onMouseOut={e => (e.currentTarget.style.background = '#a3a3a3')}
        
      >
      </button>
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <button
        type="button"
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#a3a3a3",
          width: 24,
          height: 23,
        borderRadius:'50%',
          zIndex: 2,
          cursor: "pointer",
          border: "none",
          transition: "background 0.2s"
        }}
        onClick={onClick}
        onMouseOver={e => (e.currentTarget.style.background = '#F0B73F')}
        onMouseOut={e => (e.currentTarget.style.background = '#a3a3a3')}
       
      >
      <span>  <FaChevronCircleLeft/></span>
      </button>
    );
  }

  return (
    <div className="w-[96%] md:w-[850px] ">
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
