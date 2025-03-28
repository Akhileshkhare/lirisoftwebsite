import React from 'react'
import servicebackimage from '../../assets/serviceback1.png';

export default function Section1() {
  return (
    <section
      className="w-full bg-cover bg-center text-white text-center flex items-center justify-center flex-col h-auto md:h-[786px]"
      style={{ backgroundImage: `url(${servicebackimage})`,backgroundSize: 'contain',backgroundRepeat: 'no-repeat' }}
    >
      <div
        className="absolute top-1/2 left-[6%] transform -translate-y-1/2 bg-white bg-opacity-50 text-[#043A53] p-4 rounded-md"
      >
        <h1 className="text-2xl md:text-4xl leading-loose space-y-1">
          <p>We help <span className='font-bold'>companies</span></p>
          <p>turn their <span className='font-bold'>ideas</span></p>
          <p>into <span className='font-bold'>products</span></p>
        </h1>
      </div>
    </section>
  );
}
