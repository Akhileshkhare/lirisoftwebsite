import React from "react";

const ApiDevelopment = () => (
  <div className="w-full flex justify-center bg-white">
  <div className="max-w-4xl min-h-screen bg-white flex flex-col items-center p-4 my-4">    <div className="w-full flex justify-center mb-10">
      <div className=" rounded-lg  w-full h-[560px] flex items-center justify-center">
        <img src="/ux_banner.png" alt="Cyber Security" className="w-full h-full object-cover rounded-lg" />
      </div>
    </div>
    <div className="max-w-4xl w-full bg-white rounded-lg  p-10 flex flex-col items-start">
      <h2 className="text-2xl md:text-3xl font-normal text-[#15384F] mb-2">
        Our <span className="font-bold text-[#15384F]">API Development Services</span>
      </h2>
      <p className="mb-8 text-gray-700">We design and develop secure, scalable, and high-performance APIs to power your applications and integrations. Our APIs are built for reliability and easy consumption.</p>
      <h2 className="text-2xl md:text-3xl font-normal text-[#15384F] mb-2">
        Our <span className="font-bold text-[#15384F]">Process</span>
      </h2>
      <ol className="list-decimal pl-6 mb-8 text-gray-700">
        <li className="mb-2"><b>API Strategy</b> — Defining the right API architecture and standards.</li>
        <li className="mb-2"><b>Design & Documentation</b> — Creating clear, developer-friendly API docs.</li>
        <li className="mb-2"><b>Development</b> — Building RESTful, GraphQL, or custom APIs.</li>
        <li className="mb-2"><b>Testing & Security</b> — Ensuring robust security and performance.</li>
        <li className="mb-2"><b>Deployment & Monitoring</b> — Launching and monitoring APIs for uptime and usage.</li>
      </ol>
      <h2 className="text-2xl md:text-3xl font-normal text-[#15384F] mb-2">
        Why <span className="font-bold text-[#15384F]">Choose Us</span>
      </h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Proven expertise in API design and integration</li>
        <li>Focus on security and scalability</li>
        <li>Comprehensive documentation and support</li>
      </ul>
    </div>
  </div>
  </div>
);

export default ApiDevelopment;
