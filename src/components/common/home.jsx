import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="container-fluid p-0">
      <div className="container-fluid p-0 position-relative">
        <img
          src="images/pizzabanner.png"
          alt="Pizza Banner"
          className="banner-image img-fluid w-100"
        />
        <h1
          id="banner-text"
          className="position-absolute top-10 start-50 translate-middle text-white text-center"
        >
          PizzaWeb
        </h1>
        <div className="banner-btn position-absolute top-60 start-50 translate-middle text-center">
          <Link
            to="/pizza"
            className="btn btn-dark btn-lg rounded-pill px-4 py-2"
          >
            Házhozszállítás
          </Link>
        </div>
      </div>

      <div className="container">
        <div className="row my-4 align-items-center">
          <div className="col-md-6">
            <img
              src="images/pizzahome1.png"
              alt="Friss és ízletes pizzák"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <h2 className="home-title">Friss és Ízletes Pizzák</h2>
            <p className="home-text">
              Friss és minőségi pizzáinkat olasz receptek alapján készítjük.
              Próbáld ki a klasszikus margheritánkat vagy gourmet ízeket!
            </p>
          </div>
        </div>

        <div className="row my-4 align-items-center">
          <div className="col-md-6 order-md-2">
            <img
              src="images/pizzahome2.png"
              alt="Gyors és egyszerű rendelés"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6 order-md-1">
            <h2 className="home-title">Gyors és Egyszerű Rendelés</h2>
            <p className="home-text">
              Otthonról is élvezheted a pizzák ízét! Rendelj gyorsan és
              könnyedén. Akár Budapesten, akár vidéken, pizzáink hamarosan az
              asztalodon landolnak!
            </p>
          </div>
        </div>

        <div className="row my-4 align-items-center">
          <div className="col-md-6">
            <img
              src="images/pizzahome3.png"
              alt="Fedezd fel a pizza világát"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <h2 className="home-title">Fedezd Fel a Pizza Világát</h2>
            <p className="home-text">
              Csatlakozz hozzánk, és fedezd fel a pizza varázslatos világát!
              Akár egy családi összejövetelre, akár egy baráti bulira rendelsz,
              garantáljuk, hogy pizzáink lenyűgöznek!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
