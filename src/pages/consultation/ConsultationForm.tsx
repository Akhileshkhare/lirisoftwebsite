import React, { useState } from 'react';
import Footer from '../Footer';
import { API_BASE_URI } from '../../config/apiConfig';

const ConsultationForm: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const errors: { [key: string]: string } = {};
    if (!formData.get("name")) errors.name = "Name is required";
    if (!formData.get("email")) errors.email = "Email Address is required";
    if (!formData.get("message")) errors.message = "Message is required";

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      const payload = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
        date: Math.floor(Date.now() / 1000), // Timestamp in seconds
      };

      try {
        const response = await fetch(`${API_BASE_URI}/api/consultation`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          form.reset();
          setSuccessMessage("Your consultation request was sent successfully!");
          
          setTimeout(() => setSuccessMessage(null), 5000);
        } else {
          const errorData = await response.json();
          setFormErrors({ general: errorData.message || "Something went wrong" });
        }
      } catch (error) {
        setFormErrors({ general: "Failed to send request. Please try again later." });
      }
    }
  };

  return (
  <>
    <section className="w-full px-4 md:px-0 bg-[#043A53]">
      <div className="max-w-2xl mx-auto px-6 py-10">
        <h2 className="text-[24px] my-10 text-left text-white">
          Request a <span className="font-bold">Consultation</span>
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-white text-sm font-semibold mb-2">Name</label>
            <input name="name" type="text" className="w-full p-2 border border-gray-300" />
            {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
          </div>
          <div>
            <label className="block text-white text-sm font-semibold mb-2">Email Address</label>
            <input name="email" type="email" className="w-full p-2 border border-gray-300" />
            {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
          </div>
          <div>
            <label className="block text-white text-sm font-semibold mb-2">Message</label>
            <textarea name="message" className="w-full p-2 border border-gray-300" rows={4}></textarea>
            {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
          </div>
          {formErrors.general && <p className="text-red-500 text-sm">{formErrors.general}</p>}
          <div className="flex justify-center py-4">
            <button
              type="submit"
              className="px-6 py-3 text-gray-900 font-semibold bg-yellow-400 rounded flex items-center space-x-2"
            >
              <span>Submit</span>
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
    <Footer/>
    </>
  );
};

export default ConsultationForm;
