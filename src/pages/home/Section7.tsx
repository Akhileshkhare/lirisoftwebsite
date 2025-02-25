import React from "react";
import backimage5 from './assets/backimage5.png';

export default function Section7() {
  return (
    <section className="w-full bg-[#12141D]">
      <div className="w-4/5 mx-auto flex flex-col md:flex-row items-center justify-between py-0 h-auto md:h-[520px]">
        {/* Left Part */}
        <div className="w-full md:w-1/2 pl-10 md:pl-20">
          <h2 className="text-4xl md:text-5xl pt-10 md:pt-0 md:text-5xl font-semibold text-gray-100 mb-6 leading-tight">
            We are Committed to our customer service
          </h2>

          <button className="px-6 py-4 text-white text-lg font-semibold bg-[#F0B73F] rounded-full flex items-center space-x-2">
            <span className="mr-2">Connect us</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 bg-gray-500 opacity-60 rounded-full p-1 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5-5 5M18 12H6"
              />
            </svg>
          </button>
          <p className="text-gray-400 mt-5">Call us on 1800-123-4567</p>
        </div>

        {/* Right Part (Image) */}
        <div className="relative h-auto md:h-[520px] w-full md:w-1/2 overflow-hidden">
              {/* Yellow Bar Div */}
              <div className="absolute w-[104px] h-[502px] top-[160px] left-[500px] bg-[#F0B73F] rounded-[1000px]">
              <img src="./Icons.svg" alt="Icons" className="w-[72px] h-[72px] absolute left-[15px] top-[15px]" />
           
            </div>

            {/* Blue Rounded Div with Background Image */}
            <div className="absolute z-10 w-[104px] h-[413px] top-[331px] left-[355px] bg-[#043A53] rounded-[1000px] flex items-center justify-center">
            <img src="./Icons1.svg" alt="Icons" className="w-[72px] h-[72px] absolute left-[15px] top-[15px]" />
            </div>
            <img src="./Icons2.svg" alt="Icons" className="w-[72px] h-[72px] absolute left-[5px] bottom-[20px]" />
          <div
<<<<<<< HEAD
            // className="relative w-auto h-[200px] md:w-[723px] md:h-[805px] bg-[length:155%] bg-no-repeat bg-[position:-22px_-27px] md:bg-[position:-158px_-53px]"
            // style={{ backgroundImage: "url('/backimage5.png')" }}
            className="relative w-[723px] h-[805px] "
            style={{ backgroundImage: "url('/backimage5.png')",backgroundPosition:'-158px -53px',backgroundSize:'155%' }}
=======
            className="relative w-auto h-[200px] md:w-[723px] md:h-[805px] bg-[length:155%] bg-no-repeat bg-[position:-22px_-27px] md:bg-[position:-158px_-53px]"
            style={{ backgroundImage: "url('/backimage5.png')" }}
>>>>>>> b7a7c968231b4dbce09731e7cd3b520ee134d71f
          >
      
          </div>
        </div>
      </div>
    </section>
  );
}
