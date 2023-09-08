import React from "react";
import "./style.scss";
import TitleTemplate from "../TitleTemplate/TitleTemplate";
import { TEXT } from "../Constants";
import TextTemplate from "../TextTemplate/TextTemplate";
import Candle from "./Images/candle.jpg";

const Steps = () => {
  return (
    <>
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
            <ol className="steps__list">
              <li className="steps__item steps__item--odd">
                <p className="steps__item-text">
                  {TEXT.SelectionSteps.stepsText1}
                </p>
                <div className="steps__item-img">
                  <img src={Candle} alt="" />
                </div>
              </li>
              <li className="steps__item steps__item--odd">
                <p className="steps__item-text">
                  {TEXT.SelectionSteps.stepsText2}
                </p>
                <div className="steps__item-img">
                  <img src={Candle} alt="" />
                </div>
              </li>
              <li className="steps__item steps__item--even">
                <div className="steps__item-img">
                  <img src={Candle} alt="" />
                </div>
                <p className="steps__item-text">
                  {TEXT.SelectionSteps.stepsText3}
                </p>
              </li>
              <li className="steps__item steps__item--even">
                <div className="steps__item-img">
                  <img src={Candle} alt="" />
                </div>
                <p className="steps__item-text">
                  {TEXT.SelectionSteps.stepsText4}
                </p>
              </li>
              <li className="steps__item steps__item--odd">
                <p className="steps__item-text">
                  {TEXT.SelectionSteps.stepsText5}
                </p>
                <div className="steps__item-img">
                  <img src={Candle} alt="" />
                </div>
              </li>
              <li className="steps__item steps__item--odd">
                <p className="steps__item-text">
                  {TEXT.SelectionSteps.stepsText6}
                </p>
                <div className="steps__item-img">
                  <img src={Candle} alt="" />
                </div>
              </li>
              <li className="steps__item steps__item--even">
                <div className="steps__item-img">
                  <img src={Candle} alt="" />
                </div>
                <p className="steps__item-text">
                  {TEXT.SelectionSteps.stepsText7}
                </p>
              </li>
              <li className="steps__item steps__item--even">
                <div className="steps__item-img">
                  <img src={Candle} alt="" />
                </div>
                <p className="steps__item-text">
                  {TEXT.SelectionSteps.stepsText8}
                </p>
              </li>
              <li className="steps__item steps__item--odd">
                <p className="steps__item-text">
                  {TEXT.SelectionSteps.stepsText9}
                </p>
                <div className="steps__item-img">
                  <img src={Candle} alt="" />
                </div>
              </li>
              <li className="steps__item steps__item--odd">
                <p className="steps__item-text">
                  {TEXT.SelectionSteps.stepsText10}
                </p>
                <div className="steps__item-img">
                  <img src={Candle} alt="" />
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default Steps;
