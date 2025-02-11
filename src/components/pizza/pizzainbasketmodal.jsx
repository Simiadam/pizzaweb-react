import React from "react";

//Már van ilyen pizza a kosárba modal megerősítés
const PizzaInBasketModal = ({ onAddAgain, pizzaData }) => {
  const handleAddAgain = () => {
    onAddAgain(pizzaData.id, pizzaData.quantity);
    const ptobasketmodal = new bootstrap.Modal(
      document.getElementById("pizzaToBasket")
    );
    ptobasketmodal.show();
  };

  return (
    <div
      className="modal show"
      id="pizzaInBasket"
      tabIndex="-1"
      aria-labelledby="pizzaInBasketLabel"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="pizzaInBasketLabel">
              Figyelem!
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Ez a pizza már benne van a kosárban.</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-dark"
              data-bs-dismiss="modal"
              onClick={handleAddAgain}
            >
              Kosárba megint
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Mégse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaInBasketModal;
