// src/pages/CreateItemTitle.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../contexts/FormContext";

const CreateItemTitle = () => {
  const navigate = useNavigate();
  const { formData, updateField } = useForm();

  const handleContinue = () => {
    if (formData.nombreJefe.trim() === "") {
      alert("Por favor, ingresa el nombre del jefe de proyecto.");
      return;
    }
    navigate("/create/image");
  };

  return (
    <div className="lala">
      <h2>Crear nuevo jefe de proyecto - Paso 1</h2>
      <div className="div-input-title">
      <label>Nombre:</label>
      <input
        type="text"
        value={formData.nombreJefe}
        onChange={(e) => updateField("nombreJefe", e.target.value)}
        required
      />
      </div>

      <br />
      <button onClick={handleContinue}>Continuar</button>
    </div>
  );
};

export default CreateItemTitle;
