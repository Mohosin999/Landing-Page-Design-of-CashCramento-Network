import React from "react";
import Layout from "../Layout/page";
import Image from "next/image";
import BrandLogo from "../../../public/icons/brand_logo.png";

const HeroAreaTwo = () => {
  return (
    <>
      <Layout className="px-6 lg:px-28">
        <div className="py-10 lg:py-16">
          {/**
           * ==============
           * Logo and Title
           * ==============
           */}
          <div className="flex flex-col lg:flex-row items-center justify-center mb-0 lg:mb-5">
            <Image
              src={BrandLogo}
              alt="Logo"
              className="w-16 h-auto md:w-14 lg:w-20"
            />
            <h1 className="text-gray-900 dark:text-gray-200 lg:ml-6 text-2xl md:text-3xl lg:text-5xl font-bold">
              Why CashCramento?
            </h1>
          </div>

          {/* <p className="mx-4 sm:mx-8 md:mx-36 mt-6 leading-7 text-base"> */}
          <p className="text-gray-800 dark:text-gray-300 text-center lg:mx-36 mt-6 leading-7 text-base lg:text-lg px-4 py-8 shadow-lg bg-gray-200 dark:shadow-gray-900 dark:bg-gray-800">
            CashCramento stands as the internets foremost affiliate network,
            catering to a wide array of offers spanning mainstream, niche, and
            adult content. With our unique selection of offers, you can unlock
            significant earnings from your display, social media, email, pop-up,
            and search traffic channels.
          </p>
        </div>
      </Layout>
    </>
  );
};

export default HeroAreaTwo;
