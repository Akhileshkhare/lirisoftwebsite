import React from 'react'

export default function Section4() {
  return (
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
  )
}
