import React from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO

const ServicePage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Lirisoft</title>
        <meta
          name="description"
          content="Invent, build, integrate, scale and upgrade your applications with Lirisoft! We deliver high-quality software solutions and a wide range of related professional services."
        />
      </Helmet>
      {/* Add your service page content here */}
    </>
  );
};

export default ServicePage;