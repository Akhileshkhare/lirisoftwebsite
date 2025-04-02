import React, { useState, useEffect } from 'react';
import { FaCheck } from "react-icons/fa";

export default function Section2() {
  const [sectionData, setSectionData] = useState({
    heading: "",
    description: "",
    listItems: []
  });

  useEffect(() => {
    fetch("http://localhost:3005/api/homepage")
      .then((response) => response.json())
      .then((data) => setSectionData(data.About.section2))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  const { heading, description, listItems } = sectionData;

  return (
    <section className="w-full px-4 md:px-0">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center md:pt-24 pt-16 pb-4">
        <div className='text-left w-full'>
          <h1 className='text-3xl font-bold pt-4'>{heading}</h1>
        </div>
        <div className='w-full pt-6 text-right md:pl-[300px] pl-[10px]'>
          <p className='text-left mb-4'>{description}</p>
          <ul className="space-y-4 text-left">
            {listItems.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <FaCheck className="text-white bg-[#043A53] rounded-full p-1 mt-1 mr-1" size={18} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
