import React, { useState, useEffect } from 'react';
import Section1 from './home/Section1';
import { Section2 } from './home/Section2';
import { Section3 } from './home/Section3';
import { Section4 } from './home/Section4';
import { Section5 } from './home/Section5';
import { Section6 } from './home/Section6';
import { Section7 } from './home/Section7';
import { Section8 } from './home/Section8';
import Footer from './Footer';
import FullPageLoader from '../components/FullPageLoader'; 
import { API_BASE_URI } from '../config/apiConfig'; // Import the API base URI
import { Helmet } from 'react-helmet'; // Import Helmet for SEO

type SectionData = {
  section1?: any;
  section2?: any;
  section3?: any;
  section4?: any;
  section5?: any;
  section6?: any;
  section7?: any;
  section8?: any;
};

const HomePageSection = () => {
  const [sectionData, setSectionData] = useState<SectionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URI}/api/homepage`) // Use the global API URI
      .then((response) => response.json())
      .then((data) => {
        setSectionData(data.Home);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching JSON:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <>
    <FullPageLoader/>
    </>; 
  }

  return (
    <>
      <Helmet>
        <title>Lirisoft - Vision Into Innovation</title>
        <meta
          name="description"
          content="Fueled by a passion for digital transformation, we harness the latest technological breakthroughs to craft solutions that solve today’s challenges and future-proof your business."
        />
      </Helmet>
      <Section1 data={sectionData?.section1} />
      <Section2 data={sectionData?.section2} />
      <Section3 data={sectionData?.section3} />
      <Section4 data={sectionData?.section4} />
      <Section5 data={sectionData?.section5} />
      {/* <Section6 data={sectionData?.section6} /> */}
      <Section7 data={sectionData?.section7} />
      {/* <Section8 data={sectionData?.section8} /> */}
      <Footer />
    </>
  );
};

export default HomePageSection;
