import React from "react";
import Button from "../Button/Button";
import { TEXT } from "../Constants";
import TitleTemplate from "../TitleTemplate/TitleTemplate";
import Courses1 from "./Images/courses1.jpg";
import Courses2 from "./Images/courses2.jpg";
import "./style.scss";

const Courses = () => {
  return (
    <section className="courses">
      <div className="courses__container">
        <div className="courses__inner">
          <div className="courses__content">
            <h3 className="courses__content-title">
              <TitleTemplate text={TEXT.SectionCourses.title} />
            </h3>
            <p className="courses__content-text">{TEXT.SectionCourses.text}</p>
          </div>
          <div className="courses__items">
            <div className="courses__item">
              <div className="courses__item-img">
                <img src={Courses1} alt="" />
                <p className="courses__title">Основи виготовлення свічок</p>
                <p className="courses__time">
                  Навчання <span>- 20 год</span>
                </p>
                <p className="courses__price">Ціна - 40$</p>
              </div>
              <div className="courses__item-price">10$</div>
              <div className="courses__item-title">
                {TEXT.SectionCourses.titleImg1}
              </div>
              <p className="courses__item-text">
                {TEXT.SectionCourses.textImg1}
              </p>
              <Button buttonText="Купити курс" />
            </div>
            <div className="courses__item">
              <div className="courses__item-img">
                <img src={Courses2} alt="" />
                <p className="courses__title">Мистецтво ароматерапії</p>
                <p className="courses__time">
                  Навчання <span>- 20 год</span>
                </p>
                <p className="courses__price">Ціна - 40$</p>
              </div>
              <div className="courses__item-price">10$</div>
              <div className="courses__item-title">
                {TEXT.SectionCourses.titleImg2}
              </div>
              <p className="courses__item-text">
                {TEXT.SectionCourses.textImg2}
              </p>
              <Button buttonText="Купити курс" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Courses;
