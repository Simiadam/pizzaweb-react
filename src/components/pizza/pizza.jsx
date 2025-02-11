import React, { useEffect, useState } from "react";
import PizzaList from "./pizzalist";
import PizzaFilter from "./pizzafilter";
import PizzaPage from "./pizzapage";
import axios from "axios";

const Pizza = ({ handleAddToCart }) => {
  const [pizzas, setPizzas] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    orderby: "name",
    order: "asc",
    perpage: "10",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  //Pizza lista lekérése oldal betöltésénél
  useEffect(() => {
    loadPizzas();
  }, [filters, currentPage]);

  const loadPizzas = async () => {
    try {
      const params = {
        search: filters.search || null,
        orderby: filters.orderby || null,
        order: filters.order || null,
        perpage: filters.perpage || null,
        page: currentPage || 1,
      };
      const response = await axios.post("/api/get-pizzas", params);
      const pizzaData = response.data;

      setTotalPages(pizzaData.data.totalpages);
      setPizzas(pizzaData.data.pizzas);
      console.log("Pizzák betöltése sikeres");
    } catch (error) {
      console.error("Pizza betöltése közben hiba keletkezett");
    }
  };

  const handleSearch = (search) => {
    setFilters((prev) => ({ ...prev, search: search }));
    setCurrentPage(1);
  };
  const handleSort = (orderby, order) => {
    setFilters((prev) => ({ ...prev, orderby: orderby, order }));
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <main>
      <h1>Pizzák</h1>
      <PizzaFilter onSearch={handleSearch} onSort={handleSort} />
      <PizzaList pizzas={pizzas} handleAddToCartBasket={handleAddToCart} />
      <PizzaPage
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </main>
  );
};

export default Pizza;
