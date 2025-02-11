import React from "react";
import { useNavigate } from "react-router-dom";

//Kosárba tétel után megjlenő modal
const PizzaToBasketModal = () => {
  const navigate = useNavigate();

  return (
    <div
      className="modal show"
      id="pizzaToBasket"
      tabIndex="-1"
      aria-labelledby="pizzaToBasketLabel"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="pizzaToBasketLabel">
              Sikeres kosárba helyezés
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Szeretnéd folytatni a vásárlást?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-success"
              data-bs-dismiss="modal"
              onClick={() => navigate("/basket")}
            >
              Megrendelés
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Vásárlás folytatása
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaToBasketModal;
