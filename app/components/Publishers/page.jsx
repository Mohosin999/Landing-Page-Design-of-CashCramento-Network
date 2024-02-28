import React from "react";
import Layout from "../Layout/page";
import Image from "next/image";
import Logo2 from "../../../public/images/logo2.jpg";
import Icon1 from "../../../public/icons/icon1.png";
import Icon2 from "../../../public/icons/icon2.png";
import Icon3 from "../../../public/icons/icon3.png";
import Icon4 from "../../../public/icons/icon4.png";
import Icon5 from "../../../public/icons/icon5.png";
import Icon6 from "../../../public/icons/icon6.png";

const Publishers = () => {
  return (
    <Layout className="px-6 lg:px-28">
      <div className="py-14 lg:py-20">
        {/* Logo and Title */}
        <div className="flex flex-col lg:flex-row items-center justify-start">
          {/* Adjust logo size for mobile or tablet */}
          <div className="w-16 h-auto w-12 md:w-14 lg:w-20 mb-3">
            <Image src={Logo2} alt="Logo" />
          </div>
          <h1 className="lg:ml-14 text-3xl md:text-4xl lg:text-6xl font-bold">
            Publishers
          </h1>
        </div>

        <div className="flex flex-wrap flex-col lg:flex-row items-center justify-between mx-6 md:mx-10 lg:mx-48 mt-12 lg:mt-16">
          {/* Left side two icons - start */}
          <div className="mb-3 lg:mt-0">
            <div className="flex flex-col items-center justify-center">
              <div className="">
                <Image src={Icon1} className="w-32 h-auto" />
              </div>
              <p className="mt-3 lg:mt-5 text-sm">
                Direct and exclusive offers
              </p>
            </div>

            <div className="flex flex-col items-center justify-center mt-4">
              <div className="">
                <Image src={Icon2} className="w-32 h-auto" />
              </div>
              <p className="mt-3 lg:mt-5 text-sm">Timely payouts Weekly</p>
            </div>
          </div>
          {/* Left side two icons - end */}

          {/* Middle side two icons - start */}
          <div className="mb-3 lg:mt-0">
            <div className="flex flex-col items-center justify-center">
              <div className="">
                <Image src={Icon3} className="w-32 h-auto" />
              </div>
              <p className="mt-3 lg:mt-5 text-sm">Multi Geo’s</p>
            </div>

            <div className="flex flex-col items-center justify-center mt-4">
              <div className="">
                <Image src={Icon4} className="w-32 h-auto" />
              </div>
              <p className="mt-3 lg:mt-5 text-sm">Delicated support</p>
            </div>
          </div>
          {/* Middle side two icons - end */}

          {/* Right side two icons - start */}
          <div className="mb-3 lg:mt-0">
            <div className="flex flex-col items-center justify-center">
              <div className="">
                <Image src={Icon5} className="w-32 h-auto" />
              </div>
              <p className="mt-3 lg:mt-5 text-sm">Referral program</p>
            </div>

            <div className="flex flex-col items-center justify-center mt-4">
              <div className="">
                <Image src={Icon6} className="w-32 h-auto" />
              </div>
              <p className="mt-3 lg:mt-5 text-sm">Promo/Creative materials</p>
            </div>
          </div>
          {/* Right side two icons - end */}
        </div>
      </div>
    </Layout>
  );
};

export default Publishers;
