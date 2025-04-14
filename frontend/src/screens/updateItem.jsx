// src/pages/UpdateItem.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nombreJefe: "",
    cargoJefe: "",
    telefonoJefe: "",
    emailJefe: "",
    urlJefe: "",
  });

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/jefes-proyectos/${id}`);
        const data = await res.json();
        setForm(data);
      } catch (error) {
        console.error("Error al cargar el item:", error);
      }
    };
    fetchItem();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:3000/api/jefes-proyectos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      alert("Jefe de proyecto actualizado");
      navigate(`/item/${id}`);
    } catch (error) {
      console.error("Error al actualizar el item:", error);
      alert("Error al actualizar el item");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar jefe de proyecto</h2>

      <label>Nombre:</label>
      <input
        name="nombreJefe"
        value={form.nombreJefe}
        onChange={handleChange}
        required
      />

      <label>Cargo:</label>
      <input
        name="cargoJefe"
        value={form.cargoJefe}
        onChange={handleChange}
        required
      />

      <label>Teléfono:</label>
      <input
        name="telefonoJefe"
        value={form.telefonoJefe}
        onChange={handleChange}
        required
      />

      <label>Email:</label>
      <input
        name="emailJefe"
        type="email"
        value={form.emailJefe}
        onChange={handleChange}
        required
      />

      <label>URL Imagen:</label>
      <input
        name="urlJefe"
        type="url"
        value={form.urlJefe}
        onChange={handleChange}
        required
      />

      <button type="submit">Actualizar</button>
    </form>
  );
};

export default UpdateItem;import "../screens/Gallery.css"