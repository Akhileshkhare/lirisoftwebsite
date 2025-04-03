import React, { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';

export default function Section3() {
  const [sectionData, setSectionData] = useState({
    title1: "",
    highlight1: "",
    title2: "",
    imageSrc: "",
    imageAlt: "",
    highlight2: "",
    title3: "",
    questions: []
  });

  useEffect(() => {
    fetch("https://liriapis.onrender.com/api/homepage")
      .then((response) => response.json())
      .then((data) => setSectionData(data.Contact.section3))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  const { title1, highlight1, title2, imageSrc, imageAlt, highlight2, title3, questions } = sectionData;

  return (
    <section className="w-full px-4 md:px-0 ">
      <div className="w-full mx-auto flex flex-col items-center">
        <div className="max-w-4xl mx-auto p-6 text-center">
          <h1 className='text-5xl font-bold pt-[100px] leading-normal'>
            {title1} <span className='text-[#043A53]'>{highlight1}</span>
          </h1>
          <h2 className='pt-8 text-md'>{title2}</h2>
          <h2 className='px-6 text-left md:text-center md:px-12 py-4 text-md'>
            {highlight2}
          </h2>
        </div>

        <div className="text-center pt-[40px]">
          <img src={imageSrc} className='w-[336px] h-auto' alt={imageAlt} />
        </div>

        <div className="max-w-3xl mx-auto px-6 py-12 ">
          <ul className="space-y-4">
            {questions.map((question, index) => (
              <li key={index} className="flex items-start space-x-3 p-2 ">
                <FaPlay className="text-gray-600 p-[7px] rounded-full bg-[#D9D9D9] text-xl mt-1" />
                <span className="text-gray-700 font-medium">{question}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
