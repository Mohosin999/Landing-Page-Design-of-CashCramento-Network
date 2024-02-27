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
    <Layout>
      <div className="py-20">
        <div className="flex items-center justify-start">
          <Image src={Logo2} className="w-20 h-auto" />
          <h1 className="ml-14 text-6xl font-bold">Our CashCramento</h1>
        </div>

        <div className="flex flex-wrap items-center justify-between mx-28 mt-16">
          {/* Left side two icons - start */}
          <div>
            <div className="flex flex-col items-center justify-center">
              <div className="">
                <Image src={first} className="w-32 h-auto" />
              </div>
              <h1 className="mt-5 font-bold text-xl">Alexander Osmani</h1>
              <h2 className="mt-1 text-lg">CEO</h2>
              <p className="mt-1 mb-10 text-md">Email: demo@cashcramento.com</p>
            </div>

            <div className="flex flex-col items-center justify-center mt-4">
              <div className="">
                <Image src={fourth} className="w-32 h-auto" />
              </div>
              <h1 className="mt-5 font-bold text-xl">Antin</h1>
              <h2 className="mt-1 text-lg">Finance director</h2>
              <p className="mt-1 mb-10 text-md">Email: demo@cashcramento.com</p>
            </div>
          </div>
          {/* Left side two icons - end */}

          {/* Middle side two icons - start */}
          <div>
            <div className="flex flex-col items-center justify-center">
              <div className="">
                <Image src={second} className="w-32 h-auto" />
              </div>
              <h1 className="mt-5 font-bold text-xl">Viktoria Diana</h1>
              <h2 className="mt-1 text-lg">Affiliate Manager</h2>
              <p className="mt-1 mb-10 text-md">Email: demo@cashcramento.com</p>
            </div>

            <div className="flex flex-col items-center justify-center mt-4">
              <div className="">
                <Image src={fifth} className="w-32 h-auto" />
              </div>
              <h1 className="mt-5 font-bold text-xl">AN Nishan</h1>
              <h2 className="mt-1 text-lg">Affiliate Manager</h2>
              <p className="mt-1 mb-10 text-md">Email: demo@cashcramento.com</p>
            </div>
          </div>
          {/* Middle side two icons - end */}

          {/* Right side two icons - start */}
          <div>
            <div className="flex flex-col items-center justify-center">
              <div className="">
                <Image src={third} className="w-32 h-auto" />
              </div>
              <h1 className="mt-5 font-bold text-xl">Ola Sherm</h1>
              <h2 className="mt-1 text-lg">Business Development Manager</h2>
              <p className="mt-1 mb-10 text-md">Email: demo@cashcramento.com</p>
            </div>

            <div className="flex flex-col items-center justify-center mt-4">
              <div className="">
                <Image src={six} className="w-32 h-auto" />
              </div>
              <h1 className="mt-5 font-bold text-xl">Igor</h1>
              <h2 className="mt-1 text-lg">CTO</h2>
              <p className="mt-1 mb-10 text-md">Email: demo@cashcramento.com</p>
            </div>
          </div>
          {/* Right side two icons - end */}
        </div>
      </div>
    </Layout>
  );
};

export default OurTeam;
