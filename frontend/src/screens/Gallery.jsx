// src/pages/Gallery.jsx
import React, { useEffect, useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../screens/Gallery.css"
const Gallery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("q") || "";
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/jefes-proyectos");
        const data = await res.json();
        setItems(data.data); // 👈 aquí el arreglo correcto
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    };
    fetchItems();
  }, []);

//mantiene los datos filtrados 
//almacenandolos en estado de memoria si se va a otra pagina y se vuelve
  const filtered = useMemo(() => {
    return items.filter((item) =>
      item.nombreJefe.toLowerCase().includes(search.toLowerCase())
    );
  }, [items, search]);

  return (

     <div className="gallery-container">
  <input
    className="gallery-search"
    placeholder="Buscar..."
    value={search}
    onChange={(e) => setSearchParams({ q: e.target.value })}
  />

  <table className="gallery-table">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Email</th>
        <th>Teléfono</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {filtered.map((item) => (
        <tr key={item.id}>
          <td>{item.nombreJefe}</td>
          <td>{item.emailJefe}</td>
          <td>{item.telefonoJefe}</td>
          <td>
            <Link to={`/item/${item.id}?q=${search}`}>Ver más</Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};



export default Gallery;