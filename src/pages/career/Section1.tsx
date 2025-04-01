import React from 'react'
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function Section1() {
  return (
    <section className="w-full px-4 md:px-0 bg-[#043A53] h-[580px] md:h-[780px]">
         <div className="w-full mx-auto flex flex-col items-center justify-center">
          <div className='text-center text-white w-full flex flex-col items-center justify-center'>
          <h1 className='text-[22px] w-full md:w-[60%] md:text-5xl font-semibold pt-[80px] md:pt-[200px]'>If you're passionate about what you do, we want you on our team.</h1>
          <h2 className='text-[#97F03F] pt-8 text-sm md:text-[20px]'>We are employee centric company.</h2>
          </div>
           <div className="w-full mx-auto flex text-white items-center justify-center">
      <div className="w-[75%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mt-[50px] md:mt-[140px] border-t border-b border-[#A9CAE7] pb-4">
        
        <div className="px-4 py-2">
          <h3 className="text-md font-semibold text-[#A9CAE7] mb-0">Keyword</h3>
          <p className="text-left text-xl text-white"> Search for opportunity...</p>
          
        </div>

        <div className="px-4 py-2 md:border-l border-gray-400">
         
          <select className="w-full bg-transparent text-[#A9CAE7] p-2 rounded border-0">
            <option value="" disabled selected style={{ color: '#043A53' }}>Expertise</option>
            <option value="engineering" style={{ color: '#043A53' }}>Engineering</option>
            <option value="design" style={{ color: '#043A53' }}>Design</option>
            <option value="marketing" style={{ color: '#043A53' }}>Marketing</option>
            <option value="sales" style={{ color: '#043A53' }}>Sales</option>
          </select>
        </div>
        <div className="px-4 py-2 md:border-l border-gray-400 flex flex-row items-center justify-center">
         
          <select className="w-full bg-transparent text-[#A9CAE7] p-2 rounded border-0">
            <option value="" disabled selected style={{ color: '#043A53' }}>Location</option>
            <option value="new-york" style={{ color: '#043A53' }}>New York</option>
            <option value="san-francisco" style={{ color: '#043A53' }}>San Francisco</option>
            <option value="london" style={{ color: '#043A53' }}>London</option>
            <option value="remote" style={{ color: '#043A53' }}>Remote</option>
          </select>
        
          <button className="px-6 py-3 text-white font-semibold bg-yellow-400 rounded-full flex items-center space-x-2">
            <span>Explore</span>           
          </button>     
        </div>
      </div>
    </div>
           </div>
           </section>
  )
}
