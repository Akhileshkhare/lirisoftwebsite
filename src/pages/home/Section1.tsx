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
    <section className="w-full bg-gray-100 dark:bg-gray-900 py-12 transition duration-300">
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-reverse {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(15px);
          }
        }

        @keyframes float-subtle {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 7s ease-in-out infinite;
        }

        .animate-float-subtle {
          animation: float-subtle 5s ease-in-out infinite;
        }
      `}</style>
      <div className="w-11/12 mx-auto flex flex-wrap items-center justify-center md:justify-between px-4 md:px-10 h-auto md:h-[800px]">
        {/* Left Part */}
        <div className="w-full md:w-1/2 pl-0 md:pl-20 md:h-[800px] flex justify-center items-start flex-col ">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-[18px] text-[#6F8BA4] mb-8">
            {description}
          </p>
         <ReusableButton
          text={buttonText}
          widthClass="px-6"
          onClick={() => navigate('/contact')}
          showArrow={true}
        />
        </div>

        {/* Right Part (Rectangles and Owl Image Section) */}
        <div className="relative h-[600px] md:h-[800px] w-full md:w-1/2 flex justify-center items-center">
          {/* Rectangle 1 */}
          <div className="w-[70px] h-[130px] absolute top-[280px] left-[10px] rounded-[180.5px] border border-[#043A53] opacity-100 z-[12] animate-float-subtle
            sm:w-[80px] sm:h-[150px] sm:top-[300px] sm:left-[15px]
            md:w-[100px] md:h-[183px] md:top-[336px] md:left-[35px]">
          </div>

          {/* Rectangle 2 */}
          <div className="w-[120px] h-[220px] absolute top-[360px] left-[20px] rounded-[180.5px] bg-[#043A53] opacity-100 z-[11] animate-float-reverse
            sm:w-[130px] sm:h-[240px] sm:top-[380px] sm:left-[25px]
            md:w-[159px] md:h-[293px] md:top-[450px] md:left-[58px]">
          </div>

          {/* Rectangle 3 (Image) */}
          <div className="w-[240px] h-[520px] absolute top-[40px] left-[80px] rounded-[180.5px] z-10 animate-float
            sm:w-[280px] sm:h-[540px] sm:top-[30px] sm:left-[90px]
            md:w-[361px] md:h-[668px] md:top-[75px] md:left-[119px]">
            <img
              src={imageSrc}
              alt="Rectangle Image"
              className="object-cover w-full h-full rounded-[180.5px]"
            />
          </div>

          {/* Rectangle 4 */}
          <div className="w-[260px] h-[540px] absolute top-[60px] left-[140px] rounded-[180.5px] bg-[#043A5333] opacity-100 z-9 animate-float-slow
            sm:w-[300px] sm:h-[560px] sm:top-[50px] sm:left-[160px]
            md:w-[373px] md:h-[687px] md:top-[93px] md:left-[197px]">
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;