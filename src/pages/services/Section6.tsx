import React, { useState, useEffect } from 'react';

import { SectionProps } from '../home/Section1';

export const Section6: React.FC<SectionProps> = ({ data }) => {   
  const sectionData:any=data || null;

  interface BudgetOption {
    value: string;
    label: string;
  }

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const { title1, highlight1, title2, imageSrc, imageAlt, highlight2, title3, budgetOptions } = sectionData;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const errors: { [key: string]: string } = {};
    if (!formData.get("firstName")) errors.firstName = "First Name is required";
    if (!formData.get("lastName")) errors.lastName = "Last Name is required";
    if (!formData.get("email")) errors.email = "Email Address is required";
    if (!formData.get("contactNumber")) errors.contactNumber = "Contact Number is required";
    if (!formData.get("projectDescription")) errors.projectDescription = "Project Description is required";

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      form.reset();
      setSuccessMessage("Your proposal was sent successfully!");
      setTimeout(() => setSuccessMessage(null), 5000);
    }
  };

  return (
    <section className="w-full px-4 md:px-0 bg-[#043A53]">
      <div className="max-w-2xl mx-auto px-6 py-20">
        <h2 className="text-[24px] my-10 text-left text-white">
          {title1} <span className="font-bold">{highlight1}</span>
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Budget Range Dropdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-sm font-semibold mb-2">First Name</label>
              <input name="firstName" type="text" className="w-full p-2 border border-gray-300" />
              {formErrors.firstName && <p className="text-red-500 text-sm">{formErrors.firstName}</p>}
            </div>
            <div>
              <label className="block text-white text-sm font-semibold mb-2">Last Name</label>
              <input name="lastName" type="text" className="w-full p-2 border border-gray-300" />
              {formErrors.lastName && <p className="text-red-500 text-sm">{formErrors.lastName}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
              <label className="block text-white text-sm font-semibold mb-2">Email Address</label>
              <input name="email" type="email" className="w-full p-2 border border-gray-300" />
              {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
            </div>
            <div>
              <label className="block text-white text-sm font-semibold mb-2">Contact Number</label>
              <input name="contactNumber" type="text" className="w-full p-2 border border-gray-300" />
              {formErrors.contactNumber && <p className="text-red-500 text-sm">{formErrors.contactNumber}</p>}
            </div>
           
          </div>
          {/* Message */}
          <div>
            <label className="block text-white text-sm font-semibold mb-2">Project Description</label>
            <textarea name="projectDescription" className="w-full p-2 border border-gray-300" rows={4}></textarea>
            {formErrors.projectDescription && <p className="text-red-500 text-sm">{formErrors.projectDescription}</p>}
          </div>
          <div className="flex justify-center py-4">
            <button
              type="submit"
              className="px-6 py-3 text-gray-900 font-semibold bg-yellow-400 rounded flex items-center space-x-2"
            >
              <span>{title3}</span>
            </button>
          </div>
        
          <div
            className={`mt-4 h-[50px] text-center py-3 text-green-900 font-semibold rounded ${
              successMessage ? "bg-yellow-100" : ""
            }`}
          >
            {successMessage && successMessage}
          </div>
         
        </form>
      </div>
    </section>
  );
}
