import React from 'react'
import servicebackimage from '../../assets/serviceback1.png';

export default function Section1() {
  return (
    <section
      className="w-full bg-cover bg-center text-white  flex items-left justify-center flex-col h-[200px] md:h-[786px]"
      style={{ backgroundImage: `url(${servicebackimage})`,backgroundSize: 'contain',backgroundRepeat: 'no-repeat' }}
    >
      <div
        className="ml-20 w-[360px] text-center left-[6%]  bg-white bg-opacity-50 text-[#043A53] p-1 md:p-4 rounded-md"
      >
        <div className="text-xl md:text-4xl md:leading-loose space-y-0 md:space-y-1 p">
          <p>We help <span className='font-bold'>companies</span></p>
          <p>turn their <span className='font-bold'>ideas</span></p>
          <p>into <span className='font-bold'>products</span></p>
        </div>
      </div>
    </section>
  );
}
