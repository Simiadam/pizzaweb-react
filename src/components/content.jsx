import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./common/home";
import Pizza from "./pizza/pizza";
import Contact from "./common/contact";
import Basket from "./basket/basket";
import Header from "./common/header";
import Footer from "./common/footer";
import Cookies from "js-cookie";

const Content = () => {
  const [basket, setBasket] = useState({});

  //Pizza kosárba tételekor a basket frissítése
  const handleAddToCart = (pizzaId, quantity) => {
    const basketData = JSON.parse(Cookies.get("basket"));
    if (basketData[pizzaId]) {
      //Ha van, növeljük a mennyiséget
      basketData[pizzaId] += parseInt(quantity);
    } else {
      //Ha nincs, adjuk hozzá a kosárhoz
      basketData[pizzaId] = parseInt(quantity);
    }
    //Menti a basket cookie-t, 1 napra
    Cookies.set("basket", JSON.stringify(basketData), { expires: 1 });
    setBasket(basketData);
  };

  const handleRemoveFromCart = (pizzaId) => {
    const basketData = JSON.parse(Cookies.get("basket"));
    //Ellenőrizzü pizza benne van-e a kosárban
    if (basketData[String(pizzaId)]) {
      //Töröljük a pizzaId-t
      delete basketData[String(pizzaId)];
      //Frissítjük a cookie-t és beállítjuk az új kosáradatokat
      Cookies.set("basket", JSON.stringify(basketData), { expires: 1 });
      setBasket(basketData);
    }
  };

  const handleRemoveAllFromCart = () => {
    Cookies.set("basket", JSON.stringify({}), { expires: 1 });
    setBasket({});
    console.log("A kosár kiürítve.");
  };

  //Oldal Betöltésnél betölti a basket cookie-t
  useEffect(() => {
    //Ellenőrzi, hogy a 'basket' cookie létezik-e
    let basket = Cookies.get("basket");

    if (!basket) {
      //Ha nincs basket cookie, létrehozza
      basket = {};
      Cookies.set("basket", JSON.stringify(basket), { expires: 1 });
    } else {
      //Ha létezik, parse-olja JSON-re
      basket = JSON.parse(basket);
      setBasket(basket);
      console.log("Basket cookie betöltve:", basket);
    }
  }, []);

  return (
    <Router>
      <Header basket={basket} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/pizza"
          element={<Pizza handleAddToCart={handleAddToCart} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/basket"
          element={
            <Basket
              handleRemoveFromCart={handleRemoveFromCart}
              handleRemoveAllFromCart={handleRemoveAllFromCart}
            />
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default Content;
