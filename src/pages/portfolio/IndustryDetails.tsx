import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Footer";

export const IndustryDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>(); // Get the industry slug from the URL
  const location = useLocation(); // Access the location object
  const { tab } = location.state || {}; // Extract the tab details from state
  const navigate = useNavigate();

  return (
    <>
      <section className="w-full px-4 md:px-0 h-auto">
        <div
          className="w-full bg-cover bg-center text-white flex items-center justify-end flex-col h-[200px] md:h-[580px]"
          style={{
            backgroundImage: `url(/Industry1.png)`, // Reference the image from the public folder
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h1
            className="text-4xl md:text-5xl font-bold text-white py-8 px-10 mb-[220px] shadow-xl"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)', // Add a semi-transparent black background
              borderRadius: '8px', // Optional: Add rounded corners
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', // Add text shadow
            }}
          >
            {tab ? tab.title : "Industry Details"}
            <span className="border-b flex w-full border-b-[4px] border-[#f0b73f] mt-5 shadow-md"></span>
          </h1>
        </div>
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center pt-20">
          {tab ? (
            <div className="text-lg text-gray-700 pb-20">
              <p className="text-2xl"><strong>{tab.title}</strong> </p>
              <p className="pl-4 pt-4"> {tab.description}</p>
              <p className="pl-4"> {tab.description1}</p>
              <p className="pl-4 pb-4"> {tab.description2}</p>
              <div>
                <strong className="text-2xl">Features:</strong>
                <ul className="ml-4list-inside pl-4 pt-4">
                  {tab.features?.map((feature: string, index: number) => (
                    <li key={index}>    <span className="mr-4 text-[#f0b73f]">✔</span> {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <p className="text-lg text-gray-700">
              No details available for this industry.
            </p>
          )}
        </div>
        <div className="w-full  mx-auto flex flex-col items-center pb-10">

         {/* Go Back Button */}
         <button
          className="px-6 py-2 bg-[#043A53] text-white rounded"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
        </div>
      </section>
      <Footer />
    </>
  );
};
