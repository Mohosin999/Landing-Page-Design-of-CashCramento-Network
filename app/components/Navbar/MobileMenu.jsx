import Link from "next/link";
import React from "react";

const MobileMenu = ({ toggleMobileMenu }) => {
  return (
    <div className="lg:hidden h-screen text-center">
      <div className="grid grid-cols-2 gap-4 mt-10 mx-6">
        <Link
          href="/about"
          onClick={toggleMobileMenu}
          className="text-base bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 uppercase px-3 py-6 hover:bg-sky-300 dark:hover:bg-sky-600 duration-300 "
        >
          About
        </Link>
        <Link
          href="/advertisers"
          onClick={toggleMobileMenu}
          className="text-base bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 uppercase px-3 py-6 hover:bg-sky-300 dark:hover:bg-sky-600 duration-300 "
        >
          Advertisers
        </Link>
        <Link
          href="/publishers"
          onClick={toggleMobileMenu}
          className="text-base bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 uppercase px-3 py-6 hover:bg-sky-300 dark:hover:bg-sky-600 duration-300 "
        >
          Publishers
        </Link>
        <Link
          href="/contact"
          onClick={toggleMobileMenu}
          className="text-base bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 uppercase px-3 py-6 hover:bg-sky-300 dark:hover:bg-sky-600 duration-300 "
        >
          Contact Us
        </Link>
        <Link
          href="https://cashcramento.affise.com/v2/sign/up"
          onClick={toggleMobileMenu}
          className="text-base bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 uppercase px-3 py-6 hover:bg-sky-300 dark:hover:bg-sky-600 duration-300 "
        >
          Sign Up
        </Link>
        <Link
          href="https://cashcramento.affise.com/v2/sign/in"
          onClick={toggleMobileMenu}
          className="text-base bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 uppercase px-3 py-6 hover:bg-sky-300 dark:hover:bg-sky-600 duration-300 "
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
