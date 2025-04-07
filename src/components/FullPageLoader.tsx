import React from 'react';
import './FullPageLoader.css'; // Import styles for the loader
import Footer from '../pages/Footer';

interface FullPageLoaderProps {
  headerHeight?: number;
  footerHeight?: number;
}

const FullPageLoader: React.FC<FullPageLoaderProps> = ({ headerHeight = 80, footerHeight = 152 }) => {
  const loaderStyle = {
    height: `calc(100vh - ${headerHeight}px - ${footerHeight}px + 80px)`,
  };

  return (
    <>
      <div className="full-page-loader" style={loaderStyle}>
        <div className="skeleton skeleton-header"></div>
        <div className="skeleton skeleton-paragraph" style={loaderStyle}></div>
        <div className="skeleton skeleton-paragraph"></div>
       
      </div>
      <Footer />
    </>
  );
};

export default FullPageLoader;
