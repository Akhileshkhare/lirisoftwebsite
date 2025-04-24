import React, { useEffect, useState } from 'react'
import {Section1} from './contact/Section1'
import {ContactForm} from './contact/Section2'
import Footer from './Footer'
import {Section3} from './contact/Section3'
import FullPageLoader from '../components/FullPageLoader'
import { API_BASE_URI } from '../config/apiConfig'

type SectionData = {
  section1?: any;
  section2?:any;
  section3?:any;
};

export default function ContactUs() {
  const [sectionData, setSectionData] = useState<SectionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URI}/api/homepage`) 
      .then((response) => response.json())
      .then((data) => {
        setSectionData(data.Contact);
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
      <Section1  data={sectionData?.section1} data1={sectionData?.section2}></Section1>
           
        {/* <Section3  data={sectionData?.section3}></Section3> */}
       <Footer></Footer>
    </>
  )
}
