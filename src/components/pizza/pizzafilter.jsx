import React, { useState } from "react";

const PizzaFilter = ({ onSearch, onSort }) => {
  //Kereső és rendezés komponens

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [order, setOrder] = useState("asc");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  const handleSortChange = (e) => {
    const { name, value } = e.target;

    if (name == "sortBy") {
      setSortBy(value);
      onSort(value, order);
    } else if (name == "order") {
      setOrder(value);
      onSort(sortBy, value);
    }
  };

  return (
    <div className="d-flex justify-content-between align-items-center mb-3 mt-3 search-filter gap-3">
      <select
        className="form-select"
        name="sortBy"
        value={sortBy}
        onChange={handleSortChange}
      >
        <option value="name">Név</option>
        <option value="price">Ár</option>
        <option value="popularity">Népszerűség</option>
      </select>
      <select
        className="form-select"
        name="order"
        value={order}
        onChange={handleSortChange}
      >
        <option value="asc">Növekvő</option>
        <option value="desc">Csökkenő</option>
      </select>
      <input
        className="form-control"
        type="text"
        placeholder="Keresés..."
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

export default PizzaFilter;
