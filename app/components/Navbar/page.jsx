"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi"; // Import React Icons

const Navbar = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-red-600 text-white shadow-md">
        <div className="flex items-center justify-between px-6 py-4 lg:p-4 lg:px-14">
          {/* Logo text */}
          <Link href="/">
            <p className="bg-gray-200 text-red-600 font-bold text-xl px-4 py-2">
              CashCramento
            </p>
          </Link>

          {/* Mobile Menu Icon */}
          <div className="block lg:hidden">
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <HiX className="text-white text-2xl" />
              ) : (
                <HiMenu className="text-white text-2xl" />
              )}
            </button>
          </div>

          {/* Links */}

          {/* <div className="hidden lg:flex space-x-24">
            <Link
              href="/"
              className="text-lg uppercase hover:scale-110 duration-300 active:scale-95"
            >
              <span className="relative">About</span>
            </Link>
            <Link
              href="/"
              className="text-lg uppercase hover:scale-110 duration-300 active:scale-95"
            >
              <span className="relative">Advertisers</span>
            </Link>
            <Link
              href="/"
              className="text-lg uppercase hover:scale-110 duration-300 active:scale-95"
            >
              <span className="relative">Publishers</span>
            </Link>
            <Link
              href="https://cashcramento.affise.com/v2/sign/up"
              className="text-lg uppercase hover:scale-110 duration-300 active:scale-95"
            >
              <span className="relative">Sign Up</span>
            </Link>
            <Link
              href="https://cashcramento.affise.com/v2/sign/in"
              className="text-lg uppercase hover:scale-110 duration-300 active:scale-95"
            >
              <span className="relative">Login</span>
            </Link>
            <Link
              href="/"
              className="text-lg uppercase hover:scale-110 duration-300 active:scale-95"
            >
              <span className="relative">Contact Us</span>
            </Link>
          </div> */}

          <div className="hidden lg:flex lg:space-x-12 xl:space-x-20">
            <Link
              href="/"
              className="text:lg lg:text-base xl:text-lg uppercase hover:scale-110 duration-300 active:scale-95"
            >
              <span className="relative">About</span>
            </Link>
            <Link
              href="/"
              className="text:lg lg:text-base xl:text-lg uppercase hover:scale-110 duration-300 active:scale-95"
            >
              <span className="relative">Advertisers</span>
            </Link>
            <Link
              href="/"
              className="text:lg lg:text-base xl:text-lg uppercase hover:scale-110 duration-300 active:scale-95"
            >
              <span className="relative">Publishers</span>
            </Link>
            <Link
              href="https://cashcramento.affise.com/v2/sign/up"
              className="text:lg lg:text-base xl:text-lg uppercase hover:scale-110 duration-300 active:scale-95"
            >
              <span className="relative">Sign Up</span>
            </Link>
            <Link
              href="https://cashcramento.affise.com/v2/sign/in"
              className="text:lg lg:text-base xl:text-lg uppercase hover:scale-110 duration-300 active:scale-95"
            >
              <span className="relative">Login</span>
            </Link>
            <Link
              href="/"
              className="text:lg lg:text-base xl:text-lg uppercase hover:scale-110 duration-300 active:scale-95"
            >
              <span className="relative">Contact Us</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
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
              <Link
                href="/"
                onClick={toggleMobileMenu}
                className="text-lg text-white uppercase hover:bg-green-800 border-b hover:border-none border-gray-300 mx-10 px-10 py-4"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
