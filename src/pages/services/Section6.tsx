import React, { useState, useEffect } from 'react';

export default function Section6() {
  interface BudgetOption {
    value: string;
    label: string;
  }

  const [sectionData, setSectionData] = useState<{
    title1: string;
    highlight1: string;
    title2: string;
    imageSrc: string;
    imageAlt: string;
    highlight2: string;
    title3: string;
    budgetOptions: BudgetOption[];
  }>({
    title1: "",
    highlight1: "",
    title2: "",
    imageSrc: "",
    imageAlt: "",
    highlight2: "",
    title3: "",
    budgetOptions: []
  });

  useEffect(() => {
    fetch("https://liriapis.onrender.com/api/homepage")
      .then((response) => response.json())
      .then((data) => setSectionData(data.Service.section6))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  const { title1, highlight1, title2, imageSrc, imageAlt, highlight2, title3, budgetOptions } = sectionData;

  return (
    <section className="w-full px-4 md:px-0 bg-[#043A53]">
      <div className="max-w-2xl mx-auto px-6 py-20">
        <h2 className="text-[24px] my-10 text-left text-white">
          {title1} <span className="font-bold">{highlight1}</span>
        </h2>
        <form className="space-y-4">
          {/* Budget Range Dropdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-sm font-semibold mb-2">Your Name</label>
              <input type="text" className="w-full p-2 border border-gray-300" />
            </div>
            <div>
              <label className="block text-white text-sm font-semibold mb-2">Email Address</label>
              <input type="email" className="w-full p-2 border border-gray-300" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-sm font-semibold mb-2">Contact Number</label>
              <input type="text" className="w-full p-2 border border-gray-300" />
            </div>
            <div>
              <label className="block text-white text-sm font-semibold mb-2">Select a Budget Range</label>
              <select className="w-full p-2 border border-gray-300" defaultValue={""}>
                <option value="" disabled>Select your budget range</option>
                {budgetOptions.map((option, index) => (
                  <option key={index} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
          {/* Message */}
          <div>
            <label className="block text-white text-sm font-semibold mb-2">Project Description</label>
            <textarea className="w-full p-2 border border-gray-300" rows={4}></textarea>
          </div>
          <div className="flex justify-center py-4">
            <button className="px-6 py-3 text-gray-900 font-semibold bg-yellow-400 rounded flex items-center space-x-2">
              <span>{title3}</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
