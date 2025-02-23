import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import apiClient from '../../api/axios';

//Jobb fenti kosár infó component
const Cart = ({ basket }) => {
  const [cartInfo, setCartInfo] = useState({ totalItems: 0, totalPrice: 0 });

  //Basket változásánál elküldjük a cookie-ban lévő pizzákat az api-nak és frissítjük a kosár tartalmát
  useEffect(() => {
    fetchBasketInfo();
  }, [basket]);

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
      } else {
        console.log("Sikertelen response");
      }
    } catch (error) {
      console.error("Hiba:", error);
    }
  };

  return (
    <div className="cart-container">
      <span className="cart-price">{cartInfo.totalPrice} Ft</span>
      <span className="cart-items">{cartInfo.totalItems}</span>
    </div>
  );
};

export default Cart;
