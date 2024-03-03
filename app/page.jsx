import React from "react";
import HeroArea from "./components/HeroArea/page";
import HeroAreaTwo from "./components/HeroAreaTwo/page";
import Advertisers from "./components/Advertisers/page";
import Publishers from "./components/Publishers/page";
import PaymentSystems from "./components/PaymentSystems/page";
import OurTeam from "./components/OurTeam/page";
import Contact from "./components/Contact/page";

const HomePage = () => {
  return (
    <>
      <HeroArea />
      
      <HeroAreaTwo />

      <Advertisers />

      <Publishers />

      <PaymentSystems />

      <OurTeam />

      <Contact />
    </>
  );
};

export default HomePage;
