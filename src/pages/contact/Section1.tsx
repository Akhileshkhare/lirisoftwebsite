import React, { useState, useEffect } from 'react';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import { SectionProps } from '../home/Section1';
import { ContactForm } from './Section2';

export const Section1: React.FC<SectionProps> = ({ data,data1 }) => {   
  const sectionData:any=data || null;

  const { title1, highlight1, contactSupport, corporateOffice,corporateOfficeemail, indiaOffice,indinofficeemail, socialLinks } = sectionData;

  return (
    <section className="w-full px-4 md:px-0 bg-[#043A53] h-auto">
      <div className="w-full mx-auto flex flex-col items-center">
        <div className='text-center text-white w-full'>
          <h1 className='text-[38px] md:text-[40px] font-semibold pt-[40px] md:pt-[80px] pb-6 md:pb-16'>{title1}</h1>
          {/* <h2 className='text-[#97F03F] pt-8 text-[18px]'>{highlight1}</h2> */}
          <ContactForm  data={data1}></ContactForm> 
        </div>
        <div className="max-w-6xl mx-auto p-6 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left pt-[20px] md:pt-[40px] pb-8">
            
            {/* Contact Support */}
            {/* <div className="p-4 ">
              <h3 className="text-xl font-semibold mb-4">Contact Support</h3>
              <p className="text-left text-sm text-[#A9CAE7]">{contactSupport}</p>
            </div> */}

          

            {/* Corporate Office */}
            <div className="p-4 ">
              <h3 className="text-xl font-semibold mb-4">US Office</h3>
              <p className="text-left text-sm text-[#A9CAE7]">{corporateOffice} <br/> {corporateOfficeemail}</p>
            </div>

            {/* India Office */}
            <div className="p-4  mr-[70px]">
              <h3 className="text-xl font-semibold mb-4">India Office</h3>
              <p className="text-left text-sm text-[#A9CAE7]">{indiaOffice}</p>
              <p className="text-left text-sm text-[#A9CAE7] mt-2">{indinofficeemail}</p>
            </div>
  {/* Connect with Us */}
            <div className="p-4 md:ml-10 ">
              <h3 className="text-xl font-semibold mb-4">Connect with Us</h3>
              <div className="flex justify-left space-x-4 mt-2 text-blue-600">
                {/* <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter className='bg-white p-1 cursor-pointer shadow-lg w-[24px] h-[24px] rounded-lg text-red-600' />
                </a> */}
                <a href='https://www.instagram.com/lirisoft_it?igsh=bWNxMnV1MTZlMmdq' target="_blank" rel="noopener noreferrer">
                  <FaInstagram className='bg-white p-1 cursor-pointer shadow-lg w-[24px] h-[24px] rounded-lg text-red-800' />
                </a>
                <a href='https://www.linkedin.com/company/79745135' target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn className='bg-blue-800 p-1 cursor-pointer shadow-lg w-[24px] h-[24px] rounded-lg text-white' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
