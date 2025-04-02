import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import HomePageSection from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Product from "./pages/Product";
import Career from "./pages/Career";
import CaseStudies from "./pages/home/CaseStudies";
import CaseStudyDetails from "./pages/home/CaseStudyDetails";
import CMSDashboard from "./components/CMSDashboard";
import AdminLogin from "./pages/admin/AdminLogin"; // Import AdminLogin
import AdminLayout from "./components/AdminLayout";

const App = () => {
  return (
    <Router>
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
        <Route
          path="/services"
          element={
            <DefaultLayout>
              <Services />
            </DefaultLayout>
          }
        />
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
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/*"
          element={
            <AdminLayout>
              <CMSDashboard />
            </AdminLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;