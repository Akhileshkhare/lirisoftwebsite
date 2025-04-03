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
      .then((data) => setSectionData(data.Service.section1))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  const { title1, highlight1, title2, imageSrc, imageAlt, highlight2, title3 } = sectionData;

  return (
    <section
      className="w-full bg-cover bg-center text-white flex items-left justify-center flex-col h-[200px] md:h-[786px]"
      style={{ backgroundImage: `url(${imageSrc})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
    >
      <div
        className="ml-20 w-[360px] text-center left-[6%] bg-white bg-opacity-50 text-[#043A53] p-1 md:p-4 rounded-md"
      >
        <div className="text-xl md:text-4xl md:leading-loose space-y-0 md:space-y-1 p">
          <p>{title1} <span className='font-bold'>{highlight1}</span></p>
          <p>{title2} <span className='font-bold'>{highlight2}</span></p>
          <p>{title3}</p>
        </div>
      </div>
    </section>
  );
}
