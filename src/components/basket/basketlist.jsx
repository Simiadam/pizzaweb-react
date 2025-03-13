import React from "react";

//Basket listázása
const BasketList = ({ pizzas, handleDelete }) => {
  return (
    <div className="row">
      <h2 className="page-subtitle">Kosár</h2>
      {Array.isArray(pizzas) && pizzas.length > 0 ? (
        pizzas.map((pizza) => (
          <div className="col-md-12 mb-4" key={pizza.id}>
            <div className="card" style={{ width: "100%" }}>
              <img
                src={pizza.image}
                className="card-img-top"
                alt={pizza.name}
              />
              <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
                <p className="card-text">
                  Feltétek: {JSON.parse(pizza.toppings).join(", ")}
                </p>
                <p className="card-text">Ár: {pizza.price} Ft</p>
                <p className="card-text">Mennyiség: {pizza.quantity}</p>
                <button
                  className="btn btn-danger mt-2"
                  onClick={() => handleDelete(pizza.id)}
                >
                  Törlés
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Nincsenek pizzák a kosárban.</p>
      )}
    </div>
  );
};

export default BasketList;
