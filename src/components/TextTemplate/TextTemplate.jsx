import React from "react";
import style from "./TextTemplate.module.scss";

const TextTemplate = ({ text }) => {
  return <div className={style["special-text"]}>{text}</div>;
};

export default TextTemplate;
