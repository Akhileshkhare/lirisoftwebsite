import React, { useState } from 'react';

import { SectionProps } from '../home/Section1';
import { API_BASE_URI } from '../../config/apiConfig';


export const ContactForm: React.FC<SectionProps> = ({ data }) => {   
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  interface SectionData {
    title: string;
    highlight: string;
    buttonText: string;
    services: { name: string }[];
  }
  const sectionData: SectionData = data as SectionData;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const newErrors: { [key: string]: string } = {};

    if (!formData.get("service")) newErrors.service = "Please select a service.";
    if (!formData.get("name")) newErrors.name = "Name is required.";
    if (!formData.get("email")) newErrors.email = "Email is required.";
    if (!formData.get("message")) newErrors.message = "Message is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const timestamp = Math.floor(Date.now() / 1000); // Get current timestamp in seconds
    try {
      const response = await fetch(`${API_BASE_URI}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service: formData.get("service"),
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          date:timestamp
        }),
      });

      if (response.ok) {
        form.reset();
        setSuccessMessage("Your message has been sent successfully. We will connect with you soon!");
        setTimeout(() => setSuccessMessage(""), 5000); // Clear message after 5 seconds
      } else {
        const errorData = await response.json();
        setErrors({ general: errorData.message || "Something went wrong. Please try again." });
      }
    } catch (error) {
      setErrors({ general: "Failed to send your message. Please try again later." });
    }
  };

  const { title, highlight, buttonText, services } = sectionData;

  return (
    <section className="w-full px-4 md:px-0 bg-[#043A53]">
      <div className="max-w-3xl mx-auto px-6 py-6">
       
        <form className="space-y-4 bg-[#F2F5F6] text-left px-10 py-4 shadow-lg" onSubmit={handleSubmit}>
        <h2 className="text-5xl font-bold my-8 text-gray-800 text-center">
          {title} <span className="text-[#043A53] text-5xl">{highlight}</span>
        </h2>
          {/* Service Dropdown */}
          <div>
            <label className="block text-gray-900 text-sm font-semibold mb-2">
              Service I am looking for
            </label>
            <select
              name="service"
              className="w-full p-2 border border-gray-300"
              defaultValue={""}
            >
              <option value="" disabled></option>
              {services.map((service, index) => (
                <option key={index} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>
            {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-900 text-sm font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full p-2 border border-gray-300"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-gray-900 text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border border-gray-300"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-900 text-sm font-semibold mb-2">
              Your Message
            </label>
            <textarea
              name="message"
              className="w-full p-2 border border-gray-300"
              rows={4}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="px-6 py-3 text-gray-900 font-semibold bg-yellow-400 rounded flex items-center space-x-2"
          >
            <span>{buttonText}</span>
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
