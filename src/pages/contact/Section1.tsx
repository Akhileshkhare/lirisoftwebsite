import React from 'react'

export default function Section1() {
    const images = [
        "./image1.png",
        "./image2.png",
        "./image3.png",
        "./image4.png",
        "./image5.png",
        "./image6.png",
      ];
  return (
    <section className="w-full px-4 md:px-0 bg-[#043A53] h-[946px]">
         <div className="w-full mx-auto flex flex-col items-center py-10 md:py-20">
          <div className='text-center text-white w-full'>
          <h1 className='text-5xl font-bold pt-[150px]'>Help is here when you need it</h1>
          <h2 className='text-[#97F03F] pt-8 text-[18px]'>Support is available seven days a week. Contact our team.</h2>
          </div>
           <div className="max-w-6xl mx-auto p-6 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        
        {/* Contact Support */}
        <div className="p-4 ">
          <h3 className="text-xl font-semibold mb-2">Contact Support</h3>
          <p className="text-white"> Email support 7 days a week, 
with live chat on weekdays 
from 9AM-6PM Eastern Time.</p>
          <p className="font-bold mt-2">support@example.com</p>
        </div>

        {/* Connect with Us */}
        <div className="p-4 ">
          <h3 className="text-xl font-semibold mb-2">Connect with Us</h3>
          <p className="text-gray-600">Follow us on social media</p>
          <div className="flex justify-center space-x-4 mt-2 text-blue-600">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">LinkedIn</a>
          </div>
        </div>

        {/* Corporate Office */}
        <div className="p-4 ">
          <h3 className="text-xl font-semibold mb-2">Corporate Office</h3>
          <p className="text-gray-600">123 Business Street, New York, USA</p>
          <p className="font-bold mt-2">+1 123 456 7890</p>
        </div>

        {/* India Office */}
        <div className="p-4 ">
          <h3 className="text-xl font-semibold mb-2">India Office</h3>
          <p className="text-gray-600">456 Tech Park, Bangalore, India</p>
          <p className="font-bold mt-2">+91 98765 43210</p>
        </div>

      </div>
    </div>
           </div>
           </section>
  )
}
