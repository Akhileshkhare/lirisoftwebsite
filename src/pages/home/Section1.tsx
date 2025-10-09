import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReusableButton from "../../components/ReusableButton";

export interface SectionProps {
  data: any; // Replace 'any' with the specific type of data if known
  data1?:any;
}

const Section1: React.FC<SectionProps> = ({ data }) => {
  const navigate = useNavigate();

  const { title, description, buttonText, buttonIcon, imageSrc } = data || {};

  return (
    <section className="w-full bg-gray-100 dark:bg-gray-900 md:py-12 py-0 transition duration-300">
  <div className="md:w-11/12 w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-0 md:px-10 h-auto md:h-[800px]">
        {/* Left Part */}
        <div className="w-full md:py-0 py-10 md:w-1/2 px-4 md:px-0  md:pl-20 md:h-[800px] flex justify-center items-start flex-col ">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#043A53] mb-6">
            {title}
          </h2>
          <p className="text-[18px] text-[#6F8BA4] mb-8">
            {description}
          </p>
         <div className="w-full item-start">
           <ReusableButton
             text={buttonText}
             widthClass="px-6"
             onClick={() => navigate('/contact')}
             showArrow={true}
           />
         </div>
        </div>

        {/* Right Part (Rectangles and Owl Image Section) */}
        <div className="relative md:h-[800px] h-[585px] w-full md:w-1/2 flex justify-center items-center overflow-hidden">
          {/* Rectangle 1 */}
          <div className="w-[90px] h-[166px] absolute  left-[42px] rounded-[180.5px] border border-[#0B9DE0] opacity-100 z-[12] 
            sm:w-[80px] sm:h-[150px] sm:top-[300px] sm:left-[20px]
            md:w-[100px] md:h-[183px] md:top-[336px] md:left-[35px] top-[213px]">
          </div>

          {/* Rectangle 2 */}
          <div className="w-[130px] h-[245px] absolute  left-[58px] rounded-[180.5px] bg-[#043A53] opacity-100 z-[11] 
            sm:w-[120px] sm:h-[220px] sm:top-[400px] sm:left-[30px]
            md:w-[159px] md:h-[293px] md:top-[450px] md:left-[58px] top-[312px] ">
          </div>

          {/* Rectangle 3 (Image) */}
          <div className="md:w-[280px] md:h-[668px] w-[240px] h-[480px] absolute top-[75px] left-[119px] rounded-[180.5px] z-10 
            sm:w-[280px] sm:h-[500px] sm:top-[50px] sm:left-[80px]
            md:w-[361px] md:h-[668px] md:top-[75px] md:left-[119px]">
            <img
              src={imageSrc}
              alt="Rectangle Image"
              className="object-cover w-full h-full rounded-[180.5px]"
            />
          </div>

          {/* Rectangle 4 */}
          <div className="w-[239px] h-[480px] absolute top-[93px] left-[182px] rounded-[180.5px] bg-[#043A5333] opacity-100 z-9 
            sm:w-[290px] sm:h-[530px] sm:top-[70px] sm:left-[100px]
            md:w-[373px] md:h-[687px] md:top-[93px] md:left-[197px]">
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;