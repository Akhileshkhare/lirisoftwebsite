import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import HomePageSection from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Portfolio from "./pages/Portfolio";
import Product from "./pages/Product";
import Career from "./pages/Career";
import CaseStudies from "./pages/home/CaseStudies";
import CaseStudyDetails from "./pages/home/CaseStudyDetails";
import CMSDashboard from "./components/CMSDashboard";
import AdminLogin from "./pages/admin/AdminLogin"; // Import AdminLogin
import AdminLayout from "./components/AdminLayout";
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Partners from './pages/Partners'; // Import Partners page
import OurWork from './pages/OurWork'; // Import OurWork page
import Technology from "./pages/Technology"; // Import Technology page
import UxDesign from "./pages/services/UxDesign";
import AppDevelopment from "./pages/services/AppDevelopment";
import ApiDevelopment from "./pages/services/ApiDevelopment";
import Automation from "./pages/services/Automation";
import CyberSecurity from "./pages/services/CyberSecurity";
import ConsultationForm from "./pages/consultation/ConsultationForm"; // Import ConsultationForm page
import AppDetails from './pages/portfolio/AppDetails'; // Import AppDetails page
import { IndustryDetails } from "./pages/portfolio/IndustryDetails"; // Import IndustryDetails

// const ScrollToTop = () => {
//   const location = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location]);

//   return null;
// };

const App = () => {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <HomePageSection />
            </DefaultLayout>
          }
        />
        <Route
          path="/home"
          element={
            <DefaultLayout>
              <HomePageSection />
            </DefaultLayout>
          }
        />
        <Route
          path="/product"
          element={
            <DefaultLayout>
              <Product />
            </DefaultLayout>
          }
        />
        {/* <Route
          path="/services"
          element={
            <DefaultLayout>
              <Services />
            </DefaultLayout>
          }
        /> */}
        <Route
          path="/portfolio"
          element={
            <DefaultLayout>
              <Portfolio />
            </DefaultLayout>
          }
        />
        <Route
          path="/about"
          element={
            <DefaultLayout>
              <About />
            </DefaultLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <DefaultLayout>
              <ContactUs />
            </DefaultLayout>
          }
        />
        <Route
          path="/case-studies/:id"
          element={
            <DefaultLayout>
              <CaseStudyDetails />
            </DefaultLayout>
          }
        />
        <Route
          path="/case-studies"
          element={
            <DefaultLayout>
              <CaseStudies />
            </DefaultLayout>
          }
        />
        <Route
          path="/carrer"
          element={
            <DefaultLayout>
              <Career />
            </DefaultLayout>
          }
        />
        <Route path="/liri-cms-login" element={<AdminLogin />} />
        <Route
          path="/admin/*"
          element={
            <AdminLayout>
              <CMSDashboard />
            </AdminLayout>
          }
        />
        <Route path="/privacy-policy" element={  <DefaultLayout><PrivacyPolicy /></DefaultLayout>} />
        <Route path="/terms-of-service" element={  <DefaultLayout><TermsOfService /></DefaultLayout>} />
        <Route path="/partners" element={<DefaultLayout><Partners /></DefaultLayout>} /> {/* Add Partners route */}
        <Route path="/our-work" element={<DefaultLayout><OurWork /></DefaultLayout>} /> {/* Add OurWork route */}
        <Route path="/technologies" element={<DefaultLayout><Technology /></DefaultLayout>} /> {/* Added route */}
        <Route path="/consultation" element={<DefaultLayout><ConsultationForm /></DefaultLayout>} /> {/* Add ConsultationForm route */}
        <Route path="/app-details" element={<DefaultLayout><AppDetails /></DefaultLayout>} /> {/* Add AppDetails route */}
        <Route path="/industry/:slug" element={<DefaultLayout><IndustryDetails /></DefaultLayout>} /> {/* Add dynamic route */}
  <Route path="/services/UxDesign" element={<DefaultLayout><UxDesign /></DefaultLayout>} />
  <Route path="/services/AppDevelopment" element={<DefaultLayout><AppDevelopment /></DefaultLayout>} />
  <Route path="/services/ApiDevelopment" element={<DefaultLayout><ApiDevelopment /></DefaultLayout>} />
  <Route path="/services/Automation" element={<DefaultLayout><Automation /></DefaultLayout>} />
  <Route path="/services/CyberSecurity" element={<DefaultLayout><CyberSecurity /></DefaultLayout>} />
      </Routes>
    </Router>
  );
};

export default App;