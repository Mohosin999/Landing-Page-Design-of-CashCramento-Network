import React from "react";
import Image from "next/image";
import Layout from "../Layout/page";
import Logo2 from "../../../public/images/logo2.jpg";

const HeroAreaTwo = () => {
  return (
    <Layout>
      <div className="py-20 text-white">
        <div className="flex items-center justify-start">
          <Image src={Logo2} className="w-20 h-auto" />
          <h1 className="ml-14 text-6xl font-bold">Advertisers</h1>
        </div>

        {/* Lists */}
        <ul className="ml-36 mr-20 mt-6 leading-7 text-base list-disc">
          <li>We are always open for new partnership opportunities.</li>
          <li>
            We specialize in performance marketing, so as an advertiser you
            always know what you pay for. We truly care about the quality of the
            traffic we deliver, monitored traffic and publisher selection
            process guarantees quality results.
          </li>
          <li>
            We can help you to sell your product or service to millions of
            potential customers.
          </li>
          <li>
            We offer a simple, cost-efficient way to generate quality leads and
            sales through our internal inventory and extensive network of
            partners.
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default HeroAreaTwo;
