import React from "react";

const Automation = () => (
   <div className="w-full flex justify-center bg-white">
  <div className="max-w-4xl min-h-screen bg-white flex flex-col items-center p-4 my-4">
    <div className="w-full flex justify-center mb-10">
      <div className=" rounded-lg  w-full h-[560px] flex items-center justify-center">
        <img src="/ux_banner.png" alt="Cyber Security" className="w-full h-full object-cover rounded-lg" />
      </div>
    </div>
    <div className="max-w-4xl w-full bg-white rounded-lg  p-10 flex flex-col items-start">
      <h2 className="text-2xl md:text-3xl font-normal text-[#15384F] mb-2">
        Our <span className="font-bold text-[#15384F]">Automation Services</span>
      </h2>
      <p className="mb-8 text-gray-700">We help businesses automate repetitive tasks and workflows, increasing efficiency and reducing costs. Our automation solutions are tailored to your unique needs.</p>
      <h2 className="text-2xl md:text-3xl font-normal text-[#15384F] mb-2">
        Our <span className="font-bold text-[#15384F]">Process</span>
      </h2>
      <ol className="list-decimal pl-6 mb-8 text-gray-700">
        <li className="mb-2"><b>Assessment</b> — Identifying automation opportunities.</li>
        <li className="mb-2"><b>Solution Design</b> — Crafting custom automation strategies.</li>
        <li className="mb-2"><b>Implementation</b> — Deploying automation tools and scripts.</li>
        <li className="mb-2"><b>Testing</b> — Ensuring reliability and accuracy.</li>
        <li className="mb-2"><b>Optimization</b> — Continuous improvement and support.</li>
      </ol>
      <h2 className="text-2xl md:text-3xl font-normal text-[#15384F] mb-2">
        Why <span className="font-bold text-[#15384F]">Choose Us</span>
      </h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Expertise in RPA, AI, and workflow automation</li>
        <li>Custom solutions for every business</li>
        <li>Proven ROI and efficiency gains</li>
      </ul>
    </div>
  </div>
  </div>
);

export default Automation;
