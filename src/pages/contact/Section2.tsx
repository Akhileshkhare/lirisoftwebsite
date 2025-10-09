
import React, { useState } from 'react';
import { SectionProps } from '../home/Section1';
import ReusableButton from '../../components/ReusableButton';
import { API_BASE_URI } from '../../config/apiConfig';


export const ContactForm: React.FC<SectionProps> = ({ data }) => {   
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [captchaQuestion, setCaptchaQuestion] = useState<{a: number, b: number}>({a: Math.floor(Math.random()*10)+1, b: Math.floor(Math.random()*10)+1});
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [contactNumber, setContactNumber] = useState("");

  interface SectionData {
    title: string;
    highlight: string;
    buttonText: string;
    services: { name: string }[];
  }
  const sectionData: SectionData = data as SectionData;

  const verifyCaptcha = () => {
    if (parseInt(captchaInput) === captchaQuestion.a + captchaQuestion.b) {
      setCaptchaVerified(true);
      setCaptchaError("");
    } else {
      setCaptchaError("Incorrect answer. Please try again.");
      setCaptchaVerified(false);
    }
  };

  const resetCaptcha = () => {
    setCaptchaQuestion({a: Math.floor(Math.random()*10)+1, b: Math.floor(Math.random()*10)+1});
    setCaptchaInput("");
    setCaptchaError("");
    setCaptchaVerified(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!captchaVerified) {
      setCaptchaError("Please solve the captcha before submitting.");
      return;
    }
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
          date:timestamp,
          contactNumber // Include contact number in the request
        }),
      });

      if (response.ok) {
        form.reset();
        setSuccessMessage("Your message has been sent successfully. We will connect with you soon!");
        setTimeout(() => setSuccessMessage(""), 5000); // Clear message after 5 seconds
        resetCaptcha(); // Reset captcha after successful submit
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
      <div className="max-w-3xl mx-auto px-0 md:px-6 py-6">
        <form className="space-y-4 bg-[#F2F5F6] text-left px-10 py-4 shadow-lg" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-semibold my-8 text-gray-800 text-left">
          {title} <span className="text-[#043A53] text-3xl">{highlight}</span>
        </h2>
          {/* Service Dropdown */}
          <div>
            <label className="block text-gray-900 text-sm font-semibold mb-2">
              Service I am looking for <span className='text-red-500'>*</span>
            </label>
            <select
              name="service"
              className="w-full p-2 text-gray-700 border border-gray-300"
              defaultValue={""}
            >
              <option value="" disabled>Select a service</option>
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
                Full Name <span className='text-red-500'>*</span>
              </label>
              <input
                type="text"
                name="name"
                className="w-full p-2 border border-gray-300 text-gray-900"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-gray-900 text-sm font-semibold mb-2">
                Email Address <span className='text-red-500'>*</span>
              </label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border border-gray-300 text-gray-900"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
          </div>
{/* Contact Number - New Field */}
          <div>
            <label htmlFor="contactNumber" className="block text-gray-900 text-sm font-semibold mb-2">
              Contact Number (optional)
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              className="w-full p-2 border border-gray-300 text-gray-900"
              value={contactNumber}
              onChange={e => setContactNumber(e.target.value)}
              
            />
          </div>
          {/* Message */}
          <div>
            <label className="block text-gray-900 text-sm font-semibold mb-2">
              Message <span className='text-red-500'>*</span>
            </label>
            <textarea
              name="message"
              className="w-full p-2 border border-gray-300 text-gray-900"
              rows={4}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

 


          {/* Captcha */}
          <div className="flex flex-col md:flex-row justify-end items-center md:space-x-2 space-y-2 md:space-y-0">
            <div className="flex items-center space-x-2 w-full md:w-auto justify-end">
              <label className="block w-40 text-gray-900 text-sm font-semibold mb-0">
                Captcha: What is {captchaQuestion.a} + {captchaQuestion.b}?
              </label>
              <input
                type="text"
                value={captchaInput}
                onChange={e => {
                  setCaptchaInput(e.target.value);
                  setCaptchaVerified(false);
                  setCaptchaError("");
                }}
                className="w-[100px] md:w-auto p-2 border border-gray-300 text-gray-900"
                disabled={captchaVerified}
              />
            </div>
            <div className="flex space-x-2 w-full md:w-auto justify-end">
              <button
                type="button"
                onClick={verifyCaptcha}
                disabled={captchaVerified}
                className={`p-0 bg-transparent border-none flex ${captchaVerified ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <ReusableButton
                  text={'Verify'}
                  widthClass="px-6"
                  className={`text-gray-900 font-semibold bg-yellow-400 hover:bg-yellow-500`}
                  showArrow={false}
                />
              </button>
              <button
                type="button"
                onClick={resetCaptcha}
                className={`px-3 py-2 bg-gray-300 text-gray-800 rounded ${!captchaVerified ? "" : ""}`}
               
              >
                Reset
              </button>
            </div>
            {captchaError && <span className="text-red-500 text-sm ml-2">{captchaError}</span>}
            {captchaVerified && <span className="text-green-600 text-sm ml-2">Captcha verified!</span>}
          </div>

         
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!captchaVerified}
              className="p-0 bg-transparent border-none flex"
            >
              <ReusableButton
                text={buttonText}
                widthClass="px-6"
                className={`text-gray-900 font-semibold bg-yellow-400 hover:bg-yellow-500 ${!captchaVerified ? 'opacity-50 cursor-not-allowed' : ''}`}
                showArrow={true}
              />
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
