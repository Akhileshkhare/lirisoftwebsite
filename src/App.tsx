import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import HomePageSection from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Product from "./pages/Product";
import Career from "./pages/Career";
import CaseStudies from "./pages/home/CaseStudies";
import CaseStudyDetails from "./pages/home/CaseStudyDetails";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePageSection />} />
        <Route path="/home" element={<HomePageSection />} />
        <Route path="/product" element={<Product />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/casestudies" element={<ContactUs />} />
        <Route path="/case-studies/:id" element={<CaseStudyDetails />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/carrer" element={<Career />} />
      </Routes>
    </Router>
  );
};

export default App;