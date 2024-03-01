import React from "react";
import Layout from "../Layout/page";
import Image from "next/image";
import Logo2 from "../../../public/images/logo2.jpeg";

const HeroAreaOne = () => {
  return (
    <>
      <Layout className="px-6 lg:px-28">
        <div className="py-14 lg:py-20">
          {/* Logo and Title */}
          <div className="flex flex-col lg:flex-row items-center justify-start">
            {/* Adjust logo size for mobile or tablet */}
            <div className="w-16 h-auto w-12 md:w-14 lg:w-20 mb-3">
              <Image src={Logo2} alt="Logo" />
            </div>
            <h1 className="lg:ml-14 text-3xl md:text-4xl lg:text-6xl font-bold uppercase">
              What Makes CashCramento Stand Out?
            </h1>
          </div>

          {/* <p className="mx-4 sm:mx-8 md:mx-36 mt-6 leading-7 text-base"> */}
          <p className="text-center lg:text-start lg:mx-36 mt-6 leading-7 text-base lg:text-lg">
            CashCramento stands as the internet's foremost affiliate network,
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

export default HeroAreaOne;
