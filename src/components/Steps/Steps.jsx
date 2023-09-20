import React, { useState } from "react";

import { TEXT } from "../Constants";

import TextTemplate from "../TextTemplate/TextTemplate";
import TitleTemplate from "../TitleTemplate/TitleTemplate";

import Candle from "./Images/candle.jpg";
import Candle2 from "./Images/candle2.jpg";
import Candle3 from "./Images/candle3.jpg";
import Candle4 from "./Images/candle4.jpg";
import Candle5 from "./Images/candle5.jpg";
import Candle6 from "./Images/candle6.jpg";
import Candle7 from "./Images/candle7.jpg";
import Candle8 from "./Images/candle8.jpg";
import Candle9 from "./Images/candle9.jpg";
import Candle10 from "./Images/candle10.jpg";

import "./style.scss";
import StepsData from "../StepsData/StepsData";

const Steps = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const showMoreItems = () => {
    setCurrentIndex((prevIndex) => prevIndex + 3);
  };

  return (
    <section className="steps">
      <div className="steps__container">
        <div className="steps__inner">
          <div className="steps__content">
            <div className="steps__content-title">
              <TitleTemplate
                className="steps__title"
                text={TEXT.SelectionSteps.title}
              />
            </div>
            <p className="steps__content-text">
              <TextTemplate
                className="steps__text"
                text={TEXT.SelectionSteps.text}
              />
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
                <img src={Candle2} alt="Підготовка форми" />
              </div>
            </div>
            <div className="steps__item steps__item--even">
              <div className="steps__item-img">
                <img src={Candle3} alt="Приготування воску" />
              </div>
              <span>03</span>
              <p className="steps__item-text">
                {TEXT.SelectionSteps.stepsText3}
              </p>
            </div>
            <div className="steps__item steps__item--even">
              <div className="steps__item-img">
                <img src={Candle4} alt="Підготовка фітіля" />
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
                <img src={Candle5} alt="Підготовка матеріалів" />
              </div>
            </div>
            <div className="steps__item steps__item--odd">
              <span>06</span>
              <p className="steps__item-text">
                {TEXT.SelectionSteps.stepsText6}
              </p>
              <div className="steps__item-img">
                <img src={Candle6} alt="Наповнення форми" />
              </div>
            </div>
            <div className="steps__item steps__item--even">
              <div className="steps__item-img">
                <img src={Candle7} alt="Приготування воску" />
              </div>
              <span>07</span>
              <p className="steps__item-text">
                {TEXT.SelectionSteps.stepsText7}
              </p>
            </div>
            <div className="steps__item steps__item--even">
              <div className="steps__item-img">
                <img src={Candle8} alt="Підготовка фітіля" />
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
                <img src={Candle9} alt="Підготовка матеріалів" />
              </div>
            </div>
            <div className="steps__item steps__item--odd">
              <span>10</span>
              <p className="steps__item-text">
                {TEXT.SelectionSteps.stepsText10}
              </p>
              <div className="steps__item-img">
                <img src={Candle10} alt="Наповнення форми" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
