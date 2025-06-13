import React from 'react'
import { useNavigate } from "react-router-dom";

import { SectionProps } from '../home/Section1';
import ReusableButton from '../../components/ReusableButton';

export const Section5: React.FC<SectionProps> = () => {   
    const navigate = useNavigate(); 
  
  return (
    <section className="bg-[#043A53] py-10 text-center w-full ">
    <h2 className="text-3xl text-white font-semibold text-gray-800 mb-4">
      Get Started Today
    </h2>
    <p className="text-gray-50 text-[16px] mb-5">
      Contact us to learn more about our product and how it can benefit
      your business.
    </p>
    <div className='flex justify-center items-center'>
      <ReusableButton
        text="Contact Us"
        widthClass="text-[16px] w-[160px] text-gray-800"
        onClick={() => navigate('/contact')}
        showArrow={false}
      />
    </div>
   
   
  </section>  )
}
