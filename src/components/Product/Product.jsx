import React from "react";
import One from "./Images/one.jpg";
import { TEXT } from "../Constants";
import Button from "../Button/Button";
import TitleTemplate from "../TitleTemplate/TitleTemplate";
import "./style.scss";

const Product = () => {
  return (
    <section className="product">
      <div className="product__container">
        <div className="product__inner">
          <div className="product__content">
            <h3 className="product__content-title">
              <TitleTemplate text={TEXT.SectionProduct.title} />
            </h3>
            <p className="product__content-text">{TEXT.SectionProduct.text}</p>
          </div>
          <div className="product__items">
            <div className="product__item">
              <div className="product__item-img">
                <img src={One} alt="" />
              </div>
              <div className="product__item-price">10$</div>
              <div className="product__item-title">"Сердечко кохання"</div>
              <p className="product__item-text">
                Запах: ніжний аромат троянди та ванілі. Для чого: для атмосфери
                романтичного настрою
              </p>
              <Button buttonText="Купити" />
            </div>
            <div className="product__item">
              <div className="product__item-img">
                <img src={One} alt="" />
              </div>
              <div className="product__item-price">10$</div>
              <div className="product__item-title">"Сердечко кохання"</div>
              <p className="product__item-text">
                Запах: ніжний аромат троянди та ванілі. Для чого: для атмосфери
                романтичного настрою
              </p>
              <Button buttonText="Купити" />
            </div>
            <div className="product__item">
              <div className="product__item-img">
                <img src={One} alt="" />
              </div>
              <div className="product__item-price">10$</div>
              <div className="product__item-title">"Сердечко кохання"</div>
              <p className="product__item-text">
                Запах: ніжний аромат троянди та ванілі. Для чого: для атмосфери
                романтичного настрою
              </p>
              <Button buttonText="Купити" />
            </div>
            <div className="product__item">
              <div className="product__item-img">
                <img src={One} alt="" />
              </div>
              <div className="product__item-price">10$</div>
              <div className="product__item-title">"Сердечко кохання"</div>
              <p className="product__item-text">
                Запах: ніжний аромат троянди та ванілі. Для чого: для атмосфери
                романтичного настрою
              </p>
              <Button buttonText="Купити" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
