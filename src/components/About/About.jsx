import React from "react";
import { TEXT } from "../Constants";
import Square from "./Images/square.jpg";
import Square2 from "./Images/square2.jpg";
import Candle from "./Images/candle.png";
import "./style.scss";

const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__content">
          <div className="about__content-title">{TEXT.sectionAbout.title}</div>
          <p className="about__content-text">{TEXT.sectionAbout.aboutText}</p>
          <p className="about__content-text2">{TEXT.sectionAbout.aboutText2}</p>
        </div>
        <div className="about__list">
          <div className="about__item">
            <img
              src={Square}
              alt="beautiful candle"
              className="about__item-img"
            />
            <p className="about__item-text">Насолоджуйтеся моментом</p>
          </div>
          <div className="about__item">
            <img
              src={Candle}
              alt="more beautiful candle"
              className="about__item-img--big"
            />
            <p className="about__item-text">Виготовлені з любов'ю</p>
          </div>

          <div className="about__item">
            <img
              src={Square2}
              alt="more beautiful candle"
              className="about__item-img"
            />
            <p className="about__item-text">Створіть улюблену атмосферу</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
