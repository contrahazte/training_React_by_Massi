// src/pages/CreateItemImage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../contexts/FormContext";

const CreateItemImage = () => {
  const navigate = useNavigate();
  const { formData, updateField, resetForm } = useForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3000/api/jefes-proyectos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      alert("Jefe de proyecto creado con éxito");
      resetForm();
      navigate("/gallery");
    } catch (error) {
      console.error("Error:", error);
      alert("Error al enviar");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear nuevo jefe de proyecto - Paso 2</h2>

      <label>Cargo:</label>
      <input
        type="text"
        value={formData.cargoJefe}
        onChange={(e) => updateField("cargoJefe", e.target.value)}
        required
      />

      <label>Teléfono:</label>
      <input
        type="text"
        value={formData.telefonoJefe}
        onChange={(e) => updateField("telefonoJefe", e.target.value)}
        required
      />

      <label>Email:</label>
      <input
        type="email"
        value={formData.emailJefe}
        onChange={(e) => updateField("emailJefe", e.target.value)}
        required
      />

      <label>URL Imagen:</label>
      <input
        type="url"
        value={formData.urlJefe}
        onChange={(e) => updateField("urlJefe", e.target.value)}
        required
      />

      <br />
      <div className="buttons-items-details">
      <button type="submit">Guardar</button>
      <button
        type="button"
        onClick={() => {
          navigate(-1); // Podés decidir si querés hacer también resetForm aquí
        }}
      >
        ← Volver
      </button>
      </div>

    </form>
  );
};

export default CreateItemImage;
