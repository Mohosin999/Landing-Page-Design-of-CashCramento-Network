import React from "react";
import Image from "next/image";
import Layout from "../components/Layout/page";
import BrandLogo from "../../public/icons/brand_logo.png";
import LI from "../components/UI/LI/page";

const Advertisers = () => {
  return (
    <Layout className="px-6 lg:px-28">
      <div className="py-10 lg:py-16">
        {/* Logo and Title */}
        <div className="flex flex-col lg:flex-row items-center justify-center mb-0 lg:mb-5">
          <Image
            src={BrandLogo}
            alt="Logo"
            className="w-16 h-auto md:w-14 lg:w-20"
          />
          <h1 className="text-gray-900 dark:text-gray-200 lg:ml-6 text-2xl md:text-3xl lg:text-5xl font-bold">
            Advertisers
          </h1>
        </div>

        {/* Lists */}
        <ul className="text-center text-gray-800 dark:text-gray-300 mx-6 md:mx-10 lg:mx-0 lg:ml-36 lg:mr-20 mt-6 leading-7 text-base lg:text-lg">
          <div>
            <LI
              text={
                "We remain receptive to exploring fresh avenues for partnerships."
              }
            />
            <LI
              text={`As experts in performance marketing, we ensure transparency in
              your advertising investment, guaranteeing that you know precisely
              what youre paying for. Our rigorous traffic monitoring and
              publisher selection process underscore our commitment to
              delivering high-quality results.`}
            />
            <LI
              text={`We possess the capability to assist you in reaching millions of
                potential customers and effectively selling your product or
                service.`}
            />
            <LI
              text={`Our platform provides a straightforward, cost-effective solution
                for generating high-quality leads and driving sales. Leveraging
                our internal inventory and extensive partner network ensures
                optimal results for your business.`}
            />
            <LI
              text={`We present a straightforward and economical approach to
                cultivating valuable leads and driving sales by leveraging both
                our internal resources and vast network of partners.`}
            />
          </div>
        </ul>
      </div>
    </Layout>
  );
};

export default Advertisers;
