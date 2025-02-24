import React from 'react'

export default function Section5() {
    const images = [
       {Image:"./Vector4.png",Text:"53+",Description:"Completed Projects"},
       {Image:"./Vector5.png",Text:"37M",Description:"Users Worldwide"},
       {Image:"./Vector6.png",Text:"4.3+",Description:"App Ratings"},
      ];
  return (
    <section className="w-full px-4 md:px-0 bg-[#753BBD]">
    <div className="w-full max-w-6xl h-[408px]  items-center justify-center mx-auto flex flex-col items-center ">
    
    
     <div className="grid grid-cols-3 gap-16 p-0">
 {images.map((value, index) => (
   <div key={index} className="w-[322px] h-[260px] gap-2 flex flex-col items-center bg-white rounded-md justify-center ">
     <img src={value.Image} alt={`Image ${index + 1}`} className="w-[84px] h-[84px] object-contain rounded-md" />
     <h1 className='text-5xl text-[#753BBD] font-bold'>{value.Text}</h1>
     <p className='text-md  font-semibold'>{value.Description}</p>
   </div>
 ))}
</div>
   
      </div>
      </section>
  )
}
