import React from "react";
import Teacher1 from "./Images/teacher1.jpg";
import Teacher2 from "./Images/teacher2.jpg";
import Teacher3 from "./Images/teacher3.jpg";
import Teacher4 from "./Images/teacher4.jpg";
import TextTemplate from "../TextTemplate/TextTemplate";
import TitleTemplate from "../TitleTemplate/TitleTemplate";
import { TEXT } from "../Constants";
import "./style.scss";

const Team = () => {
  return (
    <section className="team">
      <div className="team__container">
        <div className="team__inner">
          <div className="team__content">
            <TitleTemplate text={TEXT.SectionTeam.title} />
            <TextTemplate text={TEXT.SectionTeam.text} />
          </div>
          <div className="team__items">
            <div className="team__item">
              <div className="team__img">
                <img src={Teacher1} alt="Викладач Богдан" />
              </div>
              <div className="team__item-box">
                <p className="team__item-title">{TEXT.SectionTeam.teacher1}</p>
                <p className="team__item-text">
                  {TEXT.SectionTeam.teacher1Descr}
                </p>
              </div>
            </div>
            <div className="team__item">
              <div className="team__img">
                <img src={Teacher2} alt="Викладач Богдан" />
              </div>
              <div className="team__item-box">
                <p className="team__item-title">{TEXT.SectionTeam.teacher2}</p>
                <p className="team__item-text">
                  {TEXT.SectionTeam.teacher2Descr}
                </p>
              </div>
            </div>
            <div className="team__item">
              <div className="team__img">
                <img src={Teacher3} alt="Викладач Богдан" />
              </div>
              <div className="team__item-box">
                <p className="team__item-title">{TEXT.SectionTeam.teacher3}</p>
                <p className="team__item-text">
                  {TEXT.SectionTeam.teacher3Descr}
                </p>
              </div>
            </div>
            <div className="team__item">
              <div className="team__img">
                <img src={Teacher4} alt="Викладач Богдан" />
              </div>
              <div className="team__item-box">
                <p className="team__item-title">{TEXT.SectionTeam.teacher4}</p>
                <p className="team__item-text">
                  {TEXT.SectionTeam.teacher4Descr}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
