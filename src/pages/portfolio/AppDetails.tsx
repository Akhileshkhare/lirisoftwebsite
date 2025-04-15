import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Footer';

export default function AppDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const app = location.state?.app;

  if (!app) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p>No app details available.</p>
        <button
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
   <>
    <section className="w-full py-10 px-4 md:px-0 h-auto">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-10">
        {/* Image Section */}
        <div className="w-full h-[300px] md:h-[400px]">
          <img
            src={app.imageSrc}
            alt={app.imageAlt}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Title and Highlight */}
        <h1 className="text-3xl md:text-5xl font-bold text-[#043A53]">
          {app.title2}
        </h1>
        <p className="text-lg md:text-xl text-[#043A53]">
          {app.highlight2}
        </p>

        {/* Details Section */}
        <div className="text-left p-4 space-y-3 text-gray-900">
          <p className="text-lg bg-gray-100 px-4 py-3 shadow md:text-xl font-bold  ">
            App Details
          </p>
          <p className="text-md md:text-lg px-6 py-4">{app.description}</p>
          <p className="text-lg bg-gray-100 px-4 py-3 shadow md:text-xl font-bold  ">
          Key Features</p>
      <ul className="ml-0 mt-2 space-y-1 text-md md:text-lg px-6 py-4">
        {app.details.map((feature: string, index: number) => (
          <li key={index}>
            <span className="mr-4 text-green-500">✔</span>
            {feature}
          </li>
        ))}
      </ul>
        </div>

        {/* Go Back Button */}
        <button
          className="mt-4 px-6 py-2 bg-[#043A53] text-white rounded"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    </section>
    <Footer />
   </>
  );
}
