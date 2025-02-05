import React from "react";
import Navbar from "../component/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-semibold text-center text-blue-800">
          About Us
        </h1>
        <p className="mt-4 text-center text-gray-600">
          This is an example about page.
        </p>
      </main>
    </div>
  );
};

export default About;