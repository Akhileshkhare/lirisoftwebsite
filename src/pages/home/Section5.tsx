import React, { useEffect, useState } from 'react';
import CustomSlider from './CustomSlider';

export default function Section5() {
  interface Section5Data {
    heading: string;
  }

  const [section5, setSection5] = useState<Section5Data | null>(null);

  useEffect(() => {
    fetch("http://localhost:3005/api/homepage")
      .then((response) => response.json())
      .then((data) => setSection5(data.Home.section5));
  }, []);

  if (!section5) return null;

  return (
    <section className='w-full flex flex-col items-center justify-between bg-gray-100 py-10 px-4 md:px-0 h-auto md:h-[607px]'>
      <div className="w-full max-w-5xl mx-auto text-center pt-10">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 md:mb-[90px]">
          {section5.heading}
        </h2>
        <div className="w-full flex justify-center">
          <CustomSlider />
        </div>
      </div>
    </section>
  );
}
