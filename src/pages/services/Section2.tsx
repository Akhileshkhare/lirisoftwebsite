import React from 'react'
import brainCircuit from '../../assets/brain-circuit.png';
import trending from '../../assets/trending-up-down.png';
import atom from '../../assets/atom.png';
import cable from '../../assets/cable.png';
import Database from '../../assets/Database.png';

export default function Section2() {
  return (
    <section className="w-full py-20 px-4 md:px-0 h-auto bg-gray-100">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-10 md:gap-6 relative py-10">
        <div className="w-full  pl-0 flex justify-center items-start flex-col">
          <p className="text-3xl md:text-[34px] font-normal text-left text-[#043A53] leading-snug md:leading-normal">
            Consulting Services <span className="font-bold">we offer</span>
          </p>
          <p className="text-1xl md:text-[15px] text-[#12141D]  text-left mt-4 leading-relaxed ">
            Invent, build, integrate, scale and upgrade your applications with Lirisoft! We have been harnessing digital technologies for the benefit of Fortune 500 businesses, mid and large enterprises, and startups across the variety of industries. We help you to build high-quality software solutions and products as well as deliver a wide range of related professional services.
          </p>
        </div>
        <div className="w-full pl-0 md:h-auto flex flex-col md:flex-row justify-center items-stretch pt-0 gap-3">
          {/* Left Column */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 flex-1">
            {[
              { name: 'Generative AI Services', icon: brainCircuit },
              { name: 'Data Science Consulting', icon: trending },
              { name: 'Solution Development And Evolution', icon: atom },
              { name: 'End-To-End Solution Development', icon: cable },
              { name: 'Data Science Research', icon: Database },
            ].map((service, index) => (
              <div key={index} className="flex items-center gap-4 bg-white space-y-1 p-4   hover:shadow-lg transition duration-300 ease-in-out">
                <img
                  src={service.icon}
                  alt="icon"
                  className="w-4 h-4"
                />
                <p className="text-md text-[#043A53]">{service.name}</p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 flex flex-col items-start gap-4 bg-white p-6 flex-1">
            <img
              src={brainCircuit} // Replace with the actual path to the right image
              alt="Generative AI Services"
              className="w-16 h-auto"
            />
            <h3 className="text-xl md:text-[20px] font-bold text-[#043A53]">
              Generative AI Services
            </h3>
            <p className="text-md md:text-[15px] text-[#12141D] leading-relaxed">
              Invent, build, integrate, scale and upgrade your applications with
              Lirisoft! We have been harnessing digital technologies for the benefit of
              Fortune 500 businesses, mid and large enterprises, and startups across
              the variety of industries. We help you to build high-quality software
              solutions and products as well as deliver a wide range of related
              professional services.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
