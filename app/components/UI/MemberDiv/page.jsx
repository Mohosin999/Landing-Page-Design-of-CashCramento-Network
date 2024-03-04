import React from "react";
import Image from "next/image";

const MemberDiv = ({ image, h1, h3, p }) => {
  return (
    <div className="flex flex-col items-center justify-center px-2 py-6 shadow-lg bg-gray-200 dark:shadow-gray-900 dark:bg-gray-800">
      <div className="">
        <Image
          src={image}
          alt="photo"
          className="w-32 h-32 rounded-full object-cover"
        />
      </div>

      <h1 className="text-gray-900 dark:text-gray-200 mt-5 font-bold text-lg lg:text-xl">
        {h1}
      </h1>
      <h3 className="text-gray-800 dark:text-gray-300 mt-1 text-base lg:text-lg">
        {h3}
      </h3>
      <p className="text-gray-800 dark:text-gray-300 mt-1 text-sm lg:text-base">
        Email: {p}
      </p>
    </div>
  );
};

export default MemberDiv;
