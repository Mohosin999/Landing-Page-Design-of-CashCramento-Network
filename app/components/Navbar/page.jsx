import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";

const Navbar = () => {
  return (
    <>
      {/* <nav className="flex flex-row justify-center">
        <Link href="/">
          <Image
            src={Logo}
            width={100}
            height={50}
            alt="Picture of the author"
          />
        </Link>
        <Link href="">About</Link>
        <Link href="">Advertisers</Link>
        <Link href="">Publishers</Link>
        <Link href="">Signup</Link>
        <Link href="">Log In</Link>
        <Link href="">Contact US</Link>
      </nav> */}

      <nav className="bg-gray-800 text-white">
        <div className="flex items-center justify-between p-4 px-14">
          {/* Logo text */}
          <Link href="/">
            <p className="bg-red-500 text-white text-xl px-4 py-2">
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
            Log In
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-300 text-lg uppercase"
          >
            Contact Us
          </Link>
        </div>
        {/* </div> */}
        {/* <div className="flex items-center space-x-4"> */}
        {/* <Link href="/signup" className="hover:text-gray-300 text-lg uppercase">
            Sign Up
          </Link>
          <Link href="/login" className="hover:text-gray-300 text-lg uppercase">
            Log In
          </Link>
          <Link href="/contact" className="hover:text-gray-300 text-lg uppercase">
            Contact Us
          </Link> */}
        {/* </div> */}
      </nav>
    </>
  );
};

export default Navbar;
