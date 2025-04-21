// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./screens/Login";
import { Home } from "./screens/Home";
import { CreateProjectsManagers } from "./screens/CreateProjectsManagers";
import { GetAllProjectsManagers } from "./screens/GetAllProjectsManagers";
import { Layout } from "./layouts/Layout";
import { UserProvider } from "./contexts/UserContext";
import "./App.css";
import { ProjectsManagersProvider } from "./contexts/JefesDeProyectoContext";
import { UpdateProjectsManagers } from "./screens/UpdateProjectsManagers";
import { DetailProjectsManager } from "./screens/DetailProjectsManagers";

function App() {
  return (
    <UserProvider>
      <ProjectsManagersProvider>
        <Routes>
          {/* Ruta sin layout */}
          <Route path="/" element={<Login />} />

          {/* Rutas con layout */}
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/create/projects-managers" element={<CreateProjectsManagers />} />
            <Route path="/getAll/projects-managers" element={<GetAllProjectsManagers />} />
            <Route path="/update/projects-managers/:id" element={<UpdateProjectsManagers />} />
            <Route path="/jefes-proyectos/detail/:id" element={<DetailProjectsManager />} />

          </Route>
        </Routes>
      </ProjectsManagersProvider>
    </UserProvider>
  );
}

export default App;
