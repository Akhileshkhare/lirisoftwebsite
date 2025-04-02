import React from "react";

import Footer from "./Footer";
import Section1 from "./products/Section1";
import Section2 from "./products/Section2";
import Section3 from "./products/Section3";
import Section4 from "./products/Section4";
import Section5 from "./products/Section5";

export default function Product() {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <Section1 />
        <Section2></Section2>
        <Section3></Section3>
        <Section4></Section4>
        <Section5></Section5>
      </div>

      <Footer />
    </>
  );
}
