import React from 'react'
import { SectionProps } from '../home/Section1';

export const Section1: React.FC<SectionProps> = ({ data }) => {   
  const sectionData:any=data || null;
  return (
    <section
    className="w-full bg-gray-100 py-10 text-center relative"
    style={{
      backgroundImage: "url('/login.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "840px",
    }}
  >
    <div className="absolute top-1/2 left-20  transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-center p-5 rounded-lg">
      <h1 className="text-4xl font-bold">Our IT Solutions</h1>
      <p className="text-lg mt-2">
        Innovative technology solutions to drive your business forward.
      </p>
    </div>
  </section>
  )
}
