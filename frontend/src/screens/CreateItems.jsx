// src/pages/CreateItemImage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../screens/Gallery.css"
export const CreateItemImage = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [nombreJefe, setNombreJefe] = useState("");
  const [cargoJefe, setCargoJefe] = useState("");
  const [telefonoJefe, setTelefonoJefe] = useState("");
  const [emailJefe, setEmailJefe] = useState("");
  const navigate = useNavigate();
  
  //esto actualizaria el parametro draftItemTitle con el nuevo valor que se le asigne
  // useEffect(() => {
  //   const savedTitle = localStorage.getItem("draftItemTitle");
  //   if (savedTitle) setNombreJefe(savedTitle);
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3000/api/jefes-proyectos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombreJefe,
          cargoJefe,
          telefonoJefe,
          emailJefe,
          urlJefe: imageUrl,
        }),
      });
      localStorage.removeItem("draftItemTitle");
      alert("Jefe de proyecto creado con éxito");
      navigate("/gallery");
    } catch (error) {
      console.error("Error al crear el item:", error);
      alert("Error al crear el item");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear nuevo jefe de proyecto</h2>

      <label>Nombre:</label>
      <input
        type="text"
        value={nombreJefe}
        onChange={(e) => setNombreJefe(e.target.value)}
        required
      />

      <label>Cargo:</label>
      <input
        type="text"
        value={cargoJefe}
        onChange={(e) => setCargoJefe(e.target.value)}
        required
      />

      <label>Teléfono:</label>
      <input
        type="text"
        value={telefonoJefe}
        onChange={(e) => setTelefonoJefe(e.target.value)}
        required
      />

      <label>Email:</label>
      <input
        type="email"
        value={emailJefe}
        onChange={(e) => setEmailJefe(e.target.value)}
        required
      />

      <label>URL de la imagen:</label>
      <input
        type="url"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
      />

      <br />
      <div className="buttons-items-details">
      <button type="submit">Guardar</button>
      <br />
      <button type="button" onClick={() => navigate(-1)}>
        ← Volver
      </button>
      </div>

    </form>
  );
};
export default CreateItemImage