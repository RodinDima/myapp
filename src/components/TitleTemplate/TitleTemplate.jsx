import React from "react";
import style from "./TitleTemplate.module.scss";

const TitleTemplate = ({ text, className }) => {

  return <div className={className !== undefined ? `${style["special-text"]} ${className}` : `${style["special-text"]}`}>{text}</div>;
};

export default TitleTemplate;
