import React from 'react'

export default function Section2() {
   const appSolutions = [
        { title: "Responsive App for Retail Store", description: "Responsive app for retail store" },
        { title: "SaaS-Based App for Enterprise", description: "SaaS based app for enterprise" },
        { title: "Solution for Healthcare Software", description: "Solution for health care software" },
        { title: "Smart Home App", description: "Smart home app" },
        { title: "Fitness App for Goal Setup", description: "Fitness app for goal setup" },
        { title: "Event Management App", description: "Event management app" },
        { title: "Supply Chain Management", description: "Supply chain management" },
        { title: "Financial Management App", description: "Financial management app" },
        { title: "Social Networking App", description: "Social networking app" }
      ];
  return (
    <section className="w-full py-10 px-4 md:px-0 h-auto">
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-10 md:gap-20">
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 md:mt-[90px] w-full px-4 md:px-20">
        <h2 className="text-3xl md:text-6xl font-normal md:text-left text-center text-[#043A53]">
        Take a look at some of <span className="text-[#043A53] font-bold">our work</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {appSolutions.map((item, index) => (
          <div key={index} className="flex flex-col bg-white rounded-xl w-full h-auto">
            {/* Image Part */}
            <div className="w-full h-[200px] md:h-[257px]">
              <img
                src={`/Rectangle${index+1}.png`}
                alt="Feature Icon"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Text Part */}
            <div className="text-left p-4 space-y-3 text-[#043A53]">
              <h3 className="text-sm md:text-md mt-0">
                UX / Angular / B2C
              </h3>
              <p className="text-lg md:text-xl font-semibold border-b border-b-gray-400 border-b-[1px] pb-[6px]">
             {item.title}
              </p>
            
              <div className="flex flex-row font-bold items-center justify-end cursor-pointer text-[12px] text-[#043A53]">
                READ MORE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 w-5 h-5 text-[#F0B73F]"
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
