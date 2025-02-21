import React from 'react'

export default function ContactForm() {
    return (
        <section className="w-full px-4 md:px-0 bg-[#F2F5F6]">
         <div className="max-w-2xl mx-auto px-6 py-20 ">
        <h2 className="text-5xl font-bold my-10 text-center">Write <span className='text-[#043A53] text-5xl'>Us</span></h2>
        
        <form className="space-y-4 ">
      
          {/* Service Dropdown */}
          <div>
            <label className="block text-gray-900 text-sm font-semibold mb-2">Service I am looking for</label>
            <select className="w-full p-2 border border-gray-300" defaultValue={""}>
              <option value=""></option>
              <option>Web Development</option>
              <option>SEO Optimization</option>
              <option>Digital Marketing</option>
              <option>Other</option>
            </select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-900 text-sm font-semibold mb-2">Your Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300"
                // placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-900 text-sm font-semibold mb-2">Email Address</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300"
                // placeholder="Enter your email"
              />
            </div>
          </div>
  
  
          {/* Message */}
          <div>
            <label className="block text-gray-900 text-sm font-semibold mb-2">Your Message</label>
            <textarea
              className="w-full p-2 border border-gray-300"
              rows={4}
            //   placeholder="Enter your message"
            ></textarea>
          </div>
  
          <button className="px-6 py-3 text-gray-900 font-semibold bg-yellow-400 rounded flex items-center space-x-2">
            <span>Send Message</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5-5 5M18 12H6"
              />
            </svg>
          </button>
        </form>
      </div>
     </section>
    );
  }
  