import React from "react";
import { Link } from "react-router-dom"; // Import Link
import Footer from "../Footer";

export default function CaseStudies() {
  return (
    <>
      <section className="w-full py-10 px-4 md:px-0 h-auto">
        {/* Background Div */}
        <div className="w-full h-[480px] mt-[90px] bg-[#F2F5F6] absolute top-0 left-0"></div>
        <div className="w-full max-w-6xl bg-white mx-auto flex flex-col items-center gap-10 md:gap-10 relative mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center mt-10 md:mt-[60px] w-full px-4 md:px-20">
            <h2 className="text-3xl md:text-5xl font-semibold text-left text-gray-900">
              Read our <span className="text-[#043A53]">Case Studies</span>
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-start w-full gap-6 px-4 md:px-20">
            {[1, 2, 3].map((item, index) => (
              <div
                key={index}
                className="flex flex-col bg-white shadow-sm hover:shadow-lg transition-shadow rounded-xl w-full max-w-[358px] h-auto"
              >
                {/* Image Part */}
                <div className="w-full h-[200px] md:h-[257px]">
                  <img
                    src={`/backimage4${item}.jpeg`}
                    alt="Feature Icon"
                    className="w-full h-full object-cover rounded-tl-xl rounded-tr-xl"
                  />
                </div>

                {/* Text Part */}
                <div className="text-left p-4 md:p-6 space-y-3">
                  <h3 className="text-gray-900 text-sm md:text-md">
                    <span className="font-bold">
                      {index === 0
                        ? "23 Sep 2024"
                        : index === 1
                        ? "17 Sep 2024"
                        : index === 2
                        ? "15 Aug 2024"
                        : "10 Jul 2024"}
                      ,{" "}
                    </span>
                    {index === 0
                      ? "by Amanda Hugh"
                      : index === 1
                      ? "by Sofia Kent"
                      : index === 2
                      ? "by Jason Bone"
                      : "by Author Name"}
                  </h3>
                  <p className="text-gray-900 text-lg md:text-xl font-semibold">
                    {index === 0
                      ? "What Makes an Authentic Employee Profile?"
                      : index === 1
                      ? "Why Does It Matter to be Authentic Employee?"
                      : index === 2
                      ? "What Makes an Authentic Employee Profile?"
                      : "Case Study Title"}
                  </p>
                  <p className="text-gray-900 text-sm md:text-md">
                    I'm totally unconvinced that two people can find a person they haven't known previously...
                  </p>
                  <Link to={`/case-studies/${item}`} className="flex flex-row font-semibold items-center cursor-pointer text-md">
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
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-start w-full gap-6 px-4 md:px-20">
            {[1, 2, 3].map((item, index) => (
              <div
                key={index}
                className="flex flex-col bg-white shadow-sm hover:shadow-lg transition-shadow rounded-xl w-full max-w-[358px] h-auto"
              >
                {/* Image Part */}
                <div className="w-full h-[200px] md:h-[257px]">
                  <img
                    src={`/backimage4${item}.jpeg`}
                    alt="Feature Icon"
                    className="w-full h-full object-cover rounded-tl-xl rounded-tr-xl"
                  />
                </div>

                {/* Text Part */}
                <div className="text-left p-4 md:p-6 space-y-3">
                  <h3 className="text-gray-900 text-sm md:text-md">
                    <span className="font-bold">
                      {index === 0
                        ? "23 Sep 2024"
                        : index === 1
                        ? "17 Sep 2024"
                        : index === 2
                        ? "15 Aug 2024"
                        : "10 Jul 2024"}
                      ,{" "}
                    </span>
                    {index === 0
                      ? "by Amanda Hugh"
                      : index === 1
                      ? "by Sofia Kent"
                      : index === 2
                      ? "by Jason Bone"
                      : "by Author Name"}
                  </h3>
                  <p className="text-gray-900 text-lg md:text-xl font-semibold">
                    {index === 0
                      ? "What Makes an Authentic Employee Profile?"
                      : index === 1
                      ? "Why Does It Matter to be Authentic Employee?"
                      : index === 2
                      ? "What Makes an Authentic Employee Profile?"
                      : "Case Study Title"}
                  </p>
                  <p className="text-gray-900 text-sm md:text-md">
                    I'm totally unconvinced that two people can find a person they haven't known previously...
                  </p>
                  <Link to={`/case-studies/${item}`} className="flex flex-row font-semibold items-center cursor-pointer text-md">
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
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-start w-full gap-6 px-4 md:px-20">
            {[1, 2, 3].map((item, index) => (
              <div
                key={index}
                className="flex flex-col bg-white shadow-sm hover:shadow-lg transition-shadow rounded-xl w-full max-w-[358px] h-auto"
              >
                {/* Image Part */}
                <div className="w-full h-[200px] md:h-[257px]">
                  <img
                    src={`/backimage4${item}.jpeg`}
                    alt="Feature Icon"
                    className="w-full h-full object-cover rounded-tl-xl rounded-tr-xl"
                  />
                </div>

                {/* Text Part */}
                <div className="text-left p-4 md:p-6 space-y-3">
                  <h3 className="text-gray-900 text-sm md:text-md">
                    <span className="font-bold">
                      {index === 0
                        ? "23 Sep 2024"
                        : index === 1
                        ? "17 Sep 2024"
                        : index === 2
                        ? "15 Aug 2024"
                        : "10 Jul 2024"}
                      ,{" "}
                    </span>
                    {index === 0
                      ? "by Amanda Hugh"
                      : index === 1
                      ? "by Sofia Kent"
                      : index === 2
                      ? "by Jason Bone"
                      : "by Author Name"}
                  </h3>
                  <p className="text-gray-900 text-lg md:text-xl font-semibold">
                    {index === 0
                      ? "What Makes an Authentic Employee Profile?"
                      : index === 1
                      ? "Why Does It Matter to be Authentic Employee?"
                      : index === 2
                      ? "What Makes an Authentic Employee Profile?"
                      : "Case Study Title"}
                  </p>
                  <p className="text-gray-900 text-sm md:text-md">
                    I'm totally unconvinced that two people can find a person they haven't known previously...
                  </p>
                  <Link to={`/case-studies/${item}`} className="flex flex-row font-semibold items-center cursor-pointer text-md">
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
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
