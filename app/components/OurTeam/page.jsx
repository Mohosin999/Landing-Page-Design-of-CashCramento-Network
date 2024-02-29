import React from "react";
import Image from "next/image";
import Layout from "../Layout/page";
import Logo2 from "../../../public/images/logo2.jpeg";

import Member_01 from "../../../public/images/member_01.jpeg";
import Member_02 from "../../../public/images/member_02.jpeg";
import Member_03 from "../../../public/images/member_03.jpeg";
import Member_04 from "../../../public/images/member_04.jpeg";
import Member_05 from "../../../public/images/member_05.jpeg";
import Member_06 from "../../../public/images/member_06.jpeg";

const OurTeam = () => {
  return (
    <Layout className="px-6 lg:px-28">
      <div className="py-14 lg:py-20">
        {/* Logo and Title */}
        <div className="flex flex-col lg:flex-row items-center justify-start">
          {/* Adjust logo size for mobile or tablet */}
          <div className="w-16 h-auto w-12 md:w-14 lg:w-20 mb-3">
            <Image src={Logo2} alt="Logo" />
          </div>
          <h1 className="text-gray-200 lg:ml-14 text-3xl md:text-4xl lg:text-6xl font-bold text">
            Our CashCraments
          </h1>
        </div>

        {/*
         * ==============
         * Member's list
         * ==============
         */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:mx-28 mt-10 lg:mt-16">
          <div className="flex flex-col items-center justify-center">
            <div className="">
              <Image
                src={Member_01}
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            <h1 className="text-white mt-5 font-bold text-lg lg:text-xl">
              Alexander Osmani
            </h1>
            <h3 className="text-gray-200 mt-1 text-base lg:text-lg">CEO</h3>
            <p className="text-gray-300 mt-1 mb-10 text-sm lg:text-base">
              Email: partners@cashcramento.com
            </p>
          </div>

          <div className="flex flex-col items-center justify-center mt-2 md:mt-0">
            <div className="">
              <Image
                src={Member_02}
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            <h1 className="text-white mt-5 font-bold text-lg lg:text-xl">
              Antin
            </h1>
            <h3 className="text-gray-200 mt-1 text-base lg:text-lg">
              Finance director
            </h3>
            <p className="text-gray-300 mt-1 mb-10 text-sm lg:text-base">
              Email: finance@cashcramento.com
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="">
              <Image
                src={Member_03}
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            <h1 className="text-white mt-5 font-bold text-lg lg:text-xl">
              Viktoria Diana
            </h1>
            <h3 className="text-gray-200 mt-1 text-base lg:text-lg">
              Affiliate Manager
            </h3>
            <p className="text-gray-300 mt-1 mb-10 text-sm lg:text-base">
              Email: vd@cashcramento.com
            </p>
          </div>

          <div className="flex flex-col items-center justify-center mt-2 md:mt-0">
            <div className="">
              <Image
                src={Member_04}
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            <h1 className="text-white mt-5 font-bold text-lg lg:text-xl">
              AN Nishan
            </h1>
            <h3 className="text-gray-200 mt-1 text-base lg:text-lg">
              Affiliate Manager
            </h3>
            <p className="text-gray-300 mt-1 mb-10 text-sm lg:text-base">
              Email: nishan@cashcramento.com
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="">
              <Image
                src={Member_05}
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            <h1 className="text-white mt-5 font-bold text-lg lg:text-xl">
              Mohosin
            </h1>
            <h3 className="text-gray-200  mt-1 text-base lg:text-lg">
              Business Development Manager
            </h3>
            <p className="text-gray-300 mt-1 mb-10 text-sm lg:text-base">
              Email: mohosin@cashcramento.com
            </p>
          </div>

          <div className="flex flex-col items-center justify-center mt-2 md:mt-0">
            <div className="">
              <Image
                src={Member_06}
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            <h1 className="text-white mt-5 font-bold text-lg lg:text-xl">
              Yana Agagina
            </h1>
            <h3 className="text-gray-200 mt-1 text-base lg:text-lg">CTO</h3>
            <p className="text-gray-300 mt-1 mb-10 text-sm lg:text-base">
              Email: yana@cashcramento.com
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OurTeam;
