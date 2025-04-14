import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../src/App.css';
import Login from './screens/Login';
import { FormProvider } from './context/LoginProvider';
import { Layout } from './layouts/layout_navbar';
import { Home } from './screens/Home';
import { CreateJefeProyectos1 } from './screens/CreatePage1.JSX';
import { Gallery } from './screens/Gallery';

function App() {
  return (
    <FormProvider>
      <Routes>
        {/* Rutas sin layout (como login) */}
        <Route path="/" element={<Login />} />

        {/* Rutas con Navbar/Layout */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/create/page1" element={<CreateJefeProyectos1 />} />
          <Route path="/gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </FormProvider>
  );
}

export default App;
