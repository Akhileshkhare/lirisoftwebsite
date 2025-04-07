import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import FullPageLoader from '../components/FullPageLoader';
import {Section1} from './services/Section1';
import {Section2} from './services/Section2';
import {Section3} from './services/Section3';
import {Section4} from './services/Section4';
import {Section5} from './services/Section5';
import {Section6} from './services/Section6';
import { API_BASE_URI } from '../config/apiConfig';


type SectionData = {
  section1?: any;
  section2?: any;
  section3?: any;
  section4?: any;
  section5?: any;
  section6?: any;
};
const ServicesPage = () => {
  const [sectionData, setSectionData] = useState<SectionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URI}/api/homepage`) 
      .then((response) => response.json())
      .then((data) => {
        setSectionData(data.Service);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching JSON:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <FullPageLoader />;
  }

  return (
    <>
         <Section1 data={sectionData?.section1} />
          <Section2 data={sectionData?.section2} />
          <Section3 data={sectionData?.section3} />
          <Section4 data={sectionData?.section4} />
          <Section5 data={sectionData?.section5} />
          <Section6 data={sectionData?.section6} />
      <Footer />
    </>
  );
};

export default ServicesPage;
