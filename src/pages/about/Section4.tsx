import React from 'react'

export default function Section4() {
    const images = [
       {Image:"./Vector1.png",Text:"53+",Description:"Completed Projects"},
       {Image:"./Vector2.png",Text:"37M",Description:"Users Worldwide"},
       {Image:"./Vector3.png",Text:"4.3+",Description:"App Ratings"},
      ];
  return (
    <section className="w-full px-4 md:px-0 bg-[#D76CB9]">
    <div className="w-full max-w-4xl h-[408px]  items-center justify-center mx-auto flex flex-col items-center ">
    
    
     <div className="grid grid-cols-3 gap-6 p-0">
 {images.map((value, index) => (
   <div key={index} className="w-[280px] h-[180px] gap-2 flex flex-col items-center justify-center ">
     <img src={value.Image} alt={`Image ${index + 1}`} className="w-[84px] h-[84px] object-contain rounded-md" />
     <h1 className='text-4xl text-white font-bold'>{value.Text}</h1>
     <p className='text-sm text-white font-semibold'>{value.Description}</p>
   </div>
 ))}
</div>
   
      </div>
      </section>
  )
}
