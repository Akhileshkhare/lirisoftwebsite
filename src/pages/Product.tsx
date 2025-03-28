import React from "react";
import { FaCloud, FaChartBar, FaCogs, FaHeadset } from "react-icons/fa";

import Footer from "./Footer";

export default function Product() {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <header
          className="w-full bg-gray-100 py-10 text-center relative"
          style={{
            backgroundImage: "url('/login.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "840px",
          }}
        >
          <div className="absolute top-1/2 left-20  transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-center p-5 rounded-lg">
            <h1 className="text-4xl font-bold">Our IT Solutions</h1>
            <p className="text-lg mt-2">
              Innovative technology solutions to drive your business forward.
            </p>
          </div>
        </header>

        <section className="py-10 px-5 md:px-20 py-20">
          <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-10 md:gap-6 relative py-10">
            <h2 className="text-4xl font-semibold text-gray-800 mb-10">
              About Our{" "}
              <span className="font-bold text-[#043A53]">Product</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <img
                src="/backimage2.jpeg"
                alt="Product Overview"
                className="w-full md:w-1/2 rounded-lg shadow-lg mb-5 md:mb-0 md:mr-5"
              />
              <p className="text-gray-800 font-normal text-lg md:w-1/2">
                Our cutting-edge IT product is designed to streamline your
                business operations, enhance productivity, and provide robust
                security. With a user-friendly interface and powerful features,
                it's the perfect solution for businesses of all sizes. Whether
                you're a small startup or a large enterprise, our product adapts
                to your needs, ensuring seamless integration and scalability.
                Experience the future of technology with our innovative
                solutions tailored to drive your success.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full  bg-gray-100">
          <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-10 md:gap-6 relative py-20">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4 text-gray-800">
              Key <span className="font-bold text-[#043A53]">Features</span>
            </h2>
            <div className="w-full flex flex-col md:flex-row items-center gap-10 ">
              {/* First Column */}
              <div className="p-5  flex-1 ">
                <div className="grid grid-cols-1 gap-1 space-y-2 md:space-y-2">
                  <div className="bg-white shadow-lg px-4 py-5 flex items-center">
                    <FaCloud className="w-12 h-12 text-blue-600 mr-4" />
                    <p className="text-gray-600 text-xl">
                      Cloud-based infrastructure for scalability and flexibility
                    </p>
                  </div>
                  <div className="bg-white shadow-lg px-4 py-5 flex items-center">
                    <FaChartBar className="w-12 h-12 text-blue-600 mr-4" />
                    <p className="text-gray-600 text-xl">
                      Advanced analytics and reporting tools
                    </p>
                  </div>
                  <div className="bg-white shadow-lg px-4 py-5 flex items-center">
                    <FaCogs className="w-12 h-12 text-blue-600 mr-4" />
                    <p className="text-gray-600 text-xl">
                      Seamless integration with existing systems
                    </p>
                  </div>
                  <div className="bg-white shadow-lg px-4 py-5 flex items-center">
                    <FaHeadset className="w-12 h-12 text-blue-600 mr-4" />
                    <p className="text-gray-600 text-xl">
                      24/7 customer support
                    </p>
                  </div>
                </div>
              </div>
              {/* Second Column */}
              <div className="flex-1">
                <img
                  src="/Rectangle8.png"
                  alt="Key Features Illustration"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className=" w-full py-10 px-5 md:px-20">
          <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-10 md:gap-6 relative py-20">
            <div className="flex flex-col md:flex-row items-center">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Why Choose Us?
                </h2>
                <p className="text-gray-600 md:mr-5">
                  We are committed to delivering exceptional value to our
                  clients. Our team of experts works tirelessly to ensure that
                  our solutions meet your unique needs and exceed your
                  expectations. With years of experience in the industry, we
                  pride ourselves on our ability to innovate and adapt to the
                  ever-changing technological landscape. Our dedication to
                  customer satisfaction, combined with our cutting-edge
                  technology, makes us the ideal partner for your business.
                  Trust us to help you achieve your goals with confidence and
                  efficiency.
                </p>
              </div>

              <img
                src="/Videoplaceholder.png"
                alt="Why Choose Us"
                className="w-full md:w-1/2 rounded-lg shadow-lg mt-5 md:mt-0"
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-10 text-center w-full ">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get Started Today
          </h2>
          <p className="text-gray-600 mb-5">
            Contact us to learn more about our product and how it can benefit
            your business.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700">
            Contact Us
          </button>
        </section>
      </div>

      <Footer />
    </>
  );
}
