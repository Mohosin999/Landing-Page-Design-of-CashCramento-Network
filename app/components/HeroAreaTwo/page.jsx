"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Layout from "../Layout/page";
import Logo2 from "../../../public/images/logo2.jpg";

const HeroAreaTwo = () => {
  const [isInView, setIsInView] = useState(false);
  const [visibleListItems, setVisibleListItems] = useState(0);
  const listRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px", threshold: 0.2 } // Adjust the threshold if needed
    );

    if (listRef.current) {
      observer.observe(listRef.current);
    }

    return () => {
      if (listRef.current) {
        observer.unobserve(listRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        if (visibleListItems < 4) {
          // Assuming you have 4 list items
          setVisibleListItems((prev) => prev + 1);
        }
      }, 600); // Adjust the timeout duration as needed
      return () => clearTimeout(timer);
    }
  }, [isInView, visibleListItems]);

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
        <ul
          ref={listRef}
          className="mx-6 md:mx-10 lg:mx-0 lg:ml-36 lg:mr-20 mt-6 leading-7 text-base lg:text-lg"
        >
          <li
            className={`p-4 ${
              visibleListItems >= 1 ? "bg-sky-900 mb-2 rounded-lg" : ""
            } transition-background duration-1000`}
          >
            We are always open for new partnership opportunities.
          </li>
          <li
            className={`p-4 ${
              visibleListItems >= 2 ? "bg-sky-800 mb-2 rounded-lg" : ""
            } transition-background duration-1000`}
          >
            We specialize in performance marketing, so as an advertiser you
            always know what you pay for. We truly care about the quality of the
            traffic we deliver, monitored traffic and publisher selection
            process guarantees quality results.
          </li>
          <li
            className={`p-4 ${
              visibleListItems >= 3 ? "bg-sky-900 mb-2 rounded-lg" : ""
            } transition-background duration-1000`}
          >
            We can help you to sell your product or service to millions of
            potential customers.
          </li>
          <li
            className={`p-4 ${
              visibleListItems >= 4 ? "bg-sky-800 rounded-lg" : ""
            } transition-background duration-1000`}
          >
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

// import React from "react";
// import Image from "next/image";
// import Layout from "../Layout/page";
// import Logo2 from "../../../public/images/logo2.jpg";

// const HeroAreaTwo = () => {
//   return (
//     <Layout className="px-6 lg:px-28">
//       <div className="py-14 lg:py-20 text-white">
//         {/* Logo and Title */}
//         <div className="flex flex-col lg:flex-row items-center justify-start">
//           {/* Adjust logo size for mobile or tablet */}
//           <div className="w-16 h-auto w-12 md:w-14 lg:w-20 mb-3">
//             <Image src={Logo2} alt="Logo" />
//           </div>
//           <h1 className="lg:ml-14 text-3xl md:text-4xl lg:text-6xl font-bold">
//             Advertisers
//           </h1>
//         </div>

//         {/* Lists */}
//         <ul className="mx-6 md:mx-10 lg:mx-0 lg:ml-36 lg:mr-20 mt-6 leading-7 text-base lg:text-lg list-disc">
//           <li>We are always open for new partnership opportunities.</li>
//           <li>
//             We specialize in performance marketing, so as an advertiser you
//             always know what you pay for. We truly care about the quality of the
//             traffic we deliver, monitored traffic and publisher selection
//             process guarantees quality results.
//           </li>
//           <li>
//             We can help you to sell your product or service to millions of
//             potential customers.
//           </li>
//           <li>
//             We offer a simple, cost-efficient way to generate quality leads and
//             sales through our internal inventory and extensive network of
//             partners.
//           </li>
//         </ul>
//       </div>
//     </Layout>
//   );
// };

// export default HeroAreaTwo;
