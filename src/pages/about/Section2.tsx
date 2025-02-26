import React from 'react'
import { FaCheck } from "react-icons/fa";

export default function Section2() {
  return (
    <section className="w-full px-4 md:px-0">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center md:pt-24 pt-16 pb-4">
       <div className='text-left w-full'>
       <h1 className='text-3xl font-bold pt-4'>About Us</h1>
       </div>
       <div className='w-full pt-6 text-right md:pl-[300px] pl-[10px]'>
            <p className='text-left mb-4'>Founded in 2017, Lirisoft has been a provider of IT consulting and software development services. We have helped non-IT organizations and software product companies improve business performance and quickly win new customers.</p>
            <ul className="space-y-4 text-left">
                <li className="flex items-start gap-2"><FaCheck className="text-white bg-[#043A53] rounded-full p-1 mt-1 mr-1" size={18} />Help you create and manage any process for your business needs.</li>
                <li className="flex items-start gap-2"><FaCheck className="text-white bg-[#043A53] rounded-full p-1 mt-1 mr-1" size={18} />Improve your business performance, optimize customer service, and tap into digital transformation.</li>
                <li className="flex items-start gap-2"><FaCheck className="text-white bg-[#043A53] rounded-full p-1 mt-1 mr-1" size={18} />Expertise in Messaging, VoIP, Automation, Internet of Things and Computer Vision technologies.</li>
            </ul>
       </div>
        </div>
        </section>
  )
}
