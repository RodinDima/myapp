import React, { useState } from "react";
import TitleTemplate from "../TitleTemplate/TitleTemplate";
import { TEXT } from "../Constants";
import Faq from "../Faq/Faq";
import "./style.scss";

const Question = () => {
  return (
    <section className="question">
      <div className="question__container">
        <h3 className="question__title">
          <TitleTemplate className="question-title" text={TEXT.SectionQuestion.title} />
        </h3>
        <Faq />
      </div>
    </section>
  );
};

export default Question;
