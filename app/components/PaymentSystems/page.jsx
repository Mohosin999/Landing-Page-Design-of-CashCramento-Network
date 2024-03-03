"use client";
import React from "react";
import Image from "next/image";
import Layout from "../Layout/page";
import Logo2 from "../../../public/images/logo2.jpeg";
import WebMoney from "../../../public/icons/webmoney.png";
import Tether from "../../../public/icons/tether.png";
import Payoneer from "../../../public/icons/payoneer.png";
import WireTransfer from "../../../public/icons/wiretransfer.png";

const PaymentSystems = () => {
  return (
    <Layout className="px-6 lg:px-28">
      <div className="py-10 lg:py-16">
        {/**
         * ==============
         * Logo and Title
         * ==============
         */}
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Adjust logo size for mobile or tablet */}
          <div className="w-16 h-auto w-12 md:w-14 lg:w-20 mb-3">
            <Image src={Logo2} alt="Logo" />
          </div>
          <h1 className="text-gray-900 dark:text-gray-200 lg:ml-14 text-2xl md:text-3xl lg:text-5xl font-bold">
            Payment systems
          </h1>
        </div>

        {/* Lists */}
        <div className="flex flex-col lg:flex-row items-center justify-between xl:mx-36 xl:mr-40 lg:animate-marquee">
          <Image src={WebMoney} alt="photo" className="w-44 h-auto" />
          <Image src={Tether} alt="photo" className="w-44 h-auto" />
          <Image src={Payoneer} alt="photo" className="w-44 h-auto" />
          <Image src={WireTransfer} alt="photo" className="w-44 h-auto" />
        </div>
      </div>
    </Layout>
  );
};

export default PaymentSystems;
