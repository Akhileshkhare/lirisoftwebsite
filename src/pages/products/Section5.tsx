import React from 'react'

import { SectionProps } from '../home/Section1';
import ReusableButton from '../../components/ReusableButton';
import { useNavigate } from 'react-router-dom';

export const Section5: React.FC<SectionProps> = ({ data }) => {   
  const sectionData:any=data || null;
    const navigate = useNavigate();
  
  return (
    <section className=" bg-[#043A53] py-10 text-center item-center w-full ">
    <h2 className="text-3xl text-white font-semibold text-gray-800 mb-4">
      Get Started Today
    </h2>
    <p className="text-gray-50 text-[16px] mb-5 px-16 md:px-0">
      Contact us to learn more about our product and how it can benefit
      your business.
    </p>
    <div className="flex justify-center w-full">
      <ReusableButton    
        text="Contact Us"
        widthClass="px-6"
        onClick={() => navigate('/contact')}
        showArrow={true}
      />
    </div>
     

  </section>  )
}
