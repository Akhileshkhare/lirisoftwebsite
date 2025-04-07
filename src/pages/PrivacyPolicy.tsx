import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import FullPageLoader from '../components/FullPageLoader';
import { API_BASE_URI } from '../config/apiConfig';

export default function PrivacyPolicy() {
  interface PrivacyPolicyType {
    title: {
      title: string;
    };
    introduction: {
      introduction: string;
    };
    sections: {
      heading: string;
      content: string[];
      list?: string[];
    }[];
    contact: {
      address: string;
      email: string;
    };
  }

  const [privacyPolicy, setPrivacyPolicy] = useState<PrivacyPolicyType | null>(null);

  useEffect(() => {
    fetch(`${API_BASE_URI}/api/homepage`) 
      .then((response) => response.json())
      .then((data) => setPrivacyPolicy(data.PrivacyPolicy));
  }, []);

  if (!privacyPolicy) {
    return  <FullPageLoader/>;
  }

  return (
    <>
      <section className="w-full p-6 md:p-12 bg-gray-50 text-gray-700">
        <div className="w-4/5 mx-auto flex flex-col items-start justify-start py-0 ">
          <h1 className="text-3xl font-bold mb-6">{privacyPolicy.title.title}</h1>
          <p className="mb-4">{privacyPolicy.introduction.introduction}</p>

          {privacyPolicy.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold mt-6 mb-4">{section.heading}</h2>
              {section.content.map((paragraph, idx) => (
                <p key={idx} className="mb-4">{paragraph}</p>
              ))}
              {section.list && (
                <ul className="list-disc list-inside mb-4">
                  {section.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <address className="not-italic">
            <p>{privacyPolicy.contact.address}</p>
            <p>
              <a href={`mailto:${privacyPolicy.contact.email}`} className="text-blue-500 hover:underline">
                {privacyPolicy.contact.email}
              </a>
            </p>
          </address>
        </div>
      </section>
      <Footer />
    </>
  );
}
