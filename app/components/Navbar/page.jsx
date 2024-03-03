"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi"; // Import React Icons
import NavButtonLink from "../UI/NavButtonLink/page";
import useThemeSwitcher from "../hooks/useThemeSwitcher";
// Icons
import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";

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
      <nav className="text-gray-900 shadow-md shadow-sky-300">
        <div className="flex items-center justify-between px-6 py-4 lg:p-4 lg:px-14">
          {/**
           * =======================================================
           * Navbar logo, text and toggle menu icon for mobile menu.
           * =======================================================
           */}
          <div className="w-full block lg:hidden flex items-center justify-between">
            <div>
              <Link href="/">
                <p className="bg-sky-400 text-gray-900 font-bold text-base px-4 py-2">
                  CashCramento
                </p>
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
                <p className="bg-sky-400 text-gray-900 font-bold text-xl px-4 py-2">
                  CashCramento
                </p>
              </Link>
            </div>

            {/**
             * ============
             * Center links
             * ============
             */}
            <div className="lg:space-x-8">
              <NavButtonLink title={"About"} href={"/"} />
              <NavButtonLink title={"Publishers"} href={"/"} />
              <NavButtonLink title={"Advertisers"} href={"/"} />
              <NavButtonLink title={"Contact Us"} href={"/"} />
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
                href="/"
                onClick={toggleMobileMenu}
                className="text-lg text-white uppercase hover:bg-green-800 border-b hover:border-none border-gray-300 mx-10 px-10 py-4"
              >
                About
              </Link>
              <Link
                href="/"
                onClick={toggleMobileMenu}
                className="text-lg text-white uppercase hover:bg-green-800 border-b hover:border-none border-gray-300 mx-10 px-10 py-4"
              >
                Advertisers
              </Link>
              <Link
                href="/"
                onClick={toggleMobileMenu}
                className="text-lg text-white uppercase hover:bg-green-800 border-b hover:border-none border-gray-300 mx-10 px-10 py-4"
              >
                Publishers
              </Link>
              <Link
                href="/"
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

// const Navbar = () => {
//   // State to manage mobile menu visibility
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Function to toggle mobile menu
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <>
//       <nav className="bg-red-600 text-white shadow-md">
//         <div className="flex items-center justify-between px-6 py-4 lg:p-4 lg:px-14">
//           {/* Logo text */}
//           <Link href="/">
//             <p className="bg-gray-200 text-red-600 font-bold text-xl px-4 py-2">
//               CashCramento
//             </p>
//           </Link>

//           {/* Mobile Menu Icon */}
//           <div className="block lg:hidden">
//             <button onClick={toggleMobileMenu}>
//               {isMobileMenuOpen ? (
//                 <HiX className="text-white text-2xl" />
//               ) : (
//                 <HiMenu className="text-white text-2xl" />
//               )}
//             </button>
//           </div>

//           {/* Links */}
//           <div className="hidden lg:flex lg:space-x-12 xl:space-x-20">
//             <Link
//               href="/"
//               className="text:lg lg:text-base xl:text-lg uppercase hover:scale-110 duration-300 active:scale-95"
//             >
//               <span className="relative">About</span>
//             </Link>
//             <Link
//               href="/"
//               className="text:lg lg:text-base xl:text-lg uppercase hover:scale-110 duration-300 active:scale-95"
//             >
//               <span className="relative">Advertisers</span>
//             </Link>
//             <Link
//               href="/"
//               className="text:lg lg:text-base xl:text-lg uppercase hover:scale-110 duration-300 active:scale-95"
//             >
//               <span className="relative">Publishers</span>
//             </Link>
//             <Link
//               href="https://cashcramento.affise.com/v2/sign/up"
//               className="text:lg lg:text-base xl:text-lg uppercase hover:scale-110 duration-300 active:scale-95"
//             >
//               <span className="relative">Sign Up</span>
//             </Link>
//             <Link
//               href="https://cashcramento.affise.com/v2/sign/in"
//               className="text:lg lg:text-base xl:text-lg uppercase hover:scale-110 duration-300 active:scale-95"
//             >
//               <span className="relative">Login</span>
//             </Link>
//             <Link
//               href="/"
//               className="text:lg lg:text-base xl:text-lg uppercase hover:scale-110 duration-300 active:scale-95"
//             >
//               <span className="relative">Contact Us</span>
//             </Link>
//           </div>
//         </div>

//         {/* Mobile Menu */}
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
//               <Link
//                 href="/"
//                 onClick={toggleMobileMenu}
//                 className="text-lg text-white uppercase hover:bg-green-800 border-b hover:border-none border-gray-300 mx-10 px-10 py-4"
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;
