import React from 'react';

export default function Section3() {
  return (
    <section className="w-full px-4 md:px-0">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center py-10 md:py-20">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start px-4 md:px-20 lg:px-40 py-10 gap-10 md:gap-10">
          {/* Left Part (30%) */}
          <div className="w-full md:w-1/4 max-w-md space-y-6 md:space-y-8 text-left md:text-left">
            <button className="px-6 py-3 text-white bg-[#043A53] rounded-3xl flex items-center space-x-2 mx-auto md:mx-0">
              <span>Why choose us</span>
            </button>
            <h2 className="text-gray-900 text-5xl md:text-5xl font-semibold">
              We Make Your Work <br /> Effortless
            </h2>
            <p className="text-gray-900 text-base md:text-md">
              We get your business. By understanding your needs and staying ahead of market trends, 
              we deliver smarter, tailored solutions that elevate your product.
            </p>
          </div>

          {/* Right Part (70%) */}
          <div className="w-full md:w-3/4 flex flex-col sm:flex-row gap-6 py-8 md:gap-3">
            {[{
              img: '/back-1.svg',
              title: 'User Experience',
              desc: 'Our certified experts ensure your product delivers a seamless, user-centered experience from start to finish.'
            }, {
              img: '/back-2.svg',
              title: 'Web Development',
              desc: 'No matter the platform, we deliver the perfect solution tailored to your needs.'
            }, {
              img: '/back-3.svg',
              title: 'Cyber Security',
              desc: 'Our solution safeguards your systems and data from threats like hacking and malware, ensuring protection and continuity in the digital world.'
            }].map((feature, index) => (
              <div key={index} className="flex flex-col items-center p-6 gap-6 md:gap-8 bg-[#F2F5F6] rounded-2xl w-full max-w-[215.33px] h-auto text-center">
                <div className="w-28 h-28 flex items-center justify-center">
                  <img src={feature.img} alt="Feature Icon" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-2 text-left">
                  <h3 className="text-gray-900 text-lg font-semibold">{feature.title}</h3>
                  <p className="text-gray-900 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
