import React from 'react'

export default function Section3() {
    const images = [
        "./image1.png",
        "./image2.png",
        "./image3.png",
        "./image4.png",
        "./image5.png",
        "./image6.png",
      ];
  return (
    <section className="w-full px-4 md:px-0">
         <div className="w-full max-w-4xl mx-auto flex flex-col items-center py-10 md:py-20">
          <div className='text-left w-full'>
          <h1 className='text-3xl font-bold pt-4'>Our Current Partners</h1>
          </div>
          <div className='w-full  pt-12'>
          <div className="grid grid-cols-3 gap-6 p-0">
      {images.map((src, index) => (
        <div key={index} className="w-[280px] h-[180px] flex items-center justify-center bg-white border border-gray">
          <img src={src} alt={`Image ${index + 1}`} className="w-[200px] h-[150px] object-contain rounded-md" />
        </div>
      ))}
    </div>
          </div>
           </div>
           </section>
  )
}
