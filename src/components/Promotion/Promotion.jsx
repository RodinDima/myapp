import React from "react";
import Img from "./Images/img.png";
import Button from "../Button/Button";
import { TEXT } from "../Constants";
import "./style.scss";

const Promotion = () => {
  return (
    <section className="promotion">
      <div className="promotion__container">
        <div className="promotion__inner">
          <form className="promotion__form" action="">
            <p className="promotion__form-title">{TEXT.SectionForm.title}</p>
            <input
              className="promotion__form-name"
              placeholder="Ім`я"
              type="text"
            />
            <input
              className="promotion__form-email"
              placeholder="Е-mail"
              type="text"
            />
          </form>
          <Button type="submit" className="form-btn" buttonText="Підписатись" />
        </div>
        <div className="promotion__image">
          <img src={Img} alt="candle" className="promotion__img" />
        </div>
      </div>
    </section>
  );
};

export default Promotion;
