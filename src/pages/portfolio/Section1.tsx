import React from 'react'

export default function Section1() {

  return (
    <section className="w-full bg-[#043A53] text-white text-center flex items-center justify-center flex-col h-auto md:h-[822px]">
      <h1 className='font-normal md:text-5xl text-4xl mt-20 md:mt-0'>We help <span className='font-bold'>companies</span> turn their</h1>
      <h1 className='font-normal md:text-5xl text-4xl my-4'><span className='font-bold'>ideas</span> ideas <span className='font-bold'>products</span></h1>
      <img
      src="/Videoplaceholder.png"
      alt="Portfoli Lirisoft"
      className="object-contain w-auto md:h-[603px] h-[403px] py-5 px-2 md:px-0 "
    />
      </section>
  )
}
