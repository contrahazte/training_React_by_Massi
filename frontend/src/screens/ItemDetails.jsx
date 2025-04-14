import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../screens/Gallery.css";

const ItemDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const search = new URLSearchParams(location.search).get("q") || "";
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/jefes-proyectos/${id}`);
        const data = await res.json();
        setItem(data);
      } catch (error) {
        console.error("Error al cargar el item:", error);
      }
    };
    fetchItem();
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este item?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:3000/api/jefes-proyectos/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Error al eliminar");

      alert("Item eliminado correctamente");
      navigate(`/gallery?q=${search}`);
    } catch (error) {
      console.error("Error al eliminar el item:", error);
      alert("Hubo un error al eliminar el item");
    }
  };

  if (!item) return <p>Item no encontrado</p>;

  return (
    <div className="gallery-container">
      <h2>{item.nombreJefe}</h2>
      <p><strong>Cargo:</strong> {item.cargoJefe}</p>
      <p><strong>Email:</strong> {item.emailJefe}</p>
      <p><strong>Teléfono:</strong> {item.telefonoJefe}</p>
      <img
        src={item.urlJefe}
        alt={item.nombreJefe}
        style={{ maxWidth: "300px", marginTop: "1rem" }}
      />
      <div style={{ marginTop: "20px" }}>
        <Link to={`/gallery?q=${search}`}>← Volver a la galería</Link>
      </div>
      <div style={{ marginTop: "10px" }}>
        <Link to={`/item/${id}/update`}>
          <button>Editar este item</button>
        </Link>
        {user?.role === "boss" && (
          <button onClick={handleDelete} style={{ marginLeft: "10px" }}>
            Eliminar
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
