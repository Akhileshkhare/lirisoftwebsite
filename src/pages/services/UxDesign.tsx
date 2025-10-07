import React from "react";

const UxDesign = () => (
  <div className="w-full flex justify-center bg-white">
  <div className="max-w-4xl min-h-screen bg-white flex flex-col items-center p-4 my-4">
        <div className="w-full flex justify-center mb-10">
      <div className=" rounded-lg  w-full h-[560px] flex items-center justify-center">
        <img src="/ux_banner.png" alt="Cyber Security" className="w-full h-full object-cover rounded-lg" />
      </div>
    </div>
    <div className="max-w-4xl w-full bg-white rounded-lg  p-10 flex flex-col items-start">
      <h2 className="text-2xl md:text-3xl font-normal text-[#15384F] mb-2">
        Our <span className="font-bold text-[#15384F]">UX Services</span>
      </h2>
      <p className="mb-8 text-gray-700">At LiriSoft, we believe great products are built on great experiences. Our UX services are designed to understand your users, align with your business goals, and create digital solutions that feel intuitive, engaging, and valuable.</p>
      <h2 className="text-2xl md:text-3xl font-normal text-[#15384F] mb-2">
        Our <span className="font-bold text-[#15384F]">UX Process</span>
      </h2>
      <ol className="list-decimal pl-6 mb-8 text-gray-700">
        <li className="mb-2"><b>Discovery & Research</b> — We start by understanding your users, their needs, and pain points through user interviews, surveys, and market analysis. This helps us align the design with your business objectives.</li>
        <li className="mb-2"><b>Define & Ideate</b> — Insights from research are transformed into personas, user journeys, and problem statements. We then explore ideas and opportunities to address them.</li>
        <li className="mb-2"><b>Design & Prototype</b> — We craft wireframes, interactive prototypes, and high-fidelity designs that bring ideas to life. This phase ensures that usability and aesthetics go hand in hand.</li>
        <li className="mb-2"><b>Test & Validate</b> — With real users, we test prototypes to gather feedback, refine workflows, and validate solutions before development begins—saving time and cost.</li>
        <li className="mb-2"><b>Deliver & Support</b> — Once designs are finalized, we work closely with developers to ensure smooth implementation. We continue to monitor, optimize, and evolve experiences as your product grows.</li>
      </ol>
      <h2 className="text-2xl md:text-3xl font-normal text-[#15384F] mb-2">
        Why <span className="font-bold text-[#15384F]">Choose Us</span>
      </h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li>User-centered approach that puts your customers first</li>
        <li>Data-driven decisions backed by research and testing</li>
        <li>Seamless collaboration with product and engineering teams</li>
        <li>Scalable solutions designed for long-term impact</li>
      </ul>
    </div>
  </div>
  </div>
);

export default UxDesign;
