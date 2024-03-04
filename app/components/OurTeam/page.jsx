import React from "react";
import Image from "next/image";
import Layout from "../Layout/page";
import BrandLogo from "../../../public/icons/brand_logo.png";

import Member_01 from "../../../public/images/member_01.jpeg";
import Member_02 from "../../../public/images/member_02.jpeg";
import Member_03 from "../../../public/images/member_03.jpeg";
import Member_04 from "../../../public/images/member_04.jpeg";
import Member_05 from "../../../public/images/member_05.jpeg";
import Member_06 from "../../../public/images/member_06.jpeg";
import MemberDiv from "../UI/MemberDiv/page";

const OurTeam = () => {
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
            Our Socity
          </h1>
        </div>

        {/*
         * ==============
         * Member's list
         * ==============
         */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:mx-28 mt-6">
          <MemberDiv
            image={Member_01}
            h1={"Alexander Osmani"}
            h3={"CEO"}
            p={"partners@cashcramento.com"}
          />

          <MemberDiv
            image={Member_02}
            h1={"Antin"}
            h3={"Finance director"}
            p={"finance@cashcramento.com"}
          />

          <MemberDiv
            image={Member_03}
            h1={"Viktoria Diana"}
            h3={"Affiliate Manager"}
            p={"vd@cashcramento.com"}
          />

          <MemberDiv
            image={Member_04}
            h1={"Arthur"}
            h3={"Affiliate Manager"}
            p={"arthur@cashcramento.com"}
          />

          <MemberDiv
            image={Member_05}
            h1={"Ivan"}
            h3={"Business Development Manager"}
            p={"ivan@cashcramento.com"}
          />

          <MemberDiv
            image={Member_06}
            h1={"Yana Agagina"}
            h3={"CTO"}
            p={"yana@cashcramento.com"}
          />
        </div>
      </div>
    </Layout>
  );
};

export default OurTeam;
