import React, { useState } from "react";
import "./style.scss";

const Burger = () => {
  const [open, setOpen] = useState();
  const toggleBurger = () => {
    setOpen(!open);
  };

  return (
    <>
      <button className="header__burger" onClick={toggleBurger}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`burger__menu ${open ? "open" : ""}`}>
        <div className="burger__close" onClick={toggleBurger}>
          <span></span>
          <span></span>
        </div>
        <ul className="burger__list">
          <li className="burger__item">
            <a href="#" className="burger__item-link">
              Про нас
            </a>
          </li>
          <li className="burger__item">
            <a href="#" className="burger__item-link">
              Каталог
            </a>
          </li>
          <li className="burger__item">
            <a href="#" className="burger__item-link">
              Команда
            </a>
          </li>
          <li className="burger__item">
            <a href="#" className="burger__item-link">
              Відгуки
            </a>
          </li>
          <li className="burger__item">
            <a href="#" className="burger__item-link">
              Курси
            </a>
          </li>
          <li className="burger__item">
            <a href="#" className="burger__item-link">
              Контакти
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Burger;
