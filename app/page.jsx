import React from "react";
import Navbar from "./components/Navbar/page";
import HeaderImageArea from "./components/HeaderImageArea/page";
import HeroAreaOne from "./components/HeroAreaOne/page";
import HeroAreaTwo from "./components/HeroAreaTwo/page";
import Publishers from "./components/Publishers/page";
import PaymentSystems from "./components/PaymentSystems/page";
import OurTeam from "./components/OurTeam/page";
import Contact from "./components/Contact/page";
import Footer from "./components/Footer/page";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeaderImageArea />

      <HeroAreaOne />

      <div className="bg-sky-950">
        <HeroAreaTwo />
      </div>

      <div className="bg-gray-200">
        <Publishers />
      </div>

      <PaymentSystems />

      <div className="bg-green-950">
        <OurTeam />
      </div>

      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
