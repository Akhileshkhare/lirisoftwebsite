import React from 'react';

export default function Section4() {
  return (
    <section className='w-full flex flex-col md:flex-row items-center justify-between py-10 px-4 md:px-0 h-auto md:h-[687px]'>
      {/* Left Part */}
      <div className="w-full md:w-1/2 h-[300px] md:h-full">
        <img
          src="/backimage3.jpeg"  // Replace with the actual image path
          alt="Rectangle Image"
          className="object-cover w-full h-full rounded-tr-xl rounded-br-xl"
        />
      </div>

      {/* Right Part (Rectangles and Owl Image Section) */}
      <div className="w-full md:w-1/2 px-6 md:px-20 text-left md:text-left mt-6 md:mt-0">
        <h2 className="text-2xl md:text-5xl font-semibold text-gray-900 mb-4 md:mb-6 leading-tight md:leading-[60px]">
          Comprehensive Care for<br /> 
          <span className="pt-2 text-[#92A7B0]">Your IT Ecosystem.</span>
        </h2>
        <p className="text-base md:text-lg text-gray-900 mb-6 md:mb-8">
          Explore Our Portfolio to Discover Our Previous Projects.
        </p>
        <button className="px-5 py-3 text-white font-semibold bg-[#F0B73F] rounded-3xl flex items-center justify-center md:justify-start space-x-3 mx-auto md:mx-0">
          <span className='mr-3'>Portfolio</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 bg-gray-500 opacity-60 rounded-full p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M18 12H6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
