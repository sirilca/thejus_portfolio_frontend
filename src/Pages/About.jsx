import React, { useEffect } from "react";
import NavbarSection from "../components/NavbarSection";
import FooterSection from "../components/FooterSection";
import AboutSection from "../components/AboutSection";
import { useData } from "../components/DataContext/DataContext";

function About() {




  return (
    <div>
      <NavbarSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
}

export default About;
