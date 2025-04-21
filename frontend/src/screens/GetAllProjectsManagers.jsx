import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const GetAllProjectsManagers = () => {
  const [getAll, setGetAll] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Obtener datos
  const handleGetAllProjectsManagers = async () => {
    try {
      const fetching = await fetch("http://localhost:3000/api/jefes-proyectos");
      const getingInfo = await fetching.json();
      setGetAll(getingInfo.data);
    } catch (e) {
      console.error(e);
    }
  };

  // Al montar: cargar data + recuperar búsqueda previa si hay
  useEffect(() => {
    handleGetAllProjectsManagers();
    const previousSearch = searchParams.get("search") || "";
    setSearch(previousSearch);
  }, []);

  // Filtrado dinámico cada vez que cambia la búsqueda o los datos
  useEffect(() => {
    const result = getAll.filter(
      (item) =>
        item.nombreJefe.toLowerCase().includes(search.toLowerCase()) ||
        item.cargoJefe.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
  }, [search, getAll]);

  // Manejar cambio de búsqueda
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    setSearchParams({ search: value }); // guarda en la URL
  };

  return (
    <div>
      <h2>Listado de Jefes de Proyecto</h2>

      <input
        type="text"
        placeholder="Buscar por nombre o cargo"
        value={search}
        onChange={handleSearchChange}
        style={{ padding: "8px", marginBottom: "20px", width: "100%" }}
      />

      {filtered.length === 0 ? (
        <p>No hay datos que mostrar</p>
      ) : (
        <ul>
          {filtered.map((data) => (
            <li key={data.id} style={{ marginBottom: "2rem" }}>
              <p><strong>Nombre:</strong> {data.nombreJefe}</p>
              <p><strong>Cargo:</strong> {data.cargoJefe}</p>
              <p><strong>Teléfono:</strong> {data.telefonoJefe}</p>
              <p><strong>Email:</strong> {data.emailJefe}</p>
              <p>
                <strong>Imagen:</strong> <br />
                <img src={data.urlJefe} alt={data.nombreJefe} width="100" />
              </p>

              <div style={{ marginTop: "0.5rem" }}>
                <button onClick={() =>navigate(`/update/projects-managers/${data.id}`)
}>Editar</button>
                <button
                  onClick={() =>
                    navigate(`/jefes-proyectos/detail/${data.id}?search=${search}`)
                  }
                  style={{ marginLeft: "10px" }}
                >
                  Ver Detalle
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
//https://chatgpt.com/s/m_680106e69e348191a3bf50d98265a9f8 resumenimagen search