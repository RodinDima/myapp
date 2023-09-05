import React from "react";
import "./style.scss";
import Logo from "./image/logo.svg";
import Burger from "../Burger/Burger";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <img src={Logo} alt="Логотип" className="header__img" />
          </div>
          <nav className="header__menu">
            <ul className="menu__list">
              <li className="menu__item">
                <a href="" className="menu__item-link">
                  Про нас
                </a>
              </li>
              <li className="menu__item">
                <a href="" className="menu__item-link">
                  Каталог
                </a>
              </li>
              <li className="menu__item">
                <a href="" className="menu__item-link">
                  Команда
                </a>
              </li>
              <li className="menu__item">
                <a href="" className="menu__item-link">
                  Відгуки
                </a>
              </li>
              <li className="menu__item">
                <a href="" className="menu__item-link">
                  Курси
                </a>
              </li>
              <li className="menu__item">
                <a href="" className="menu__item-link">
                  Контакти
                </a>
              </li>
            </ul>
          </nav>
          <div className="header__tel">+45 65 78 98 76</div>
          <Burger />
        </div>
      </header>
    </>
  );
};
export default Header;
