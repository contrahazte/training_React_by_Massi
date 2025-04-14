// src/pages/CreateItemTitle.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../screens/Gallery.css"


const CreateItemTitle = () => {
  const [title, setTitle] = useState(""); //se crea el manejador de estado para el titulo
  const navigate = useNavigate();

const handleContinue = () => {
  //antes de continuar a la siguiente página se guarda la data en el localstorage
  localStorage.setItem("draftItemTitle", title);
  navigate("/create/image");
};



useEffect(() => {
  //para que permanezca guardada en el input la data que se almacenó en la función anterior
// en el local storga y se mantenga si el componente se recarga o continua a la siguiente
//  pagina de creación se extrae el titulo del localStorage y a traves de la condicional 
// se comprueba si existe el parametro guardado 
// y si existe se actualiza el set del useState del title
  const saved = localStorage.getItem("draftItemTitle");
  if (saved) setTitle(saved);
}, []);

useEffect(() => {
//  pero si el componente cambia de ruta
//  el valor se desmonta y el input se borra
  return () => {
    if (location.pathname === "/create") {
      localStorage.removeItem("draftItemTitle");
    }
  };
}, [location.pathname]);




  return (
    <div>
      <h2>Crear nuevo item - Paso 1</h2>
      <div className="div-input-title">
      <label>Título:</label>
      <input
      className="input-title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        //se actualiza el manejador de estado del titulo en el onChange
        required
      />
      </div>

      <br />
      <button onClick={handleContinue}>Continuar</button>
    </div>
  );
};

export default CreateItemTitle;