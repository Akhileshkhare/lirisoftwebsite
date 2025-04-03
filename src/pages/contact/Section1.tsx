import React, { useState, useEffect } from 'react';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function Section1() {
  const [sectionData, setSectionData] = useState({
    title1: "",
    highlight1: "",
    contactSupport: "",
    corporateOffice: "",
    corporateOfficeemail: "",
    indiaOffice: "",
    indinofficeemail: "",
    socialLinks: {
      twitter: "",
      instagram: "",
      linkedin: ""
    }
  });

  useEffect(() => {
    fetch("https://liriapis.onrender.com/api/homepage")
      .then((response) => response.json())
      .then((data) => setSectionData(data.Contact.section1))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  const { title1, highlight1, contactSupport, corporateOffice,corporateOfficeemail, indiaOffice,indinofficeemail, socialLinks } = sectionData;

  return (
    <section className="w-full px-4 md:px-0 bg-[#043A53] h-[900px] md:h-[880px]">
      <div className="w-full mx-auto flex flex-col items-center">
        <div className='text-center text-white w-full'>
          <h1 className='text-[38px] md:text-5xl font-bold pt-[80px] md:pt-[200px]'>{title1}</h1>
          <h2 className='text-[#97F03F] pt-8 text-[18px]'>{highlight1}</h2>
        </div>
        <div className="max-w-6xl mx-auto p-6 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left pt-[20px] md:pt-[180px]">
            
            {/* Contact Support */}
            <div className="p-4 ">
              <h3 className="text-xl font-semibold mb-4">Contact Support</h3>
              <p className="text-left text-sm text-[#A9CAE7]">{contactSupport}</p>
            </div>

            {/* Connect with Us */}
            <div className="p-4 ">
              <h3 className="text-xl font-semibold mb-4">Connect with Us</h3>
              <div className="flex justify-left space-x-4 mt-2 text-blue-600">
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter className='bg-white p-1 cursor-pointer shadow-lg w-[24px] h-[24px] rounded-lg text-red-600' />
                </a>
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram className='bg-white p-1 cursor-pointer shadow-lg w-[24px] h-[24px] rounded-lg text-red-800' />
                </a>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn className='bg-blue-800 p-1 cursor-pointer shadow-lg w-[24px] h-[24px] rounded-lg text-white' />
                </a>
              </div>
            </div>

            {/* Corporate Office */}
            <div className="p-4 ">
              <h3 className="text-xl font-semibold mb-4">Corporate Office</h3>
              <p className="text-left text-sm text-[#A9CAE7]">{corporateOffice} <br/> {corporateOfficeemail}</p>
            </div>

            {/* India Office */}
            <div className="p-4 ">
              <h3 className="text-xl font-semibold mb-4">India Office</h3>
              <p className="text-left text-sm text-[#A9CAE7]">{indiaOffice}</p>
              <p className="text-left text-sm text-[#A9CAE7] mt-2">{indinofficeemail}</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
