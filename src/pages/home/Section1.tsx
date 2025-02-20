import React from "react";

export default function Section1() {
  return (
    <section className="w-full bg-gray-100 dark:bg-gray-900 py-12 transition duration-300">
      <div className="w-11/12 mx-auto flex flex-wrap items-center justify-center md:justify-between px-4 md:px-10 h-auto md:h-[800px]">
        {/* Left Part */}
        <div className="w-full md:w-1/2 pl-0 md:pl-20 md:h-[800px] flex justify-center items-start flex-col ">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Turning Vision Into Innovation
          </h2>
          <p className="text-md text-gray-500 mb-8">
            Fueled by a passion for digital transformation, we harness the
            latest technological breakthroughs to craft solutions that solve
            today’s challenges and future-proof your business. With deep insight
            into your industry and unique needs, we design smart, tailored
            strategies that drive growth and align with your long-term goals.
          </p>
          <button className="px-6 py-3 text-gray-900 font-semibold bg-yellow-400 rounded flex items-center space-x-2">
            <span>Request a Consultation</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
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
          </button>
        </div>

        {/* Right Part (Rectangles and Owl Image Section) */}
        <div className="relative h-[800px] w-full md:w-1/2  flex justify-center items-center overflow-hidden">
  {/* Rectangle 1 */}
  <div className="w-[100px] h-[183px] absolute top-[336px] left-[35px] rounded-[180.5px] border border-[#0B9DE0] opacity-100 z-[12] 
    sm:w-[80px] sm:h-[150px] sm:top-[300px] sm:left-[20px]
    md:w-[100px] md:h-[183px] md:top-[336px] md:left-[35px]">
  </div>

  {/* Rectangle 2 */}
  <div className="w-[159px] h-[293px] absolute top-[450px] left-[58px] rounded-[180.5px] bg-[#043A53] opacity-100 z-[11] 
    sm:w-[120px] sm:h-[220px] sm:top-[400px] sm:left-[30px]
    md:w-[159px] md:h-[293px] md:top-[450px] md:left-[58px]">
  </div>

  {/* Rectangle 3 (Image) */}
  <div className="w-[214px] h-[668px] absolute top-[75px] left-[119px] rounded-[180.5px] z-10 
    sm:w-[280px] sm:h-[500px] sm:top-[50px] sm:left-[80px]
    md:w-[361px] md:h-[668px] md:top-[75px] md:left-[119px]">
    <img
      src="/backimage1.jpeg"
      alt="Rectangle Image"
      className="object-cover w-full h-full rounded-[180.5px]"
    />
  </div>

  {/* Rectangle 4 */}
  <div className="w-0 h-[687px] absolute top-[93px] left-[197px] rounded-[180.5px] bg-[#043A5333] opacity-100 z-10 
    sm:w-[290px] sm:h-[530px] sm:top-[70px] sm:left-[100px]
    md:w-[373px] md:h-[687px] md:top-[93px] md:left-[197px]">
  </div>
</div>

      </div>
    </section>
  );
}
