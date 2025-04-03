import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomSlider = () => {
  interface Slide {
    text: string;
    userImage: string;
    userName: string;
    userTitle: string;
  }

  const [slides, setSlides] = useState<Slide[]>([]);

  useEffect(() => {
    fetch("https://liriapis.onrender.com/api/homepage")
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
  };

  return (
    <div className="w-full md:w-[850px] mx-auto ">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="md:h-[227px] h-[277px] bg-white p-8 flex flex-col items-center justify-center rounded-lg shadow-md"
          >
            {/* Text Content */}
            <p className="text-8xl font-['arial'] text-yellow-300 text-left p-0 m-0 mb-[-50px]">“</p>
            <p className="text-1xl text-gray-700 text-left">{slide.text}</p>

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
