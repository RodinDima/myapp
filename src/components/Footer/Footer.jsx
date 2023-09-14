import React from "react";
import Logo from "./image/logo.svg";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <img
            src={Logo}
            alt="Логотип торгової марки Candler"
            className="footer__img"
          />
        </div>
        <nav className="footer__menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="#" className="menu__item-link">
                Про нас
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__item-link">
                Каталог
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__item-link">
                Команда
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__item-link">
                Відгуки
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__item-link">
                Курси
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__item-link">
                Контакти
              </a>
            </li>
          </ul>
        </nav>
        <div className="footer__right">
          <div className="footer__tel">
            <a href="tel:+4565789876">+45 65 78 98 76</a>
          </div>
        </div>
      
      </div>
    </footer>
  );
};
export default Footer;
