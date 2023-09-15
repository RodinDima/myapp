import React from "react";
import Button from "../Button/Button";
import "./style.scss";
import { TEXT } from "../Constants";
import TitleTemplate from "../TitleTemplate/TitleTemplate";

const Link = () => {
  return (
    <section className="link">
      <section className="link__container">
        <TitleTemplate className="link__title" text={TEXT.SectionLink.title} />
        <Button className="link-btn" buttonText="В каталог" />
      </section>
    </section>
  );
};

export default Link;
