import React, { useState, useEffect } from 'react';

export default function Section1() {
  const [sectionData, setSectionData] = useState({
    title1: "",
    highlight1: "",
    title2: "",
    imageSrc: "",
    imageAlt: "",
    highlight2: "",
    highlight3: "",
    title3: ""
  });

  useEffect(() => {
    fetch("https://liriapis.onrender.com/api/homepage")
      .then((response) => response.json())
      .then((data) => setSectionData(data.Portfolio.section1))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  const { title1, highlight1, title2, imageSrc, imageAlt, highlight2,highlight3, title3 } = sectionData;

  return (
    <section className="w-full bg-[#043A53] text-white text-center flex items-center justify-center flex-col h-auto md:h-[956px]">
      <h1 className='font-normal md:text-5xl text-3xl mt-20 px-10 md:px-0 md:mt-5'>
        {title1} <span className='font-bold'>{highlight1}</span> {title2} 
      </h1>
      <h1 className='font-normal md:text-5xl text-3xl my-4 md:my-8'>
        <span className='font-bold'>{highlight2}</span> {title3} <span className='font-bold'>{highlight3}</span>
      </h1>
      <img
        src={imageSrc}
        alt={imageAlt}
        className="object-cover w-auto md:h-[603px] h-[403px] rounded-[36px] px-2 md:px-0"
      />
    </section>
  );
}
