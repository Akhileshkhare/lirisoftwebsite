import React from "react";

export default function Section2() {


  return (
    <section className="w-full py-10 px-4 md:px-0 h-auto bg-gray-100">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center py-8">
      <h2 className="text-4xl md:text-5xl font-bold text-left text-[#043A53] pb-16">
        Life at Liri
        </h2>        
        <div className="w-[80%] flex flex-col md:flex-row justify-center gap-6">
          <div className="w-full md:w-1/3 flex justify-center">
            <img src="carrer-1.png" alt="Career 1" className="w-full h-auto object-cover" />
          </div>
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            <img src="carrer-2.png" alt="Career 2" className="w-full h-auto object-cover" />
            <img src="carrer-3.png" alt="Career 3" className="w-full h-auto object-cover" />
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <img src="carrer-4.png" alt="Career 4" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
