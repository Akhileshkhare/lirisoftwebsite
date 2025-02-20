import React from "react";

export default function Section8() {
  return (
    <section className="w-full py-10 px-4 md:px-0">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-between items-start w-full px-4 md:px-0">
          <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 mt-10 md:mt-[40px]">
            <div className="flex flex-col w-full max-w-[247px] h-auto">
              <h3 className="text-[#043A53] text-3xl md:text-4xl font-bold">
                Lirisoft<span className="text-yellow-300">.</span>
              </h3>
              <div className="w-full flex flex-row items-center mt-6 md:mt-[40px] space-x-4">
                <img src="/SIcon1.svg" alt="Feature Icon" className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] object-cover" />
                <img src="/SIcon2.svg" alt="Feature Icon" className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] object-cover" />
                <img src="/SIcon3.svg" alt="Feature Icon" className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] object-cover" />
              </div>
            </div>
            <div className="flex flex-col w-full max-w-[395px] h-auto px-4 md:px-10">
              <p className="text-sm md:text-base text-gray-900">Since our founding in 2017, Lirisoft has specialized in IT consulting and software development. We empower non-IT organizations and software companies to enhance business performance and rapidly attract new customers.</p>
            </div>
            <div className="flex flex-col w-full max-w-[114px] h-auto">
              <ul className="list-none space-y-4 md:space-y-4 text-gray-900">
                <li className="font-semibold text-lg md:text-xl">Home</li>
                <li>Solutions</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="flex flex-col w-full max-w-[247px] h-auto">
              <h1 className="font-semibold text-lg md:text-xl mb-3">About Us</h1>
              <p className="text-sm md:text-base text-gray-900">support@lirisoft.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
