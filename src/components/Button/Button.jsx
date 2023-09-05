import React from "react";
import style from "./style.module.scss";
import cn from "classnames";

const Button = (props) => {
  const { className, buttonText } = props;
  return (
    <button className={cn(style.primalBtn, className)}>{buttonText}</button>
  );
};
export default Button;
