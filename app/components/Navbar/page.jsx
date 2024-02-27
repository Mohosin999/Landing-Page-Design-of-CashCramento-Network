import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 text-white">
        <div className="flex items-center justify-between p-4 px-14">
          {/* Logo text */}
          <Link href="/">
            <p className="bg-red-600 text-white font-bold text-xl px-4 py-2">
              CashCramento
            </p>
          </Link>

          {/* Links */}
          <Link href="/about" className="hover:text-gray-300 text-lg uppercase">
            About
          </Link>
          <Link
            href="/advertisers"
            className="hover:text-gray-300 text-lg uppercase"
          >
            Advertisers
          </Link>
          <Link
            href="/publishers"
            className="hover:text-gray-300 text-lg uppercase"
          >
            Publishers
          </Link>

          <Link
            href="https://cashcramento.affise.com/v2/sign/up"
            target="_blank"
            className="hover:text-gray-300 text-lg uppercase"
          >
            Sign Up
          </Link>
          <Link
            href="https://cashcramento.affise.com/v2/sign/in"
            target="_blank"
            className="hover:text-gray-300 text-lg uppercase"
          >
            Login
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-300 text-lg uppercase"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
