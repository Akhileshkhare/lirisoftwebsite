import React from 'react'

export default function Section1() {

  return (
    <section className="w-full bg-[#043A53] text-white  flex items-center justify-center flex-col h-auto md:h-[906px]">
      <h1 className='font-bold text-4xl md:my-0 my-6'>What <span className='font-normal'>drives</span> us</h1>
      <img
      src="/Rectangle18.png"
      alt="About Lirisoft"
      className="md:object-cover object-contain w-auto md:h-[566px] h-[246px] py-6"
    />
      <h1 className='font-bold text-4xl md:my-0 my-8'><span className='font-normal'>defines</span> us</h1>
      </section>
  )
}
