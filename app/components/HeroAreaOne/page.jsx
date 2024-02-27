import React from "react";
import Layout from "../Layout/page";
import Image from "next/image";
import Logo2 from "../../../public/images/logo2.jpg";

const HeroAreaOne = () => {
  return (
    <>
      <Layout>
        <div className="py-20">
          <div className="flex items-center justify-start">
            <Image src={Logo2} className="w-20 h-auto" />
            <h1 className="ml-14 text-6xl font-bold">Why CashCramento</h1>
          </div>
          <p className="mx-36 mt-6 leading-7 text-base">
            CashCramento is the web’s premier affiliate network specializing in
            mainstream, niche, and adult offers. Our exclusive offers help you
            make massive cash off your display, social, email, pop, and search
            traffic.
          </p>
        </div>
      </Layout>
    </>
  );
};

export default HeroAreaOne;
