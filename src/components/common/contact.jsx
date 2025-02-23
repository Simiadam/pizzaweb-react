import React, { useState } from "react";
import axios from "axios";

//Kapcsolat oldal
const Contact = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //Üzenet elküldése
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/post-sendMessage", {
        email: formData.email,
        message: formData.message,
      });

      if (response.data.success) {
        setSubmissionStatus(response.data.message);
        setFormData({ email: "", message: "" });
      } else {
        setSubmissionStatus("Hiba történt az üzenet küldése közben.");
      }
    } catch (error) {
      console.error("Hiba:", error);
      setSubmissionStatus("Hiba történt az üzenet küldése közben.");
    }
  };

  return (
    <main className="container">
      <h1>Kapcsolat</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <h3>Üzenetküldő űrlap</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email cím
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Üzenet
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="3"
                placeholder="Üzenet szövege"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Küldés
            </button>
            {submissionStatus && <div className="mt-3">{submissionStatus}</div>}
          </form>
          <div className="mt-4">
            <h3>Elérhetőségi adatok</h3>
            <ul className="list-unstyled">
              <li>
                <strong>Cím:</strong> 1234 Budapest, Pizza utca 420
              </li>
              <li>
                <strong>Telefon:</strong> +36
              </li>
              <li>
                <strong>Email:</strong> pizza@web
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <h3>Térkép</h3>
          <div className="embed-responsive">
            <iframe
              className="gmap_iframe"
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=budapest&amp;t=k&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
