import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const ListaJefes = ({ items }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("q") || "";

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchParams(value ? { q: value } : {});
  };

  const filtered = useMemo(() => {
    return items.filter((item) =>
      item.nombreJefe.toLowerCase().includes(search.toLowerCase())
    );
  }, [items, search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar jefe..."
        value={search}
        onChange={handleSearch}
      />

      <ul>
        {filtered.map((item, index) => (
          <li key={index}>{item.nombreJefe}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaJefes;
