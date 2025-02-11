import React from "react";
import { Link } from "react-router-dom";
import Cart from "../basket/cart";

const Header = ({ basket }) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              className="pizzaweb-logoimg"
              src={"images/pizza2.png"}
              alt="PizzaWeb Logo"
            />
            PizzaWeb
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Főoldal
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pizza">
                  Pizzák
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Kapcsolat
                </Link>
              </li>
            </ul>
            <span className="navbar-text">
              <Link className="nav-link" to="/basket">
                <Cart basket={basket} />
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
