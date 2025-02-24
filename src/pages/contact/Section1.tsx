import React from 'react'
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function Section1() {
  return (
    <section className="w-full px-4 md:px-0 bg-[#043A53] h-[900px] md:h-[880px]">
         <div className="w-full mx-auto flex flex-col items-center">
          <div className='text-center text-white w-full'>
          <h1 className='text-[38px] md:text-5xl font-bold pt-[80px] md:pt-[200px]'>Help is here when you need it</h1>
          <h2 className='text-[#97F03F] pt-8 text-[18px]'>Support is available seven days a week. Contact our team.</h2>
          </div>
           <div className="max-w-6xl mx-auto p-6 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left pt-[20px] md:pt-[180px]">
        
        {/* Contact Support */}
        <div className="p-4 ">
          <h3 className="text-xl font-semibold mb-4">Contact Support</h3>
          <p className="text-left text-sm text-[#A9CAE7]"> Email support 7 days a week, 
with live chat on weekdays 
from 9AM-6PM Eastern Time.</p>
          
        </div>

        {/* Connect with Us */}
        <div className="p-4 ">
          <h3 className="text-xl font-semibold mb-4">Connect with Us</h3>
        
          <div className="flex justify-left space-x-4 mt-2 text-blue-600">
            <FaTwitter className='bg-white p-1 cursor-pointer shadow-lg w-[24px] h-[24px] rounded-lg text-red-600'></FaTwitter>
            <FaInstagram className='bg-white p-1 cursor-pointer shadow-lg w-[24px] h-[24px] rounded-lg text-red-800'></FaInstagram>
            <FaLinkedinIn className='bg-blue-800 p-1 cursor-pointer shadow-lg w-[24px] h-[24px] rounded-lg text-white'></FaLinkedinIn>
           
          </div>
        </div>

        {/* Corporate Office */}
        <div className="p-4 ">
          <h3 className="text-xl font-semibold mb-4">Corporate Office</h3>
          <p className="text-left text-sm text-[#A9CAE7]"> California, USA
          </p>
          <p className="text-left text-sm text-[#A9CAE7]">support@lirisoft.com</p>
        </div>

        {/* India Office */}
        <div className="p-4 ">
          <h3 className="text-xl font-semibold mb-4">India Office</h3>
          <p className="text-left text-sm text-[#A9CAE7]"> 1660, 18th Cross Rd, MC Layout, 
          Vijayanagar, Bengaluru</p>
          <p className="text-left text-sm text-[#A9CAE7] mt-2"> support.india@lirisoft.com</p>
        </div>

      </div>
    </div>
           </div>
           </section>
  )
}
