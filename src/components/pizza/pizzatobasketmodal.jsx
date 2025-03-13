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
              Sikeresen hozzáadva
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="d-flex justify-content-center align-items-center">
              <p className="ms-2">Sikeresen hozzáadva a kosárhoz</p>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-continue"
              data-bs-dismiss="modal"
            >
              Tovább vásárolok
            </button>
            <button
              type="button"
              className="btn btn-dark btn-cart"
              data-bs-dismiss="modal"
              onClick={() => navigate("/basket")}
            >
              Kosárhoz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaToBasketModal;
