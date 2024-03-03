import React from "react";
import Image from "next/image";
import Layout from "../Layout/page";
import Logo2 from "../../../public/images/logo2.jpeg";
import LI from "../UI/LI/page";

const Advertisers = () => {
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
            Advertisers
          </h1>
        </div>

        {/* Lists */}
        <ul className="text-center text-gray-800 dark:text-gray-300 mx-6 md:mx-10 lg:mx-0 lg:ml-36 lg:mr-20 mt-6 leading-7 text-base lg:text-lg">
          <div>
            <LI
              text={
                "We remain receptive to exploring fresh avenues for partnerships."
              }
            />
            <LI
              text={`As experts in performance marketing, we ensure transparency in
              your advertising investment, guaranteeing that you know precisely
              what youre paying for. Our rigorous traffic monitoring and
              publisher selection process underscore our commitment to
              delivering high-quality results.`}
            />
            <LI
              text={`We possess the capability to assist you in reaching millions of
                potential customers and effectively selling your product or
                service.`}
            />
            <LI
              text={`Our platform provides a straightforward, cost-effective solution
                for generating high-quality leads and driving sales. Leveraging
                our internal inventory and extensive partner network ensures
                optimal results for your business.`}
            />
            <LI
              text={`We present a straightforward and economical approach to
                cultivating valuable leads and driving sales by leveraging both
                our internal resources and vast network of partners.`}
            />
          </div>
        </ul>
      </div>
    </Layout>
  );
};

export default Advertisers;

// import React from "react";
// import Image from "next/image";
// import Layout from "../Layout/page";
// import Logo2 from "../../../public/images/logo2.jpeg";

// const Advertisers = () => {
//   return (
//     <Layout className="px-6 lg:px-28">
//       <div className="py-14 lg:py-20 text-white">
//         {/* Logo and Title */}
//         <div className="flex flex-col lg:flex-row items-center justify-center">
//           {/* Adjust logo size for mobile or tablet */}
//           <div className="w-16 h-auto w-12 md:w-14 lg:w-20 mb-3">
//             <Image src={Logo2} alt="Logo" />
//           </div>
//           <h1 className="text-gray-900 dark:text-gray-200 lg:ml-14 text-3xl md:text-4xl lg:text-6xl font-bold">
//             Advertisers
//           </h1>
//         </div>

//         {/* Lists */}
//         <ul className="text-gray-800 dark:text-gray-300 mx-6 md:mx-10 lg:mx-0 lg:ml-36 lg:mr-20 mt-6 leading-7 text-base lg:text-lg list-disc">
//           <li>
//             We remain receptive to exploring fresh avenues for partnerships.
//           </li>
//           <li>
//             As experts in performance marketing, we ensure transparency in your
//             advertising investment, guaranteeing that you know precisely what
//             youre paying for. Our rigorous traffic monitoring and publisher
//             selection process underscore our commitment to delivering
//             high-quality results.
//           </li>
//           <li>
//             We possess the capability to assist you in reaching millions of
//             potential customers and effectively selling your product or service.
//           </li>
//           <li>
//             Our platform provides a straightforward, cost-effective solution for
//             generating high-quality leads and driving sales. Leveraging our
//             internal inventory and extensive partner network ensures optimal
//             results for your business.
//           </li>
//           <li>
//             We present a straightforward and economical approach to cultivating
//             valuable leads and driving sales by leveraging both our internal
//             resources and vast network of partners.
//           </li>
//         </ul>
//       </div>
//     </Layout>
//   );
// };

// export default Advertisers;
