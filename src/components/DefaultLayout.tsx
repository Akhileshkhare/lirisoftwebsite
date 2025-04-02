import React from "react";
import Navbar from "../component/Navbar";

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default DefaultLayout;
