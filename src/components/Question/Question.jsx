import React, { useState } from "react";
import TitleTemplate from "../TitleTemplate/TitleTemplate";
import { TEXT } from "../Constants";
import { ReactComponent as Arrow } from "./Images/Vector.svg";
import "./style.scss";

const Question = () => {
  const [open, setOpen] = useState();
  const toggleQuestions = () => {
    setOpen(!open);
  };

  return (
    <section className="question">
      <div className="question__container">
        <h3 className="question__title">
          <TitleTemplate text={TEXT.SectionQuestion.title} />
        </h3>
        <div className="question__form">
          <div className="question__items">
            <div className="question__item">
              <div className="question__text" onClick={toggleQuestions}>
                {TEXT.SectionQuestion.q1}
              </div>
              <span className="question__btn">
                <Arrow />
              </span>
            </div>
            <ol className={`question__list ${open ? "open" : ""}`}>
              <li className="question__list-item">
                {TEXT.SectionQuestion.answ1}
              </li>
              <li className="question__list-item">
                {TEXT.SectionQuestion.answ2}
              </li>
              <li className="question__list-item">
                {TEXT.SectionQuestion.answ3}
              </li>
              <li className="question__list-item">
                {TEXT.SectionQuestion.answ4}
              </li>
              <li className="question__list-item">
                {TEXT.SectionQuestion.answ5}
              </li>
            </ol>
          </div>
          <div className="question__items">
            <div className="question__item">
              <div className="question__text">{TEXT.SectionQuestion.q1}</div>
              <span className="question__btn">
                <Arrow />
              </span>
            </div>
            <ol className={`question__list ${open ? "open" : ""}`}>
              <li className="question__list-item">
                {TEXT.SectionQuestion.answ1}
              </li>
              <li className="question__list-item">
                {TEXT.SectionQuestion.answ2}
              </li>
              <li className="question__list-item">
                {TEXT.SectionQuestion.answ3}
              </li>
              <li className="question__list-item">
                {TEXT.SectionQuestion.answ4}
              </li>
              <li className="question__list-item">
                {TEXT.SectionQuestion.answ5}
              </li>
            </ol>
          </div>
          <div className="question__items">
            <div className="question__item">
              <div className="question__text">{TEXT.SectionQuestion.q1}</div>
              <span className="question__btn">
                <Arrow />
              </span>
            </div>
            <ol className={`question__list ${open ? "open" : ""}`}>
              <li className="question__list-item">
                {TEXT.SectionQuestion.answ1}
              </li>
              <li className="question__list-item">
                {TEXT.SectionQuestion.answ2}
              </li>
              <li className="question__list-item">
                {TEXT.SectionQuestion.answ3}
              </li>
              <li className="question__list-item">
                {TEXT.SectionQuestion.answ4}
              </li>
              <li className="question__list-item">
                {TEXT.SectionQuestion.answ5}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
