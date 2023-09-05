import React from "react";
import "./style.scss";
import Button from "../Button/Button";
import { TEXT } from "../Constants";
import Group from "./Images/group.png";

const Main = () => {
  return (
    <main className="main">
      <div className="main__container">
        <div className="main__content">
          <h3 className="main__title">{TEXT.sectionMain.title}</h3>
          <p className="main__text">{TEXT.sectionMain.mainText}</p>
          <Button buttonText="Купити" />
        </div>

        <picture className="main__img">
          <img className="main__img-large" src={Group} alt="фон" />
        </picture>
      </div>
    </main>
  );
};

export default Main;
