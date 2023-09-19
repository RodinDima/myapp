import React from "react";
import Button from "../Button/Button";
import { TEXT } from "../Constants";
import Group from "./Images/group.png";
import Group2 from "./Images/Group2.png";
import Group3 from "./Images/group3.png";
import "./style.scss";

const Main = () => {
  return (
    <main className="main">
      <div className="main__container">
        <div className="main__content">
          <h3 className="main__title">{TEXT.sectionMain.title}</h3>
          <p className="main__text">{TEXT.sectionMain.mainText}</p>
          <Button className="main-btn" buttonText="Купити" />
        </div>

        <picture className="main__img">
          <source
            className="main__img-sm"
            srcSet={Group3}
            media="(max-width:360px)"
          />
          <source
            className="main__img-med"
            srcSet={Group2}
            media="(max-width:481px)"
          />
          <img
            className="main__img-large"
            src={Group}
            alt="Зображення атмосфери затишку та гармонії!"
          />
        </picture>
      </div>
    </main>
  );
};

export default Main;
