import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import FullPageLoader from '../components/FullPageLoader';
import { API_BASE_URI } from '../config/apiConfig';

export default function TermsOfService() {
  interface Section {
    heading: string;
    content: string;
  }

  const [termsOfService, setTermsOfService] = useState<{
    title:  { title: string; };
    sections: Section[];
    title2:  { title2: string; };
    contact: { address: string; email: string };
  }>({
    title: {title: ''},
    sections: [],
    title2: {title2: ''},
    contact: { address: '', email: '' },
  });

  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetch(`${API_BASE_URI}/api/homepage`) 
      .then((response) => response.json())
      .then((data) => {
        console.log('termsOfService', data.TermsOfService); // Log the fetched data
        setTermsOfService(data.TermsOfService);
        setLoading(false); // Set loading to false after data is fetched
      });
  }, []);

  if (loading) {
    return <FullPageLoader />; // Show loader while loading
  }

  return (
    <>
      <section className="w-full p-6 md:p-12 bg-gray-50 text-gray-700">
        <div className="w-4/5 mx-auto flex flex-col items-start justify-start py-0">
          <h1 className="text-3xl font-bold mb-6">{termsOfService.title.title}</h1>
          {termsOfService.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold mt-6 mb-4">{section.heading}</h2>
              <p className="mb-4">{section.content}</p>
            </div>
          ))}
          <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
          <p className="mb-4">
           {termsOfService.title2.title2}
          </p>
          <address className="not-italic">
            <p>{termsOfService.contact.address}</p>
            <p>
              <a href={`mailto:${termsOfService.contact.email}`} className="text-blue-500 hover:underline">
                {termsOfService.contact.email}
              </a>
            </p>
          </address>
        </div>
      </section>
      <Footer />
    </>
  );
}
