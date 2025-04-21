import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProjectsManagersContext } from "../contexts/JefesDeProyectoContext";
import "../screens/Forms.css"
export const CreateProjectsManagers = () => {
  const [nombreJefe, setNombreJefe] = useState("");
  const [cargoJefe, setCargoJefe] = useState("");
  const [telefonoJefe, setTelefonoJefe] = useState("");
  const [emailJefe, setEmailJefe] = useState("");
  const [urlJefe, setUrlJefe] = useState("");

  const { handleSavingProjectsManagerData } = useProjectsManagersContext();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const fetching = await fetch("http://localhost:3000/api/jefes-proyectos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombreJefe,
          cargoJefe,
          telefonoJefe,
          emailJefe,
          urlJefe,
        }),
      });

      if (!fetching.ok) {
        alert("Error al crear jefe de proyecto");
        return;
      }

      const data = await fetching.json();
      console.log("Jefe de Proyecto creado exitosamente:",
     { ...data}
      );

      handleSavingProjectsManagerData(data);
      navigate("/getAll/projects-managers");
    } catch (error) {
      console.error(error);
    }
  };

  return (
<form onSubmit={handleSubmit} className="form-container">
  <h2>Crear Jefe de Proyecto</h2>

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

  <button type="submit" className="submit-button">Crear Jefe</button>
</form>

  );
};
