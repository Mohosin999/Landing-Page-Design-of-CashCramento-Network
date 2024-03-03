import React from "react";
import Layout from "../Layout/page";
import Image from "next/image";
import Logo2 from "../../../public/images/logo2.jpeg";
import Icon1 from "../../../public/icons/icon1.png";
import Icon2 from "../../../public/icons/icon2.png";
import Icon3 from "../../../public/icons/icon3.png";
import Icon4 from "../../../public/icons/icon4.png";
import Icon5 from "../../../public/icons/icon5.png";
import Icon6 from "../../../public/icons/icon6.png";
import PublisherItem from "../UI/PublisherItem/page";

const Publishers = () => {
  return (
    <Layout className="px-6 lg:px-28">
      <div className="py-10 lg:py-16">
        {/* Logo and Title */}
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Adjust logo size for mobile or tablet */}
          <div className="w-16 h-auto w-12 md:w-14 lg:w-20 mb-3">
            <Image src={Logo2} alt="Logo" />
          </div>
          <h1 className="text-gray-900 dark:text-gray-200 lg:ml-14 text-2xl md:text-3xl lg:text-5xl font-bold">
            Publishers
          </h1>
        </div>

        {/* Publishers items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:mx-28 text-gray-800 dark:text-gray-300 mt-12 lg:mt-16">
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
