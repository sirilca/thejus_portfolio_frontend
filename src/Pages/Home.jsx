import React, { useEffect, useRef, useState } from "react";
import NavbarSection from "../components/NavbarSection";
import HeroSection from "../components/HeroSection";
import BioSection from "../components/BioSection";
import BlogSection from "../components/BlogSection";
// import ActivitySection from "../components/ActivitySection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";
import Carousel from "../components/Carousel";
import ActivitySection from "../components/ActivitySection"
// import JourneySection from "../components/JourneySection";
// import MeditationSection from "../components/MeditationSection";

function Home() {

  const HomeRef = useRef(null);
  const MeditationRef = useRef(null);
  const ActivitiesRef = useRef(null);
  const AboutRef = useRef(null);
  const ContactRef = useRef(null);
  const executeScroll = (myref) => {
    if (myref == "Home") {
      HomeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (myref == "Meditation") {
      MeditationRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (myref == "Activities") {
      ActivitiesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (myref == "About") {
      AboutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (myref == "Contact") {
      ContactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  
  return (
    <div>
      <div className="md:flex flex-col w-[100%] overflow-hidden">
        <NavbarSection executeScroll={executeScroll} />
        <HeroSection HomeRef={HomeRef} />
        <BioSection />
        <BlogSection MeditationRef={MeditationRef} />
        <ActivitySection ActivitiesRef={ActivitiesRef} />
        {/* <ContactSection ContactRef={ContactRef} /> */}
        <FooterSection executeScroll={executeScroll} />
        {/* <JourneySection />
      <MeditationSection /> */}
      </div>
      
      {/* <div className="md:hidden flex items-center justify-center h-screen text-2xl">
        mobile version is under maintanance
      </div> */}
    </div>
  );
}

export default Home;

