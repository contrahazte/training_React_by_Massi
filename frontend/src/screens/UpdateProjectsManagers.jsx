// src/pages/UpdateProjectsManagers.jsx
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../screens/Forms.css";
import { useProjectsManagersContext } from "../contexts/JefesDeProyectoContext";

export const UpdateProjectsManagers = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { handleSavingProjectsManagerData} = useProjectsManagersContext();

  const [nombreJefe, setNombreJefe] = useState("");
  const [cargoJefe, setCargoJefe] = useState("");
  const [telefonoJefe, setTelefonoJefe] = useState("");
  const [emailJefe, setEmailJefe] = useState("");
  const [urlJefe, setUrlJefe] = useState("");

  useEffect(() => {
    const fetchJefe = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/jefes-proyectos/${id}`);
        const data = await res.json();
        const jefe = data.data;

        setNombreJefe(jefe.nombreJefe);
        setCargoJefe(jefe.cargoJefe);
        setTelefonoJefe(jefe.telefonoJefe);
        setEmailJefe(jefe.emailJefe);
        setUrlJefe(jefe.urlJefe);
      } catch (err) {
        console.error("Error al obtener jefe:", err);
      }
    };

    fetchJefe();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/jefes-proyectos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombreJefe,
          cargoJefe,
          telefonoJefe,
          emailJefe,
          urlJefe,
        }),
      });

      if (!res.ok) throw new Error("Error al actualizar jefe");

      const data = await res.json();
      handleSavingProjectsManagerData(data.data); // Actualizar en el contexto
      navigate("/getAll/projects-managers");

    } catch (error) {
      console.error("Error al actualizar jefe:", error);
      alert("Ocurrió un error al actualizar");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Actualizar Jefe de Proyecto</h2>

      <div className="form-group">
        <label htmlFor="nombreJefe">Nombre:</label>
        <input
          id="nombreJefe"
          type="text"
          value={nombreJefe}
          onChange={(e) => setNombreJefe(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="cargoJefe">Cargo:</label>
        <input
          id="cargoJefe"
          type="text"
          value={cargoJefe}
          onChange={(e) => setCargoJefe(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="telefonoJefe">Teléfono:</label>
        <input
          id="telefonoJefe"
          type="tel"
          value={telefonoJefe}
          onChange={(e) => setTelefonoJefe(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="emailJefe">Email:</label>
        <input
          id="emailJefe"
          type="email"
          value={emailJefe}
          onChange={(e) => setEmailJefe(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="urlJefe">URL de foto:</label>
        <input
          id="urlJefe"
          type="url"
          value={urlJefe}
          onChange={(e) => setUrlJefe(e.target.value)}
        />
      </div>

      <button type="submit" className="submit-button">Actualizar Jefe</button>
    </form>
  );
};
