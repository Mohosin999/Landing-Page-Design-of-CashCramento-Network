import React from "react";
import Navbar from "./components/Navbar/page";
import HeaderImageArea from "./components/HeaderImageArea/page";
import HeroAreaOne from "./components/HeroAreaOne/page";
import HeroAreaTwo from "./components/HeroAreaTwo/page";
import Publishers from "./components/Publishers/page";
import PaymentSystems from "./components/PaymentSystems/page";
import OurTeam from "./components/OurTeam/page";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeaderImageArea />
      <HeroAreaOne />
      <div className="bg-sky-950">
        <HeroAreaTwo />
      </div>
      <Publishers />
      <PaymentSystems />
      <div className="bg-sky-950">
        <OurTeam />
      </div>
    </>
  );
};

export default HomePage;
