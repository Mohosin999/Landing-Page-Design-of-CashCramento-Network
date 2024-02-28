import React from "react";
import Image from "next/image";
import Layout from "../Layout/page";
import Logo2 from "../../../public/images/logo2.jpg";
import first from "../../../public/membersIcon/first.png";
import second from "../../../public/membersIcon/second.png";
import third from "../../../public/membersIcon/third.png";
import fourth from "../../../public/membersIcon/fourth.png";
import fifth from "../../../public/membersIcon/fifth.png";
import six from "../../../public/membersIcon/six.png";

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
          <h1 className="text-gray-200 lg:ml-14 text-3xl md:text-4xl lg:text-6xl font-bold">
            Why CashCramento
          </h1>
        </div>

        {/*
         * ==============
         * Member's list
         * ==============
         */}
        <div className="text-gray-300 flex flex-wrap flex-col lg:flex-row items-center justify-between lg:mx-28 mt-10 lg:mt-16">
          {/* Left side two icons - start */}
          <div>
            <div className="flex flex-col items-center justify-center">
              <div className="">
                <Image src={first} className="w-32 h-auto" />
              </div>
              <h1 className="mt-5 font-bold text-xl lg:text-2xl">
                Alexander Osmani
              </h1>
              <h2 className="mt-1 text-lg lg:text-xl">CEO</h2>
              <p className="mt-1 mb-10 text-md lg:text-base">
                Email: demo@cashcramento.com
              </p>
            </div>

            <div className="flex flex-col items-center justify-center mt-2 lg:mt-4">
              <div className="">
                <Image src={fourth} className="w-32 h-auto" />
              </div>
              <h1 className="mt-5 font-bold text-xl lg:text-2xl">Antin</h1>
              <h2 className="mt-1 text-lg lg:text-xl">Finance director</h2>
              <p className="mt-1 mb-10  text-md lg:text-base">
                Email: demo@cashcramento.com
              </p>
            </div>
          </div>
          {/* Left side two icons - end */}

          {/* Middle side two icons - start */}
          <div>
            <div className="flex flex-col items-center justify-center">
              <div className="">
                <Image src={second} className="w-32 h-auto" />
              </div>
              <h1 className="mt-5 font-bold text-xl lg:text-2xl">
                Viktoria Diana
              </h1>
              <h2 className="mt-1 text-lg lg:text-xl">Affiliate Manager</h2>
              <p className="mt-1 mb-10 text-md lg:text-base">
                Email: demo@cashcramento.com
              </p>
            </div>

            <div className="flex flex-col items-center justify-center mt-2 lg:mt-4">
              <div className="">
                <Image src={fifth} className="w-32 h-auto" />
              </div>
              <h1 className="mt-5 font-bold text-xl lg:text-2xl">AN Nishan</h1>
              <h2 className="mt-1 text-lg lg:text-xl">Affiliate Manager</h2>
              <p className="mt-1 mb-10 text-md lg:text-base">
                Email: demo@cashcramento.com
              </p>
            </div>
          </div>
          {/* Middle side two icons - end */}

          {/* Right side two icons - start */}
          <div>
            <div className="flex flex-col items-center justify-center">
              <div className="">
                <Image src={third} className="w-32 h-auto" />
              </div>
              <h1 className="mt-5 font-bold text-xl lg:text-2xl">Ola Sherm</h1>
              <h2 className="mt-1 text-lg lg:text-xl">
                Business Development Manager
              </h2>
              <p className="mt-1 mb-10 text-md lg:text-base">
                Email: demo@cashcramento.com
              </p>
            </div>

            <div className="flex flex-col items-center justify-center  mt-2 lg:mt-4">
              <div className="">
                <Image src={six} className="w-32 h-auto" />
              </div>
              <h1 className="mt-5 font-bold text-xl lg:text-2xl">Igor</h1>
              <h2 className="mt-1 text-lg lg:text-xl">CTO</h2>
              <p className="mt-1 mb-10 text-md lg:text-base">
                Email: demo@cashcramento.com
              </p>
            </div>
          </div>
          {/* Right side two icons - end */}
        </div>
      </div>
    </Layout>
  );
};

export default OurTeam;
