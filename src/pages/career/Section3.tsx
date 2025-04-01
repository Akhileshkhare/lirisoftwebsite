import React from "react";

export default function Section3() {
  return (
    <section className="w-full py-10 px-4 md:px-0 h-auto bg-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center py-8">
        <h2 className="text-4xl md:text-5xl font-bold text-left text-[#043A53] pb-16">
          What we Say!
        </h2>
        <div
          style={{ width: "80%" }}
          className="flex flex-row justify-center gap-6"
        >
          <div
            className="w-full p-6 flex items-center justify-center relative"
          >
            <img src="/backimage2.jpeg" alt="" className="rounded-xl" />
            <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg absolute inset-0 m-auto">
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
