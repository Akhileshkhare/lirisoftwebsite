import React from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO

const ProductsPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Products - Lirisoft</title>
        <meta
          name="description"
          content="Explore the innovative products we offer to enhance your business. Secure and scalable solutions tailored to your needs."
        />
      </Helmet>
      {/* Add your product page content here */}
    </>
  );
};

export default ProductsPage;