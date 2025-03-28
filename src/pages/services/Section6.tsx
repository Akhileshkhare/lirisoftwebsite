import React from 'react'

export default function Section6() {
    return (
        <section className="w-full px-4 md:px-0 bg-[#043A53]">
         <div className="max-w-2xl mx-auto px-6 py-20 ">
        <h2 className="text-[24px]  my-10 text-left text-white">
        Entrust your project to our <span className='font-bold'>best team of professionals</span></h2>
        
        <form className="space-y-4 ">
      
          {/* Budget Range Dropdown */}
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-sm font-semibold mb-2">Your Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300"
              
              />
            </div>
            <div>
              <label className="block text-white text-sm font-semibold mb-2">Email Address</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300"
               
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-sm font-semibold mb-2">Contact Number</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300"
              
              />
            </div>
            <div>
            <label className="block text-white text-sm font-semibold mb-2">Select a Budget Range</label>
            <select className="w-full p-2 border border-gray-300" defaultValue={""}>
              <option value="" disabled>Select your budget range</option>
              <option value="low">Less than $1,000</option>
              <option value="medium">$1,000 - $5,000</option>
              <option value="high">$5,000 - $10,000</option>
              <option value="premium">More than $10,000</option>
            </select>
          </div>
          </div>
  
  
  
          {/* Message */}
          <div>
            <label className="block text-white text-sm font-semibold mb-2">Project Description</label>
            <textarea
              className="w-full p-2 border border-gray-300"
              rows={4}
            ></textarea>
          </div>

          <div className="flex justify-center py-4">
            <button className="px-6 py-3 text-gray-900 font-semibold bg-yellow-400 rounded flex items-center space-x-2">
              <span>Request Proposal</span>
            </button>
          </div>
        </form>
      </div>
     </section>
    );
  }
