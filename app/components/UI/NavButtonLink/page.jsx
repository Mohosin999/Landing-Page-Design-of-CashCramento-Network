import React from "react";
import Link from "next/link";

const NavButtonLink = ({ title, href, className }) => {
  return (
    <Link
      href={href}
      className={`text-gray-900 dark:text-gray-200 text:lg lg:text-base xl:text-lg uppercase hover:border-b hover:border-gray-700 dark:hover:border-gray-300 hover:border-b-2 duration-100 active:border-none ${className}`}
    >
      {/* <span className="relative">About</span> */}
      {title}
    </Link>
  );
};

export default NavButtonLink;
