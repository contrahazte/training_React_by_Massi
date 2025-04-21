import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const DetailProjectsManager = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [jefe, setJefe] = useState(null);

  useEffect(() => {
    const fetchJefe = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/jefes-proyectos/${id}`);
        const data = await res.json();
        setJefe(data.data);
      } catch (error) {
        console.error("Error al cargar detalle del jefe:", error);
      }
    };

    fetchJefe();
  }, [id]);

  const handleBack = () => {
    const previousSearch = searchParams.get("search") || "";
    navigate(`/getAll/projects-managers?search=${previousSearch}`);
  };

  if (!jefe) return <p>Cargando detalles...</p>;

  return (
    <div>
      <h2>Detalle del Jefe de Proyecto</h2>
      <p><strong>Nombre:</strong> {jefe.nombreJefe}</p>
      <p><strong>Cargo:</strong> {jefe.cargoJefe}</p>
      <p><strong>Teléfono:</strong> {jefe.telefonoJefe}</p>
      <p><strong>Email:</strong> {jefe.emailJefe}</p>
      <p><strong>Imagen:</strong></p>
      <img src={jefe.urlJefe} alt={jefe.nombreJefe} width="200" />

      <br />
      <button onClick={handleBack} style={{ marginTop: "20px" }}>
        Volver al listado
      </button>
    </div>
  );
};
