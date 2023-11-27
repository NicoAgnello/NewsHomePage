import { useState } from "react";
import "../assets/Header.css";
import logo from "../assets/images/logo.svg";
import openIcon from "../assets/images/icon-menu.svg";
import closeIcon from "../assets/images/icon-menu-close.svg";

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
        <button  className="open-menu" onClick={openMenu}>
          <img src={openIcon} alt="openIcon" />
        </button>
        <nav className={open ? "nav-container show-nav" : "nav-container"}>
          <div className="close-container">
            <button className="close-button p-2" onClick={closeMenu}>
            <img className="svg-button" src={closeIcon} alt="openIcon" />
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
