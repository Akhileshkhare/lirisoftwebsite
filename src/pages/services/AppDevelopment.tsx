import React from "react";

const AppDevelopment = () => (
  <div className="w-full flex justify-center bg-white">
  <div className="max-w-4xl min-h-screen bg-white flex flex-col items-center p-4 my-4">
    <div className="w-full flex justify-center mb-10">
      <div className=" rounded-lg  w-full h-[560px] flex items-center justify-center">
        <img src="/ux_banner.png" alt="Cyber Security" className="w-full h-full object-cover rounded-lg" />
      </div>
    </div>
    <div className="max-w-4xl w-full bg-white rounded-lg  p-10 flex flex-col items-start">
      <h2 className="text-2xl md:text-3xl font-normal text-[#15384F] mb-2">
        Our <span className="font-bold text-[#15384F]">App Development Services</span>
      </h2>
      <p className="mb-8 text-gray-700">We build robust, scalable, and user-friendly mobile and web applications tailored to your business needs. Our team leverages the latest technologies to deliver high-performance solutions.</p>
      <h2 className="text-2xl md:text-3xl font-normal text-[#15384F] mb-2">
        Our <span className="font-bold text-[#15384F]">Process</span>
      </h2>
      <ol className="list-decimal pl-6 mb-8 text-gray-700">
        <li className="mb-2"><b>Requirement Analysis</b> — Understanding your goals and technical needs.</li>
        <li className="mb-2"><b>UI/UX Design</b> — Creating intuitive and engaging interfaces.</li>
        <li className="mb-2"><b>Development</b> — Coding with best practices and modern frameworks.</li>
        <li className="mb-2"><b>Testing</b> — Rigorous QA to ensure reliability and performance.</li>
        <li className="mb-2"><b>Deployment & Support</b> — Launching your app and providing ongoing support.</li>
      </ol>
      <h2 className="text-2xl md:text-3xl font-normal text-[#15384F] mb-2">
        Why <span className="font-bold text-[#15384F]">Choose Us</span>
      </h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Expertise in cross-platform and native development</li>
        <li>Agile methodology for faster delivery</li>
        <li>Continuous support and maintenance</li>
      </ul>
    </div>
  </div>
  </div>
);

export default AppDevelopment;
