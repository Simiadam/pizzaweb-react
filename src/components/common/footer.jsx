import React from "react";
import { FaPhone, FaFacebook, FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-4">
      <div className="container-fluid">
        <div className="mb-3">
          <FaPhone className="me-2" />
          <span>+36 30 123 4567</span>
        </div>

        <div className="mb-3">
          <a href="https://facebook.com" target="_blank" className="text-white me-3">
            <FaFacebook size={24} />
          </a>
          <a href="https://github.com/Simiadam" target="_blank" className="text-white me-3">
            <FaGithub size={24} />
          </a>
          <a href="https://tiktok.com" target="_blank" className="text-white">
            <FaTiktok size={24} />
          </a>
        </div>

        <div className="mb-2">
          <a href="/elerhetoseg" className="text-white me-3">
            Elérhetőség
          </a>
          <a href="/szerzodesi-feltetelek" className="text-white me-3">
            Szerződési Feltételek
          </a>
          <a href="/adatvedelem" className="text-white me-3">
            Adatvédelem
          </a>
          <a href="mailto:pizza@email.hu" className="text-white">
            pizza@email.hu
          </a>
        </div>

        <small>SA - PizzaWeb</small>
      </div>
    </footer>
  );
};

export default Footer;
