import React from 'react';
import CustomSlider from './CustomSlider';

export default function Section5() {
  return (
    <section className='w-full flex flex-col items-center justify-between bg-gray-100 py-10 px-4 md:px-0 h-auto md:h-[607px]'>
      <div className="w-full max-w-5xl mx-auto text-center pt-10">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 md:mb-[90px]">
          Trust is at the Core of Everything We Do.
        </h2>
        <div className="w-full flex justify-center">
          <CustomSlider />
        </div>
      </div>
    </section>
  );
}
