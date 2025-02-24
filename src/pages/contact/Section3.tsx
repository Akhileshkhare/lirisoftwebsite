import React from 'react'
import { FaPlay } from 'react-icons/fa'

export default function Section3() {
  return (
    <section className="w-full px-4 md:px-0 ">
         <div className="w-full mx-auto flex flex-col items-center">
         <div className="max-w-4xl mx-auto p-6 text-center">
          <h1 className='text-5xl font-bold pt-[100px] leading-normal'>Do you have <span className='text-[#043A53]'>Questions?</span> </h1>
          <h2 className='pt-8 text-md'>We have answers (well, most of the times!)
            </h2>
            <h2 className='px-6 text-left md:text-center md:px-12 py-4 text-md'>
          Below you'll find answer to the most common questions you may have on AdEspresso & Online Advertising. Also, please feel free to check out our. If you still can't find the answer you're looking for, just Contact us!</h2>
  
    </div>
           
    <div className="text-center pt-[40px]">
        
        <img src="./Group41.png" className='w-[336px] h-auto' alt="Contact Us" />
        
              </div>

              <div className="max-w-3xl mx-auto px-6 py-12 ">
     
      
      <ul className="space-y-4">
        {/* Question 1 */}
        <li className="flex items-start space-x-3 p-2 ">
          <FaPlay className="text-gray-600 p-[7px] rounded-full bg-[#D9D9D9] text-xl mt-1" />
          <span className="text-gray-700 font-medium">Do I need a website in order to run online marketing?</span>
        </li>

        {/* Question 2 */}
        <li className="flex items-start space-x-3 p-2 ">
          <FaPlay className="text-gray-600 p-[7px] rounded-full bg-[#D9D9D9] text-xl mt-1" />
          <span className="text-gray-700 font-medium">How will Lirisoft help me?</span>
        </li>

        {/* Question 3 */}
        <li className="flex items-start space-x-3 p-2 ">
          <FaPlay className="text-gray-600 p-[7px] rounded-full bg-[#D9D9D9] text-xl mt-1" />
          <span className="text-gray-700 font-medium">What services do you offer?</span>
        </li>

        {/* Question 4 */}
        <li className="flex items-start space-x-3 p-2 ">
          <FaPlay className="text-gray-600 p-[7px] rounded-full bg-[#D9D9D9] text-xl mt-1" />
          <span className="text-gray-700 font-medium">How do I know which subscription is best for me?</span>
        </li>
      </ul>
    </div>
           </div>
           </section>
  )
}
