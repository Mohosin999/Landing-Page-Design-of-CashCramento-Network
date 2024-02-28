import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-14">
      <div className="container mx-auto text-center">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} All rights reserved. Cashcramento
          since 2024.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
