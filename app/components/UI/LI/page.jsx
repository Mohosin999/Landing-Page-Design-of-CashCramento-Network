import React from "react";

const LI = ({ text, className }) => {
  return (
    <li
      className={`px-4 py-8 shadow-lg bg-gray-200 dark:shadow-gray-900 dark:bg-gray-800 mb-4 ${className}`}
    >
      {text}
    </li>
  );
};

export default LI;
