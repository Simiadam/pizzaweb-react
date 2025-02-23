import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import BasketList from "./basketlist.jsx";
import Order from "./order.jsx";
import apiClient from '../../api/axios';

//Basket oldal a basket listázásához és a megredenléshez
const Basket = ({ handleRemoveFromCart, handleRemoveAllFromCart }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cartInfo, setCartInfo] = useState({ totalItems: 0, totalPrice: 0 });

  //Oldal betöltésénél elküldjük a cookie-ban lévő pizzákat az api-nak és megjelenítjü a pizzákat
  useEffect(() => {
    fetchBasketInfo();
  }, []);

  const fetchBasketInfo = async () => {
    const basketData = JSON.parse(Cookies.get("basket"));
    try {
      const response = await apiClient.post("/api/get-basketInfo", {
        inbasket: basketData,
      });

      if (response.data.success) {
        setCartInfo({
          totalItems: response.data.data.pizzatotal
            ? response.data.data.pizzatotal
            : 0,
          totalPrice: response.data.data.sumtotal
            ? response.data.data.sumtotal
            : 0,
        });
        setPizzas(response.data.data.pizzas);
      } else {
        console.log("Sikertelen response");
      }
    } catch (error) {
      console.error("Hiba:", error);
    }
  };

  //Pizza törlése a listából
  const handleDelete = (pizzaId) => {
    setPizzas((prevPizzas) =>
      prevPizzas.filter((pizza) => pizza.id != pizzaId)
    );
    handleRemoveFromCart(pizzaId);
    fetchBasketInfo();
  };

  return (
    <main>
      <div className="row">
        <h1>Házhozszállítás</h1>
        <div className="col-md-6">
          <BasketList pizzas={pizzas} handleDelete={handleDelete} />
          <h3>Összesen: {cartInfo.totalPrice} Ft</h3>
        </div>
        <div className="col-md-6">
          <Order handleRemoveAllFromCart={handleRemoveAllFromCart} />
        </div>
      </div>
    </main>
  );
};

export default Basket;
