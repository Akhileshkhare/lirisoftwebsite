import React from "react";

export default function Section6() {
  const tabs = [
    {
      src: "/Group146.png",
      title: "Fintech",
      description:
        "Helping financial businesses improve and automate the delivery and use of financial services.",
    },
    {
      src: "/Group147.png",
      title: "Media and Entertainment",
      description:
        "Crafting superlative M&E solutions using the latest technology to revolutionize the media and entertainment industry.",
    },
    {
      src: "/Group148.png",
      title: "Healthcare",
      description:
        "Transforming the future of healthcare with innovative technology solutions.",
    },
    {
      src: "/Group149.png",
      title: "CPG Retail",
      description:
        "Building innovative technology solutions for consumer goods, retail and electronics businesses to help enhance customer digital experience.",
    },
    {
      src: "/Group150.png",
      title: "Sports and Leisure",
      description:
        "We understand the sports landscape like no one and hence we use industry-leading technologies to revolutionize the gaming experience.",
    },
    {
      src: "/Group151.png",
      title: "Manufacturing and Logistics",
      description:
        "Helping manufacturing, supply and logistics businesses reap higher profitability by building custom technology solutions.",
    },
    {
      src: "/Group152.png",
      title: "Facilities Management",
      description:
        "Helping facilities management businesses in efficient and effective delivery of support services for the organizations they serve with our next generation technology solutions.",
    },
    {
      src: "/Group153.png",
      title: "Social Networking",
      description:
        "Rendering result-oriented ideal technology for specific social media platforms to help clients reap all the business benefits of social media.",
    },
    {
      src: "/Group154.png",
      title: "Human Resources",
      description:
        "Building robust technology solutions to streamline human resource operations of an organization.",
    },
  ];

  return (
    <section className="w-full py-10 px-4 md:px-0 h-auto">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
      <h2 className="text-4xl md:text-5xl font-normal text-left text-[#043A53] pb-16">
      We <span className="text-[#043A53] font-bold">Cover</span>, almost all <span className="text-[#043A53] font-bold">Industries</span>
        </h2>  
        <p></p>
        {/* Flex wrap to handle responsive rows */}
        <div className="flex flex-wrap justify-center gap-6">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className="flex flex-col w-[400px] h-auto bg-white border-[2px] border-gray-300 p-6 items-start"
            >
              {/* Left Image */}
              
              {/* Text Content */}
              <div className="flex flex-row">
              <img
                src={tab.src}
                alt={tab.title}
                className="w-[40px] h-[40px] object-cover mr-4"
              />
                <h3 className="text-2xl font-semibold text-[#043A53] mb-2">
                  {tab.title}
                </h3>
               
              </div>
             
<<<<<<< HEAD
              <div className={`w-full flex flex-row text-[18px] text-gray-700 py-8 ${index === 5 ? 'h-[128px]' : 'h-[160px]'}`}>
              {tab.description}</div>
=======
              <div className={`w-full flex flex-row text-[18px] text-gray-700 py-8 h-[${index===5?'128px':'160px'}]`}>{tab.description}</div>
>>>>>>> b7a7c968231b4dbce09731e7cd3b520ee134d71f
              <div className="w-full flex flex-row font-bold items-center justify-end cursor-pointer text-[14px] text-[#043A53]">
                READ MORE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 w-6 h-6 text-[#F0B73F]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5-5 5M18 12H6"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
