import React from 'react'
import { FaCloud, FaChartBar, FaCogs, FaHeadset } from "react-icons/fa";

export default function Section3() {
  return (
    <section className="w-full  bg-gray-100">
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-10 md:gap-6 relative py-20">
      <h2 className="text-4xl font-semibold text-gray-800 mb-4 text-gray-800">
        Key <span className="font-bold text-[#043A53]">Features</span>
      </h2>
      <div className="w-full flex flex-col md:flex-row items-center gap-10 ">
        {/* First Column */}
        <div className="p-5  flex-1 ">
          <div className="grid grid-cols-1 gap-1 space-y-2 md:space-y-2">
            <div className="bg-white shadow-lg px-4 py-5 flex items-center">
              <FaCloud className="w-12 h-12 text-blue-600 mr-4" />
              <p className="text-gray-600 text-xl">
                Cloud-based infrastructure for scalability and flexibility
              </p>
            </div>
            <div className="bg-white shadow-lg px-4 py-5 flex items-center">
              <FaChartBar className="w-12 h-12 text-blue-600 mr-4" />
              <p className="text-gray-600 text-xl">
                Advanced analytics and reporting tools
              </p>
            </div>
            <div className="bg-white shadow-lg px-4 py-5 flex items-center">
              <FaCogs className="w-12 h-12 text-blue-600 mr-4" />
              <p className="text-gray-600 text-xl">
                Seamless integration with existing systems
              </p>
            </div>
            <div className="bg-white shadow-lg px-4 py-5 flex items-center">
              <FaHeadset className="w-12 h-12 text-blue-600 mr-4" />
              <p className="text-gray-600 text-xl">
                24/7 customer support
              </p>
            </div>
          </div>
        </div>
        {/* Second Column */}
        <div className="flex-1">
          <img
            src="/Rectangle8.png"
            alt="Key Features Illustration"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
  )
}
