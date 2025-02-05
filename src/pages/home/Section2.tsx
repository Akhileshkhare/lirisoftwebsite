import React from "react";

export default function Section2() {
  return (
    <section className="w-full" style={{ background: "#043A53" }}>
      <div className="w-4/5 mx-auto flex flex-col items-center  py-0 h-[1044px]">
        <div className="flex flex-col space-y-6 md:flex-row justify-between items-start px-40 pt-[50px] md:pt-[100px]">
          {/* Left Part - Heading */}
          <div className="w-full md:w-3/5 h-[144px]">
            <h2 className="text-white text-5xl font-semibold ml-[5px]  leading-[50px]">
              Elite Teams <br />
              <span className="text-[#F0B73F]">& Expert Professionals</span>
            </h2>
          </div>

          {/* Right Part - Description */}
          <div className="w-full md:w-2/5 h-[144px] ">
            <p className="text-white text-md md:text-md  px-0  ">
              Watch Our Video to See How We Tackle Business Challenges with
              Integrity and Deliver Quality Solutions on Time.
            </p>
          </div>
        </div>
        <div className="flex flex-col  md:flex-row justify-between items-center px-0 ">
          <div className="mr-10 hidden md:block">
          <img
              src="/bresis1.svg" // Replace with the actual image path
              alt="Rectangle Image"
              className="object-cover w-full h-[511px] rounded"
            />
          </div>
          <div>
            <img
              src="/backimage2.jpeg" // Replace with the actual image path
              alt="Rectangle Image"
              className="object-cover w-full h-[636px] rounded-lg"
            />
          </div>
          <div className="ml-10 hidden md:block">
          <img
              src="/bresis2.svg" // Replace with the actual image path
              alt="Rectangle Image"
              className="object-cover w-full h-[511px] rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
