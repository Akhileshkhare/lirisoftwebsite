import React, { useEffect, useState } from "react";

export default function Section8() {
  interface Section8Data {
    title: string;
    subtitleHighlight: string;
    icons: string[];
    description: string;
    menuItems: string[];
    about: {
      title: string;
      email: string;
    };
  }

  const [section8, setSection8] = useState<Section8Data | null>(null);

  useEffect(() => {
    fetch("https://liriapis.onrender.com/api/homepage")
      .then((response) => response.json())
      .then((data) => setSection8(data.Home.section8));
  }, []);

  if (!section8) return null;

  return (
    <section className="w-full py-10 px-4 md:px-0">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-between items-start w-full px-4 md:px-0">
          <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 mt-10 md:mt-[40px]">
            <div className="flex flex-col w-full max-w-[247px] h-auto">
              <h3 className="text-[#043A53] text-3xl md:text-4xl font-bold">
                {section8.title}
                <span className="text-yellow-300">{section8.subtitleHighlight}</span>
              </h3>
              <div className="w-full flex flex-row items-center mt-6 md:mt-[40px] space-x-4">
                {section8.icons.map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt={`Feature Icon ${index + 1}`}
                    className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] object-cover"
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col w-full max-w-[395px] h-auto px-4 md:px-10">
              <p className="text-sm md:text-base text-gray-900">{section8.description}</p>
            </div>
            <div className="flex flex-col w-full max-w-[114px] h-auto">
              <ul className="list-none space-y-4 md:space-y-4 text-gray-900">
                {section8.menuItems.map((item, index) => (
                  <li
                    key={index}
                    className={index === 0 ? "font-semibold text-lg md:text-xl" : ""}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col w-full max-w-[247px] h-auto">
              <h1 className="font-semibold text-lg md:text-xl mb-3">{section8.about.title}</h1>
              <p className="text-sm md:text-base text-gray-900">{section8.about.email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
