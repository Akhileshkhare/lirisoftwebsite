import React from 'react'

import { SectionProps } from '../home/Section1';

export const Section5: React.FC<SectionProps> = ({ data }) => {   
  const sectionData:any=data || null;
  return (
    <section className="bg-gray-100 py-10 text-center w-full ">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
      Get Started Today
    </h2>
    <p className="text-gray-600 mb-5">
      Contact us to learn more about our product and how it can benefit
      your business.
    </p>
    <button
      className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700"
      onClick={() => window.location.href = '/contact'}
    >
      Contact Us
    </button>
  </section>  )
}
