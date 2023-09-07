import React from "react";
import style from "./TitleTemplate.module.scss";

const TitleTemplate = ({ text }) => {
  return (
    <div className={(style["special-text"])}>
      {text}
    </div>
  );
};



export default TitleTemplate;
