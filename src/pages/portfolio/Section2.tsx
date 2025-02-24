import React from 'react'

export default function Section2() {
  return (
    <section className="w-full py-10 px-4 md:px-0 h-auto">
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-10 md:gap-20">
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 md:mt-[90px] w-full px-4 md:px-20">
        <h2 className="text-4xl md:text-5xl font-normal text-left text-[#043A53]">
        Take a look at some of <span className="text-[#043A53] font-bold">our work</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
          <div key={index} className="flex flex-col bg-white rounded-xl w-full h-auto">
            {/* Image Part */}
            <div className="w-full h-[200px] md:h-[257px]">
              <img
                src={`/Rectangle${item}.png`}
                alt="Feature Icon"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Text Part */}
            <div className="text-left p-4 space-y-3">
              <h3 className="text-gray-900 text-sm md:text-md mt-2">
                UX / Angular / B2C
              </h3>
              <p className="text-gray-900 text-lg md:text-xl font-semibold">
              Smart home app
              </p>
            
              <div className="flex flex-row font-semibold items-center justify-end cursor-pointer text-md text-blue-600">
                Read Story
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-3 w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5-5 5M18 12H6"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>  )
}
