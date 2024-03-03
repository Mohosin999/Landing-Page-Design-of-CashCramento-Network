import Link from "next/link";
import React from "react";

const ButtonLink = ({ title, href, className }) => {
  return (
    <Link
      href={href}
      className={`bg-sky-400 text-gray-900 text-sm lg:text-base px-10 lg:px-16 py-2 lg:py-3 hover:bg-sky-700 hover:text-gray-200 rounded-md font-semibold uppercase active:bg-white active:text-gray-900 border border-sky-400 hover:border-sky-700 duration-300 ${className}`}
    >
      {title}
    </Link>
  );
};

export default ButtonLink;
