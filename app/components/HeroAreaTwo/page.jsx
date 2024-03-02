// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import Layout from "../Layout/page";
// import Logo2 from "../../../public/images/logo2.jpeg";

// const HeroAreaTwo = () => {
//   const [isInView, setIsInView] = useState(false);
//   const [visibleListItems, setVisibleListItems] = useState(0);
//   const listRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { rootMargin: "0px", threshold: 0.2 } // Adjust the threshold if needed
//     );

//     if (listRef.current) {
//       observer.observe(listRef.current);
//     }

//     return () => {
//       if (listRef.current) {
//         observer.unobserve(listRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (isInView) {
//       const timer = setTimeout(() => {
//         if (visibleListItems < 4) {
//           // Assuming you have 4 list items
//           setVisibleListItems((prev) => prev + 1);
//         }
//       }, 600); // Adjust the timeout duration as needed
//       return () => clearTimeout(timer);
//     }
//   }, [isInView, visibleListItems]);

//   return (
//     <Layout className="px-6 lg:px-28">
//       <div className="py-14 lg:py-20 text-white">
//         {/* Logo and Title */}
//         <div className="flex flex-col lg:flex-row items-center justify-start">
//           {/* Adjust logo size for mobile or tablet */}
//           <div className="w-16 h-auto w-12 md:w-14 lg:w-20 mb-3">
//             <Image src={Logo2} alt="Logo" />
//           </div>
//           <h1 className="lg:ml-14 text-3xl md:text-4xl lg:text-6xl font-bold uppercase">
//             Advertisers
//           </h1>
//         </div>

//         {/* Lists */}
//         <ul
//           ref={listRef}
//           className="mx-6 md:mx-10 lg:mx-0 lg:ml-36 lg:mr-20 mt-6 leading-7 text-base lg:text-lg"
//         >
//           <li
//             className={`p-4 ${
//               visibleListItems >= 1 ? "bg-sky-900 mb-2 rounded-lg" : ""
//             } transition-background duration-1000`}
//           >
//             We remain receptive to exploring fresh avenues for partnerships.
//           </li>

//           <li
//             className={`p-4 ${
//               visibleListItems >= 2 ? "bg-sky-800 mb-2 rounded-lg" : ""
//             } transition-background duration-1000`}
//           >
//             As experts in performance marketing, we ensure transparency in your
//             advertising investment, guaranteeing that you know precisely what
//             youre paying for. Our rigorous traffic monitoring and publisher
//             selection process underscore our commitment to delivering
//             high-quality results.
//           </li>

//           <li
//             className={`p-4 ${
//               visibleListItems >= 3 ? "bg-sky-900 mb-2 rounded-lg" : ""
//             } transition-background duration-1000`}
//           >
//             We possess the capability to assist you in reaching millions of
//             potential customers and effectively selling your product or service.
//           </li>

//           <li
//             className={`p-4 ${
//               visibleListItems >= 4 ? "bg-sky-800 mb-2 rounded-lg" : ""
//             } transition-background duration-1000`}
//           >
//             Our platform provides a straightforward, cost-effective solution for
//             generating high-quality leads and driving sales. Leveraging our
//             internal inventory and extensive partner network ensures optimal
//             results for your business.
//           </li>

//           <li
//             className={`p-4 ${
//               visibleListItems >= 4 ? "bg-sky-900 rounded-lg" : ""
//             } transition-background duration-1000`}
//           >
//             We present a straightforward and economical approach to cultivating
//             valuable leads and driving sales by leveraging both our internal
//             resources and vast network of partners.
//           </li>
//         </ul>
//       </div>
//     </Layout>
//   );
// };

// export default HeroAreaTwo;

import React from "react";
import Image from "next/image";
import Layout from "../Layout/page";
import Logo2 from "../../../public/images/logo2.jpg";

const HeroAreaTwo = () => {
  return (
    <Layout className="px-6 lg:px-28">
      <div className="py-14 lg:py-20 text-white">
        {/* Logo and Title */}
        <div className="flex flex-col lg:flex-row items-center justify-start">
          {/* Adjust logo size for mobile or tablet */}
          <div className="w-16 h-auto w-12 md:w-14 lg:w-20 mb-3">
            <Image src={Logo2} alt="Logo" />
          </div>
          <h1 className="lg:ml-14 text-3xl md:text-4xl lg:text-6xl font-bold">
            Advertisers
          </h1>
        </div>

        {/* Lists */}
        <ul className="mx-6 md:mx-10 lg:mx-0 lg:ml-36 lg:mr-20 mt-6 leading-7 text-base lg:text-lg list-disc">
          <li>
            We remain receptive to exploring fresh avenues for partnerships.
          </li>
          <li>
            As experts in performance marketing, we ensure transparency in your
            advertising investment, guaranteeing that you know precisely what
            youre paying for. Our rigorous traffic monitoring and publisher
            selection process underscore our commitment to delivering
            high-quality results.
          </li>
          <li>
            We possess the capability to assist you in reaching millions of
            potential customers and effectively selling your product or service.
          </li>
          <li>
            Our platform provides a straightforward, cost-effective solution for
            generating high-quality leads and driving sales. Leveraging our
            internal inventory and extensive partner network ensures optimal
            results for your business.
          </li>
          <li>
            We present a straightforward and economical approach to cultivating
            valuable leads and driving sales by leveraging both our internal
            resources and vast network of partners.
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default HeroAreaTwo;
