import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SectionProps } from "./Section1";

export const Section6: React.FC<SectionProps> = ({ data }) => { 
  interface Section6Data {
    heading: {
      title: string;
      highlight: string;
    };
    caseStudies: {
      id: string;
      image: string;
      date: string;
      author: string;
      title: string;
      description: string;
    }[];
  }

  const sectionData:Section6Data=data || null;



  if (!sectionData) return null;

  return (
    <section className="w-full py-10 px-4 md:px-0 h-auto">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-10 md:gap-20">
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 md:mt-[90px] w-full px-4 md:px-20">
          <h2 className="text-3xl md:text-6xl font-semibold text-left text-gray-900">
            {sectionData.heading.title} <span className="text-[#043A53]">{sectionData.heading.highlight}</span>
          </h2>
          <Link
            to="/case-studies"
            className="flex flex-row font-semibold items-center cursor-pointer text-lg"
          >
            See All
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
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-start w-full gap-6 px-4 md:px-20">
          {sectionData.caseStudies.map((study) => (
            <div
              key={study.id}
              className="flex flex-col bg-white shadow-md rounded-xl w-full max-w-[358px] h-auto"
            >
              {/* Image Part */}
              <div className="w-full h-[200px] md:h-[257px]">
                <img
                  src={study.image}
                  alt="Feature Icon"
                  className="w-full h-full object-cover rounded-tl-xl rounded-tr-xl"
                />
              </div>

              {/* Text Part */}
              <div className="text-left p-4 md:p-6 space-y-3">
                <h3 className="text-gray-900 text-sm md:text-md">
                  <span className="font-bold">{study.date}, </span>
                  {study.author}
                </h3>
                <p className="text-gray-900 text-lg md:text-xl font-semibold">
                  {study.title}
                </p>
                <p className="text-gray-900 text-sm md:text-md">
                  {study.description}
                </p>
                <Link
                  to={`/case-studies/${study.id}`}
                  className="flex flex-row font-semibold items-center cursor-pointer text-md"
                >
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
  );
}
