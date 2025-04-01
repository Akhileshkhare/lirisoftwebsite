import React from 'react'

export default function Section1() {

  return (
    <section className="w-full bg-[#043A53] text-white text-center flex items-center justify-center flex-col h-auto md:h-[956px]">
      <h1 className='font-normal md:text-5xl text-3xl mt-20 px-10 md:px-0 md:mt-5'>We help <span className='font-bold'>companies</span> turn their</h1>
      <h1 className='font-normal md:text-5xl text-3xl my-4 md:my-8'><span className='font-bold'>ideas</span> into <span className='font-bold'>products</span></h1>
      <img
      src="/Videoplaceholder.png"
      alt="Portfoli Lirisoft"
      className="object-cover w-auto md:h-[603px] h-[403px] rounded-[36px]  px-2 md:px-0 "
    />
      </section>
  )
}
