import React, { useState } from "react";
import apiClient from '../../api/axios';
import Cookies from "js-cookie";

//Megrendelés komponens
const Order = ({ handleRemoveAllFromCart }) => {
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    address: "",
    email: "",
    termsAccepted: false,
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type == "checkbox" ? checked : value,
    }));
  };

  //Megrendelés leadása
  const handleSubmit = async (e) => {
    e.preventDefault();
    const basketData = JSON.parse(Cookies.get("basket"));
    try {
      const response = await apiClient.post("/api/post-sendOrder", {
        name: formData.name,
        tel: formData.tel,
        address: formData.address,
        email: formData.email,
        termsAccepted: formData.termsAccepted,
        pizzas: basketData,
      });

      if (response.data.success) {
        setSubmissionStatus(response.data.message);
        setFormData({
          name: "",
          tel: "",
          address: "",
          email: "",
          termsAccepted: false,
        });
        handleRemoveAllFromCart();
      } else {
        setSubmissionStatus("Hiba megrendelés leadása közben.");
      }
    } catch (error) {
      console.error("Hiba:", error);
      setSubmissionStatus("Hiba megrendelés leadása közben.");
    }
  };

  return (
    <div className="order-form">
      <h2 className="page-subtitle">Rendelés</h2>
      <form onSubmit={handleSubmit} className="page-text">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Név
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tel" className="form-label">
            Telefonszám
          </label>
          <input
            type="tel"
            id="tel"
            name="tel"
            className="form-control"
            value={formData.tel}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Szállítási cím
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="form-control"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-check mb-3">
          <label htmlFor="termsAccepted" className="form-check-label">
            ÁSZF és adatvédelem elfogadása
          </label>
          <input
            type="checkbox"
            id="termsAccepted"
            name="termsAccepted"
            className="form-check-input"
            checked={formData.termsAccepted}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Megrendelés leadása
        </button>
        {submissionStatus && <div className="mt-3">{submissionStatus}</div>}
      </form>
    </div>
  );
};

export default Order;
