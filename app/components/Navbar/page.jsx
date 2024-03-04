"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi"; // Import React Icons
import NavButtonLink from "../UI/NavButtonLink/page";
import useThemeSwitcher from "../hooks/useThemeSwitcher";
// Icons
import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import BrandLogo from "../../../public/icons/brand_logo.png";

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="dark:bg-gray-800 shadow-lg">
        <div className="flex items-center justify-between px-6 py-4 lg:p-4 lg:px-14">
          {/**
           * =======================================================
           * Navbar logo, text and toggle menu icon for mobile menu.
           * =======================================================
           */}
          <div className="w-full block lg:hidden flex items-center justify-between">
            <div>
              <Link href="/">
                <div className="flex items-center">
                  <Image
                    src={BrandLogo}
                    alt="brand_image"
                    className="w-10 h-auto"
                  />
                  <h1 className="text-gray-900 dark:text-gray-200 font-bold text-xl">
                    ashCramento
                  </h1>
                </div>
              </Link>
            </div>

            <div>
              <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className="bg-sky-400 rounded-full p-2 mr-5"
              >
                {mode === "dark" ? (
                  <IoMdSunny size={20} className="fill-gray-900" />
                ) : (
                  <IoMdMoon size={20} className="fill-gray-900" />
                )}
              </button>

              <button onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? (
                  <HiX className="text-gray-900 dark:text-gray-200 text-2xl" />
                ) : (
                  <HiMenu className="text-gray-900 dark:text-gray-200 text-2xl" />
                )}
              </button>
            </div>
          </div>

          {/**
           * ========================
           * Navbar for large screen.
           * ========================
           */}
          <div className="hidden w-full lg:flex lg:items-center lg:justify-between">
            {/**
             * ========================
             * Left side logo and title
             * ========================
             */}
            <div>
              <Link href="/">
                <div className="flex items-center">
                  <Image
                    src={BrandLogo}
                    alt="brand_image"
                    className="w-12 h-auto"
                  />
                  <h1 className="text-gray-900 dark:text-gray-200 font-bold text-2xl">
                    ashCramento
                  </h1>
                </div>
              </Link>
            </div>

            {/**
             * ============
             * Center links
             * ============
             */}
            <div className="lg:space-x-8">
              <NavButtonLink title={"About"} href={"/about"} />
              <NavButtonLink title={"Advertisers"} href={"/advertisers"} />
              <NavButtonLink title={"Publishers"} href={"/publishers"} />
              <NavButtonLink title={"Contact Us"} href={"/contact"} />
            </div>

            {/**
             * ================
             * Right side links
             * ================
             */}
            <div className="lg:space-x-8">
              <NavButtonLink
                title={"Sign Up"}
                href={"https://cashcramento.affise.com/v2/sign/up"}
              />
              <NavButtonLink
                title={"Login"}
                href={"https://cashcramento.affise.com/v2/sign/in"}
              />

              <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className="bg-sky-400 rounded-full p-2"
              >
                {mode === "dark" ? (
                  <IoMdSunny size={20} className="fill-gray-900" />
                ) : (
                  <IoMdMoon size={20} className="fill-gray-900" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/**
         * =============================
         * Toogle menu's link for mobile
         * =============================
         */}
        {isMobileMenuOpen && (
          <div className="lg:hidden h-screen bg-gray-800">
            <div className="flex flex-col px-10 py-6">
              <Link
                href="/about"
                onClick={toggleMobileMenu}
                className="text-lg text-white uppercase hover:bg-green-800 border-b hover:border-none border-gray-300 mx-10 px-10 py-4"
              >
                About
              </Link>
              <Link
                href="/advertisers"
                onClick={toggleMobileMenu}
                className="text-lg text-white uppercase hover:bg-green-800 border-b hover:border-none border-gray-300 mx-10 px-10 py-4"
              >
                Advertisers
              </Link>
              <Link
                href="/publishers"
                onClick={toggleMobileMenu}
                className="text-lg text-white uppercase hover:bg-green-800 border-b hover:border-none border-gray-300 mx-10 px-10 py-4"
              >
                Publishers
              </Link>
              <Link
                href="/contact"
                onClick={toggleMobileMenu}
                className="text-lg text-white uppercase hover:bg-green-800 border-b hover:border-none border-gray-300 mx-10 px-10 py-4"
              >
                Contact Us
              </Link>
              <Link
                href="https://cashcramento.affise.com/v2/sign/up"
                onClick={toggleMobileMenu}
                className="text-lg text-white uppercase hover:bg-green-800 border-b hover:border-none border-gray-300 mx-10 px-10 py-4"
              >
                Sign Up
              </Link>
              <Link
                href="https://cashcramento.affise.com/v2/sign/in"
                onClick={toggleMobileMenu}
                className="text-lg text-white uppercase hover:bg-green-800 border-b hover:border-none border-gray-300 mx-10 px-10 py-4"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { HiMenu, HiX } from "react-icons/hi"; // Import React Icons
// import NavButtonLink from "../UI/NavButtonLink/page";
// import useThemeSwitcher from "../hooks/useThemeSwitcher";
// // Icons
// import { IoMdSunny } from "react-icons/io";
// import { IoMdMoon } from "react-icons/io";

// const Navbar = () => {
//   const [mode, setMode] = useThemeSwitcher();
//   // State to manage mobile menu visibility
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Function to toggle mobile menu
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <>
//       <nav className="text-gray-900 shadow-md shadow-sky-300">
//         <div className="flex items-center justify-between px-6 py-4 lg:p-4 lg:px-14">
//           {/**
//            * =======================================================
//            * Navbar logo, text and toggle menu icon for mobile menu.
//            * =======================================================
//            */}
//           <div className="w-full block lg:hidden flex items-center justify-between">
//             <div>
//               <Link href="/">
//                 <p className="bg-sky-400 text-gray-900 font-bold text-base px-4 py-2">
//                   CashCramento
//                 </p>
//               </Link>
//             </div>

//             <div>
//               <button
//                 onClick={() => setMode(mode === "light" ? "dark" : "light")}
//                 className="bg-sky-400 rounded-full p-2 mr-5"
//               >
//                 {mode === "dark" ? (
//                   <IoMdSunny size={20} className="fill-gray-900" />
//                 ) : (
//                   <IoMdMoon size={20} className="fill-gray-900" />
//                 )}
//               </button>

//               <button onClick={toggleMobileMenu}>
//                 {isMobileMenuOpen ? (
//                   <HiX className="text-gray-900 dark:text-gray-200 text-2xl" />
//                 ) : (
//                   <HiMenu className="text-gray-900 dark:text-gray-200 text-2xl" />
//                 )}
//               </button>
//             </div>
//           </div>

//           {/**
//            * ========================
//            * Navbar for large screen.
//            * ========================
//            */}
//           <div className="hidden w-full lg:flex lg:items-center lg:justify-between">
//             {/**
//              * ========================
//              * Left side logo and title
//              * ========================
//              */}
//             <div>
//               <Link href="/">
//                 <p className="bg-sky-400 text-gray-900 font-bold text-xl px-4 py-2">
//                   CashCramento
//                 </p>
//               </Link>
//             </div>

//             {/**
//              * ============
//              * Center links
//              * ============
//              */}
//             <div className="lg:space-x-8">
//               <NavButtonLink title={"About"} href={"/"} />
//               <NavButtonLink title={"Publishers"} href={"/"} />
//               <NavButtonLink title={"Advertisers"} href={"/"} />
//               <NavButtonLink title={"Contact Us"} href={"/"} />
//             </div>

//             {/**
//              * ================
//              * Right side links
//              * ================
//              */}
//             <div className="lg:space-x-8">
//               <NavButtonLink
//                 title={"Sign Up"}
//                 href={"https://cashcramento.affise.com/v2/sign/up"}
//               />
//               <NavButtonLink
//                 title={"Login"}
//                 href={"https://cashcramento.affise.com/v2/sign/in"}
//               />

//               <button
//                 onClick={() => setMode(mode === "light" ? "dark" : "light")}
//                 className="bg-sky-400 rounded-full p-2"
//               >
//                 {mode === "dark" ? (
//                   <IoMdSunny size={20} className="fill-gray-900" />
//                 ) : (
//                   <IoMdMoon size={20} className="fill-gray-900" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/**
//          * =============================
//          * Toogle menu's link for mobile
//          * =============================
//          */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden h-screen bg-gray-800">
//             <div className="flex flex-col px-10 py-6">
//               <Link
//                 href="/"
//                 onClick={toggleMobileMenu}
//                 className="text-lg text-white uppercase hover:bg-green-800 border-b hover:border-none border-gray-300 mx-10 px-10 py-4"
//               >
//                 About
//               </Link>
//               <Link
//                 href="/"
//                 onClick={toggleMobileMenu}
//                 className="text-lg text-white uppercase hover:bg-green-800 border-b hover:border-none border-gray-300 mx-10 px-10 py-4"
//               >
//                 Advertisers
//               </Link>
//               <Link
//                 href="/"
//                 onClick={toggleMobileMenu}
//                 className="text-lg text-white uppercase hover:bg-green-800 border-b hover:border-none border-gray-300 mx-10 px-10 py-4"
//               >
//                 Publishers
//               </Link>
//               <Link
//                 href="/"
//                 onClick={toggleMobileMenu}
//                 className="text-lg text-white uppercase hover:bg-green-800 border-b hover:border-none border-gray-300 mx-10 px-10 py-4"
//               >
//                 Contact Us
//               </Link>
//               <Link
//                 href="https://cashcramento.affise.com/v2/sign/up"
//                 onClick={toggleMobileMenu}
//                 className="text-lg text-white uppercase hover:bg-green-800 border-b hover:border-none border-gray-300 mx-10 px-10 py-4"
//               >
//                 Sign Up
//               </Link>
//               <Link
//                 href="https://cashcramento.affise.com/v2/sign/in"
//                 onClick={toggleMobileMenu}
//                 className="text-lg text-white uppercase hover:bg-green-800 border-b hover:border-none border-gray-300 mx-10 px-10 py-4"
//               >
//                 Login
//               </Link>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;
