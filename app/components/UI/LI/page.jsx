import React from "react";

const LI = ({ text, className }) => {
  return (
    <li
      className={`px-4 py-8 shadow-md shadow-sky-300 dark:shadow-gray-700 mb-3 ${className}`}
    >
      {text}
    </li>
  );
};

export default LI;
