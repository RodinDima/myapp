import React from "react";
import cn from "classnames";
import style from "./style.module.scss";

const Button = (props) => {
  const { className, buttonText } = props;
  return (
    <button className={cn(style.primalBtn, className)}>{buttonText}</button>
  );
};
export default Button;
