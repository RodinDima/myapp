import React from "react";
import style from "./TextTemplate.module.scss";

const TextTemplate = ({ text , className }) => {
  return (
    <div
      className={
        className !== undefined
          ? `${style["special-text"]} ${className}`
          : `${style["special-text"]}`
      }
    >
      {text}
    </div>
  );
};

export default TextTemplate;
