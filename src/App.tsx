import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import HomePageSection from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";

const Services = () => <div className="w-4/5 mx-auto py-10">Services Page</div>;
const Portfolio = () => <div className="w-4/5 mx-auto py-10">Portfolio Page</div>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePageSection />} />
        <Route path="/home" element={<HomePageSection />} />

        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;