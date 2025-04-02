import React from "react";
import { routes } from "../routes/Routes";
import { useLocation } from "react-router-dom";

export const PageTitle = () => {
  const location = useLocation();

  // Buscar la ruta que coincide con la actual
  const currentRoute = routes.find(route => route.path === location.pathname);

  // Usar el título o uno por defecto
  const title = currentRoute ? currentRoute.title : "nombre de la página";

  return <h1>Welcome to {title}</h1>;
};
