import React from "react";
import Image from "next/image";

const PublisherItem = ({ title, image, className }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center px-4 py-8 shadow-md dark:shadow-lg shadow-sky-300 dark:bg-gray-800 ${className}`}
    >
      <div className="">
        <Image src={image} className="w-32 h-auto" />
      </div>
      <p className="mt-3 lg:mt-5 text-sm">{title}</p>
    </div>
  );
};

export default PublisherItem;
