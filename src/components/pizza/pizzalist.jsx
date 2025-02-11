import React, { useState } from "react";
import Cookies from "js-cookie";
import PizzaInBasketModal from "./pizzainbasketmodal";
import PizzaToBasketModal from "./pizzatobasketmodal";

//Pizzák listázása
const PizzaList = ({ pizzas, handleAddToCartBasket }) => {
  //Méret választó handler
  const [sizes, setSizes] = useState({});
  const handleSizeChange = (pizzaId, value) => {
    setSizes((prev) => ({ ...prev, [pizzaId]: value }));
  };

  //Mennyiség választó és handler, alapértelmezetten 1 lesz
  const [quantities, setQuantities] = useState({});
  const handleQuantityChange = (pizzaId, value) => {
    setQuantities((prev) => ({ ...prev, [pizzaId]: value }));
  };

  const [pizzaData, setPizzaData] = useState(null);

  //Kosárba tétel ...
  const handleAddToCart = (pizza) => {
    //Ha nincs mennyiség megadva akkor 1 lesz
    const quantity = quantities[pizza.id] ?? 1;

    let basketData = Cookies.get("basket");
    basketData = JSON.parse(basketData);

    if (basketData[pizza.id]) {
      //csak akkor adja hozzá ha megerősítették
      setPizzaData({ id: pizza.id, quantity: quantity });
      const pinbasketmodal = new bootstrap.Modal(
        document.getElementById("pizzaInBasket")
      );
      pinbasketmodal.show();
    } else {
      // Ha nincs, adjuk hozzá a kosárhoz
      handleAddToCartBasket(pizza.id, quantity);
      const ptobasketmodal = new bootstrap.Modal(
        document.getElementById("pizzaToBasket")
      );
      ptobasketmodal.show();
    }
  };

  return (
    <div className="row">
      {Array.isArray(pizzas) && pizzas.length > 0 ? (
        pizzas.map((pizza) => (
          <div className="col-md-6 mb-4" key={pizza.id}>
            <div className="card" style={{ width: "100%" }}>
              <img
                src={pizza.image}
                className="card-img-top"
                alt={pizza.name}
              />
              <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
                <p className="card-text">Ár: {pizza.price} Ft</p>
                <p className="card-text">
                  Feltétek: {JSON.parse(pizza.toppings).join(", ")}
                </p>

                <div className="form-group">
                  <label htmlFor={`size-${pizza.id}`}>Méret:</label>
                  <select
                    className="form-control"
                    id={`size-${pizza.id}`}
                    value={sizes[pizza.id]}
                    onChange={(e) => handleSizeChange(pizza.id, e.target.value)}
                  >
                    <option value="24">24 cm</option>
                    <option value="32">32 cm</option>
                    <option value="45">45 cm</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor={`quantity-${pizza.id}`}>Mennyiség:</label>
                  <input
                    type="number"
                    className="form-control"
                    id={`quantity-${pizza.id}`}
                    min="1"
                    value={quantities[pizza.id] || 1}
                    onChange={(e) =>
                      handleQuantityChange(pizza.id, e.target.value)
                    }
                  />
                </div>

                <button
                  className="btn btn-dark mt-2"
                  onClick={() => handleAddToCart(pizza)}
                >
                  Kosárba
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Nincsenek pizzák a menüben.</p>
      )}

      <PizzaInBasketModal
        onAddAgain={handleAddToCartBasket}
        pizzaData={pizzaData}
      />
      <PizzaToBasketModal />
    </div>
  );
};

export default PizzaList;
