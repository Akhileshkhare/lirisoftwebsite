import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomSlider = () => {
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
        {/* Slide 1 */}
        <div className="md:h-[227px] h-[287px] bg-white p-8 flex flex-col items-center justify-center rounded-lg shadow-md">
          {/* Text Content */}
          <p className="text-8xl font-['arial'] text-yellow-300 text-left p-0 m-0 mb-[-50px]">“</p>
          <p className="text-1xl text-gray-700 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* User Card */}
          <div className="w-[301px] h-[53px] flex items-center gap-4 mt-6 p-3 bg-white  rounded-lg">
            {/* User Image */}
            <img
              src="/user.png" // Replace with actual user image
              alt="User"
              className="w-12 h-12 rounded-full object-cover"
            />

            {/* User Info */}
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-900">Andrew Wilkins</p>
              <p className="text-xs text-gray-500">Managing Director, ABC Company</p>
            </div>
          </div>
        </div>
        <div className="md:h-[227px] h-[287px] bg-white p-8 flex flex-col items-center justify-center rounded-lg shadow-md">
          {/* Text Content */}
          <p className="text-8xl font-['arial'] text-yellow-300 text-left p-0 m-0 mt-[-10px] mb-[-50px]">“</p>
          <p className="text-1xl text-gray-700 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* User Card */}
          <div className="w-[301px] h-[53px] flex items-center gap-4 mt-6  bg-white  rounded-lg">
            {/* User Image */}
            <img
              src="/user.png" // Replace with actual user image
              alt="User"
              className="w-12 h-12 rounded-full object-cover"
            />

            {/* User Info */}
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-900">Andrew Wilkins</p>
              <p className="text-xs text-gray-500">Managing Director, ABC Company</p>
            </div>
          </div>
        </div>
       
      </Slider>
    </div>
  );
};

export default CustomSlider;
