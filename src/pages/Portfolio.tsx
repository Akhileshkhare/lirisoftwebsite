import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO
import Footer from './Footer';
import FullPageLoader from '../components/FullPageLoader';
import {Section1} from './portfolio/Section1';
import {Section2} from './portfolio/Section2';
import {Section3} from './portfolio/Section3';
import {Section4} from './portfolio/Section4';
import {Section5} from './portfolio/Section5';
import {Section6} from './portfolio/Section6';
import { API_BASE_URI } from '../config/apiConfig';
import ProductPage from './Product';


type SectionData = {
  section1?: any;
  section2?: any;
  section3?: any;
  section4?: any;
  section5?: any;
  section6?: any;
};

const PortfolioPage = () => {
  const [sectionData, setSectionData] = useState<SectionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URI}/api/homepage`) 
      .then((response) => response.json())
      .then((data) => {
        setSectionData(data.Portfolio);
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
      <Helmet>
        <title>Our Portfolio - Lirisoft</title>
        <meta
          name="description"
          content="Take a look at some of our work. For over half a decade, Lirisoft has been passionately engaged in offering all-inclusive IT solutions to clients from diverse industries."
        />
      </Helmet>
      <Section1 data={sectionData?.section1} />
      <Section2 data={sectionData?.section2} />
      {/* <Section3 data={sectionData?.section3} /> */}
      <Section4 data={sectionData?.section4} />
      {/* <Section5 data={sectionData?.section5} />
      <Section6 data={sectionData?.section6} /> */}
      <ProductPage />
      <Footer />
    </>
  );
};

export default PortfolioPage;
