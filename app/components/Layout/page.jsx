import React from "react";

const Layout = ({ children, className }) => {
  return <div className={`px-28 ${className}`}>{children}</div>;
};

export default Layout;
