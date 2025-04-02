import React, { useState, useEffect } from 'react';

export default function Section1() {
  const [sectionData, setSectionData] = useState({
    title1: "",
    highlight1: "",
    title2: "",
    imageSrc: "",
    imageAlt: "",
    highlight2: "",
    title3: ""
  });

  useEffect(() => {
    fetch("http://localhost:3005/api/homepage")
      .then((response) => response.json())
      .then((data) => setSectionData(data.About.section1))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  const { title1, highlight1, title2, imageSrc, imageAlt, highlight2, title3 } = sectionData;

  return (
    <section className="w-full bg-[#043A53] text-white  flex items-center justify-center flex-col h-auto md:h-[906px]">
      <h1 className='font-bold text-4xl md:my-0 my-6'>
        {title1} <span className='font-normal'>{highlight1}</span> {title2}
      </h1>
      <img
        src={imageSrc}
        alt={imageAlt}
        className="md:object-cover object-contain w-auto md:h-[566px] h-[246px] py-6"
      />
      <h1 className='font-bold text-4xl md:my-0 my-8'>
        <span className='font-normal'>{highlight2}</span> {title3}
      </h1>
    </section>
  );
}
