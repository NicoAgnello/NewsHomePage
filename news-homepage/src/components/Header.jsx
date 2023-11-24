import { useState } from "react";
import "../assets/Header.css";
import logo from "../assets/images/logo.svg";

const Header = () => {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <header>
        <img src={logo} alt="logo" />
        <button id="open-button" className="open-menu" onClick={openMenu}>
          Abrir
        </button>
        <nav className={open ? "nav-container show-nav" : "nav-container"}>
          <div id="nav" className="close-container">
            <button id="close-button" onClick={closeMenu}>
              Cerrar
            </button>
          </div>
          <ul className="nav-list ">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">New</a>
            </li>
            <li>
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
