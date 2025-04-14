// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{ padding: "10px", paddingLeft:"30px",background: "#333", color: "white" }}>
    <Link to="/home" style={{ marginRight: "15px", color: "white" }}>Home</Link>
    <Link to="/create" style={{ marginRight: "15px", color: "white" }}>Crear</Link>
    <Link to="/gallery" style={{ color: "white" }}>Galería</Link>
  </nav>
);

export default Navbar;