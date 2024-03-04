import React from "react";
import Image from "next/image";
import Layout from "../components/Layout/page";
import PublisherItem from "../components/UI/PublisherItem/page";
// icons and logo
import BrandLogo from "../../public/icons/brand_logo.png";
import Icon1 from "../../public/icons/icon1.png";
import Icon2 from "../../public/icons/icon2.png";
import Icon3 from "../../public/icons/icon3.png";
import Icon4 from "../../public/icons/icon4.png";
import Icon5 from "../../public/icons/icon5.png";
import Icon6 from "../../public/icons/icon6.png";

const Publishers = () => {
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
            Publishers
          </h1>
        </div>

        {/* Publishers items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:mx-28 text-gray-800 dark:text-gray-300 mt-6">
          <PublisherItem title={"Exclusive offers available"} image={Icon1} />
          <PublisherItem title={"Weekly payouts"} image={Icon2} />
          <PublisherItem title={"Multi-geographical regions"} image={Icon3} />
          <PublisherItem title={"Delicated support"} image={Icon4} />
          <PublisherItem title={"Delicated programs"} image={Icon5} />
          <PublisherItem title={"Inventive materials"} image={Icon6} />
        </div>
      </div>
    </Layout>
  );
};

export default Publishers;
