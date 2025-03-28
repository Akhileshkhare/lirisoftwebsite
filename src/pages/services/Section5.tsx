import React from "react";
import slidersVertical from "../../assets/sliders-vertical.png";
import ratio from "../../assets/ratio.png";
import headset from "../../assets/headset.png";
import monitor from "../../assets/monitor-cog.png";
import check from "../../assets/check-check.png";
import chart from "../../assets/chart-column.png";
import lightbulb from "../../assets/lightbulb.png";
import gauge from "../../assets/gauge.png";
import Vector from "../../assets/Vector.png";


import { FaPlay } from "react-icons/fa";

export default function Section5() {
  return (
    <section className="w-full py-20 px-4 md:px-0 h-auto bg-white">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-10 md:gap-6 relative py-2">
        <div className="w-full  pl-0 flex justify-center items-start flex-col">
          <p className="text-3xl md:text-[34px] font-normal text-left text-[#043A53] leading-snug md:leading-normal">
          Industry Leading Managed <span className="font-bold">Services & Solutions </span>
          </p>
          <p className="text-1xl md:text-[15px] text-[#12141D]  text-left mt-4 leading-relaxed ">
          Our team can assist you in transforming your business through latest tech capabilities to stay ahead of the curve.
          </p>
        </div>
        <div className="w-full bg-white pt-10 md:h-auto flex flex-col md:flex-row items-center justify-center items-stretch">
          <div className="grid grid-cols-3 grid-rows-3 w-full">
            {/* Top-left */}
            <div className="flex flex-col items-center justify-center bg-white p-6 border-b border-r border-[#12141D]">
              <img src={slidersVertical} alt="Flexible Engagement Models" className="w-12 h-12 object-cover mb-2" />
              <p className="text-center text-sm text-gray-700">Flexible Engagement Models</p>
            </div>
            {/* Top-center */}
            <div className="flex flex-col items-center justify-center bg-white p-6 border-b border-r border-[#12141D]">
              <img src={ratio} alt="Mobile Development" className="w-12 h-12 object-cover mb-2" />
              <p className="text-center text-sm text-gray-700">Mobile Development</p>
            </div>
            {/* Top-right */}
            <div className="flex flex-col items-center justify-center bg-white p-6 border-b border-[#12141D]">
              <img src={headset} alt="Integrated & Dedicated Teams" className="w-12 h-12 object-cover mb-2" />
              <p className="text-center text-sm text-gray-700">Integrated & Dedicated Teams</p>
            </div>
            {/* Middle-left */}
            <div className="flex flex-col items-center justify-center bg-white p-6 border-b border-r border-[#12141D]">
              <img src={monitor} alt="Custom Software Development" className="w-12 h-12 object-cover mb-2" />
              <p className="text-center text-sm text-gray-700">Custom Software Development</p>
            </div>
            {/* Center */}
            <div className="flex flex-col items-center justify-center bg-white p-6 border-b border-r border-[#12141D]">
              <img src={check} alt="QA and Automation" className="w-12 h-12 object-cover mb-2" />
              <p className="text-center text-sm text-gray-700">QA and Automation</p>
            </div>
            {/* Middle-right */}
            <div className="flex flex-col items-center justify-center bg-white p-6 border-b border-[#12141D]">
              <img src={chart} alt="Analytics and Review" className="w-12 h-12 object-cover mb-2" />
              <p className="text-center text-sm text-gray-700">Analytics and Review</p>
            </div>
            {/* Bottom-left */}
            <div className="flex flex-col items-center justify-center bg-white p-6 border-r border-[#12141D]">
              <img src={lightbulb} alt="Product Innovation & Technology" className="w-12 h-12 object-cover mb-2" />
              <p className="text-center text-sm text-gray-700">Product Innovation & Technology</p>
            </div>
            {/* Bottom-center */}
            <div className="flex flex-col items-center justify-center bg-white p-6 border-r border-[#12141D]">
              <img src={gauge} alt="Enterprise Solutions" className="w-12 h-12 object-cover mb-2" />
              <p className="text-center text-sm text-gray-700">Enterprise Solutions</p>
            </div>
            {/* Bottom-right */}
            <div className="flex flex-col items-center justify-center bg-white p-6">
              <img src={Vector} alt="Cloud Backup Systems" className="w-12 h-12 object-cover mb-2" />
              <p className="text-center text-sm text-gray-700">Cloud Backup Systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
