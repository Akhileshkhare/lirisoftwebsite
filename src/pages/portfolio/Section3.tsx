import React from 'react'

export default function Section3() {
  return (
    <section className="w-full py-10 px-4 md:px-0 h-auto">
    <div className="w-full max-w-7xl mx-auto flex  md:flex-row flex-col items-center  gap-10 md:gap-20">
    <div className="w-full md:w-1/2 pl-0  md:h-[800px] flex justify-center items-start ">
        <div className="w-full h-[391px] md:h-[662.27px]">
              <img
                src={`/Group138.png`}
                alt="Feature Icon"
                className="w-full h-full object-cover rounded-xl"
              />
        </div>
    </div>
    <div className="w-full md:w-1/2 pl-0 md:h-[800px] flex justify-center items-start flex-col">
  <p className="text-3xl md:text-[34px] font-normal text-left text-[#043A53] leading-snug md:leading-normal">
    Our <span className="font-bold">Expertise</span>, Your Success: Building a Path to <span className="font-bold">Excellence</span>
  </p>
  <p className="text-1xl md:text-[17px] font-semibold text-left mt-4 leading-relaxed md:leading-loose">
    For over half a decade, Lirisoft has been passionately engaged in offering all-inclusive IT solutions to clients from diverse industry verticals, empowering businesses to thrive in the digital era with confidence and innovation.
  </p>
</div>
    </div>
    </section>
  )
}
