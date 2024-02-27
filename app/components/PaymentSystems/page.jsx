import React from "react";
import Image from "next/image";
import Layout from "../Layout/page";
import Logo2 from "../../../public/images/logo2.jpg";
import WebMoney from "../../../public/icons/webmoney.png";
import Tether from "../../../public/icons/tether.png";
import Payoneer from "../../../public/icons/payoneer.png";
import WireTransfer from "../../../public/icons/wiretransfer.png";

const PaymentSystems = () => {
  return (
    <Layout>
      <div className="py-20 text-black">
        <div className="flex items-center justify-start">
          <Image src={Logo2} className="w-20 h-auto" />
          <h1 className="ml-14 text-6xl font-bold">Payment Systems</h1>
        </div>

        {/* Lists */}
        <div className="flex items-center justify-between mx-36 mr-40">
          <Image src={WebMoney} className="w-44 h-auto" />
          <Image src={Tether} className="w-44 h-auto" />
          <Image src={Payoneer} className="w-44 h-auto" />
          <Image src={WireTransfer} className="w-44 h-auto" />
        </div>
      </div>
    </Layout>
  );
};

export default PaymentSystems;
