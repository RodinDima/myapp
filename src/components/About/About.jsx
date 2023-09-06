import React from "react";
import "./style.scss";
import { TEXT } from "../Constants";
import Square from "./Images/square.jpg";
import Square2 from "./Images/square2.jpg";
import Candle from "./Images/candle.png";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="about__container">
          <div className="about__content">
            <div className="about__content-title">
              {TEXT.sectionAbout.title}
            </div>
            <p className="about__content-text">{TEXT.sectionAbout.aboutText}</p>
            <p className="about__content-text2">
              {TEXT.sectionAbout.aboutText2}
            </p>
          </div>
          <ul className="about__list">
            <li className="about__item">
              <img src={Square} alt="" className="about__item-img" />
              <p className="about__item-text">Насолоджуйтеся моментом</p>
            </li>
            <li className="about__item">
              <img src={Candle} alt="" className="about__item-img--big" />
              <p className="about__item-text">Виготовлені з любов'ю</p>
            </li>

            <li className="about__item">
              <img src={Square2} alt="" className="about__item-img" />
              <p className="about__item-text">Створіть улюблену атмосферу</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default About;
