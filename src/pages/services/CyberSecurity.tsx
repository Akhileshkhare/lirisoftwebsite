import React from "react";

const CyberSecurity = () => (
  <div className="w-full flex justify-center bg-white">
  <div className="max-w-4xl min-h-screen bg-white flex flex-col items-center p-4 my-4">
    <div className="w-full flex justify-center mb-10">
      <div className=" rounded-lg  w-full h-[560px] flex items-center justify-center">
        <img src="/ux_banner.png" alt="Cyber Security" className="w-full h-full object-cover rounded-lg" />
      </div>
    </div>
    <div className=" w-full bg-white rounded-lg  p-10 flex flex-col items-start">
      <h2 className="text-2xl md:text-3xl font-normal text-[#15384F] mb-2">
        Our <span className="font-bold text-[#15384F]">Cyber Security Services</span>
      </h2>
      <p className="mb-8 text-gray-700">Protect your business from cyber threats with our comprehensive security solutions. We offer risk assessments, security audits, and ongoing monitoring to keep your data safe.</p>
      <h2 className="text-2xl md:text-3xl font-normal text-[#15384F] mb-2">
        Our <span className="font-bold text-[#15384F]">Process</span>
      </h2>
      <ol className="list-decimal pl-6 mb-8 text-gray-700">
        <li className="mb-2"><b>Risk Assessment</b> — Identifying vulnerabilities and threats.</li>
        <li className="mb-2"><b>Strategy & Planning</b> — Developing a tailored security roadmap.</li>
        <li className="mb-2"><b>Implementation</b> — Deploying security tools and protocols.</li>
        <li className="mb-2"><b>Monitoring</b> — Continuous monitoring and threat detection.</li>
        <li className="mb-2"><b>Response & Recovery</b> — Rapid response to incidents and recovery planning.</li>
      </ol>
      <h2 className="text-2xl md:text-3xl font-normal text-[#15384F] mb-2">
        Why <span className="font-bold text-[#15384F]">Choose Us</span>
      </h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Certified security experts</li>
        <li>Proactive threat management</li>
        <li>End-to-end protection for your business</li>
      </ul>
    </div>
  </div>
    </div>
);

export default CyberSecurity;
