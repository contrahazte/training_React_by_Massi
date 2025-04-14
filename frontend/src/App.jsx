// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";
import CreateItemImage from "./screens/CreateItems";
import CreateItemTitle from "./screens/CreateItemTitle";
import Home from "./screens/Home";
import Gallery from "./screens/Gallery";
import ItemDetail from "./screens/ItemDetails";
import UpdateItem from "./screens/updateItem";
import Login from "./screens/Login";
import "../src/App.css";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<CreateItemTitle />} />
          <Route path="/create/image" element={<CreateItemImage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/item/:id/update" element={<UpdateItem />} />
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;