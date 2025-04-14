// src/components/Layout.jsx
import React from "react";
import Navbar from "../components/navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "20px" }}>{children}</main>
    </div>
  );
};

export default Layout;