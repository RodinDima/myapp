import React from "react";
import TitleTemplate from "../TitleTemplate/TitleTemplate";
import { TEXT } from "../Constants";
import TextTemplate from "../TextTemplate/TextTemplate";
import Candle from "./Images/candle.jpg";
import "./style.scss";

const Steps = () => {
  return (
    <section className="steps">
      <div className="steps__container">
        <div className="steps__inner">
          <div className="steps__content">
            <div className="steps__content-title">
              <TitleTemplate text={TEXT.SelectionSteps.title} />
            </div>
            <p className="steps__content-text">
              <TextTemplate text={TEXT.SelectionSteps.text} />
            </p>
          </div>
          <div className="steps__list">
            <div className="steps__item steps__item--odd">
              <span>01</span>
              <p className="steps__item-text">
                {TEXT.SelectionSteps.stepsText1}
              </p>
              <div className="steps__item-img">
                <img src={Candle} alt="Підготовка матеріалів" />
              </div>
            </div>
            <div className="steps__item steps__item--odd">
              <span>02</span>
              <p className="steps__item-text">
                {TEXT.SelectionSteps.stepsText2}
              </p>
              <div className="steps__item-img">
                <img src={Candle} alt="Підготовка форми" />
              </div>
            </div>
            <div className="steps__item steps__item--even">
              <div className="steps__item-img">
                <img src={Candle} alt="Приготування воску" />
              </div>
              <span>03</span>
              <p className="steps__item-text">
                {TEXT.SelectionSteps.stepsText3}
              </p>
            </div>
            <div className="steps__item steps__item--even">
              <div className="steps__item-img">
                <img src={Candle} alt="Підготовка фітіля" />
              </div>
              <span>04</span>
              <p className="steps__item-text">
                {TEXT.SelectionSteps.stepsText4}
              </p>
            </div>
            <div className="steps__item steps__item--odd">
              <span>05</span>
              <p className="steps__item-text">
                {TEXT.SelectionSteps.stepsText5}
              </p>
              <div className="steps__item-img">
                <img src={Candle} alt="Підготовка матеріалів" />
              </div>
            </div>
            <div className="steps__item steps__item--odd">
              <span>06</span>
              <p className="steps__item-text">
                {TEXT.SelectionSteps.stepsText6}
              </p>
              <div className="steps__item-img">
                <img src={Candle} alt="Наповнення форми" />
              </div>
            </div>
            <div className="steps__item steps__item--even">
              <div className="steps__item-img">
                <img src={Candle} alt="Приготування воску" />
              </div>
              <span>07</span>
              <p className="steps__item-text">
                {TEXT.SelectionSteps.stepsText7}
              </p>
            </div>
            <div className="steps__item steps__item--even">
              <div className="steps__item-img">
                <img src={Candle} alt="Підготовка фітіля" />
              </div>
              <span>08</span>
              <p className="steps__item-text">
                {TEXT.SelectionSteps.stepsText8}
              </p>
            </div>
            <div className="steps__item steps__item--odd">
              <span>09</span>
              <p className="steps__item-text">
                {TEXT.SelectionSteps.stepsText9}
              </p>
              <div className="steps__item-img">
                <img src={Candle} alt="Підготовка матеріалів" />
              </div>
            </div>
            <div className="steps__item steps__item--odd">
              <span>10</span>
              <p className="steps__item-text">
                {TEXT.SelectionSteps.stepsText10}
              </p>
              <div className="steps__item-img">
                <img src={Candle} alt="Наповнення форми" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
