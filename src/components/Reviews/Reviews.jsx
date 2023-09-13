import React from "react";
import TitleTemplate from "../TitleTemplate/TitleTemplate";
import { TEXT } from "../Constants";
import TextTemplate from "../TextTemplate/TextTemplate";
import Button from "../Button/Button";
import Candle from "./Image/candle.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Decor from "./Image/reviews-decor.png";
import "swiper/css";
import "swiper/css/pagination";
import "./style.scss";

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="reviews__container">
        <div className="reviews__content">
          <h3 className="reviews__title">
            <TitleTemplate text={TEXT.SectionReviews.title} />
          </h3>
          <p className="reviews__text">
            <TextTemplate text={TEXT.SectionReviews.text} />
          </p>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{ type: "bullets", clickable: true }}
        >
          <SwiperSlide>
            <div className="reviews__slider">
              <div className="reviews__slider-img">
                <img src={Candle} alt="candle" />
              </div>
              <div className="reviews__slider-item">
                <div className="reviews__slider-title">
                  {TEXT.SectionReviews.sliderTitle}
                </div>
                <div className="reviews__slider-text">
                  {TEXT.SectionReviews.sliderText}
                </div>
                <div className="reviews__btn">
                  <Button className="rev-btn" buttonText="Купити цей товар" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="reviews__slider">
              <div className="reviews__slider-img">
                <img src={Candle} alt="candle" />
              </div>
              <div className="reviews__slider-item">
                <div className="reviews__slider-title">
                  {TEXT.SectionReviews.sliderTitle}
                </div>
                <div className="reviews__slider-text">
                  {TEXT.SectionReviews.sliderText}
                </div>
                <div className="reviews__btn">
                  <Button className="rev-btn" buttonText="Купити цей товар" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="reviews__slider">
              <div className="reviews__slider-img">
                <img src={Candle} alt="candle" />
              </div>
              <div className="reviews__slider-item">
                <div className="reviews__slider-title">
                  {TEXT.SectionReviews.sliderTitle}
                </div>
                <div className="reviews__slider-text">
                  {TEXT.SectionReviews.sliderText}
                </div>
                <div className="reviews__btn">
                  <Button className="rev-btn" buttonText="Купити цей товар" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="reviews__slider">
              <div className="reviews__slider-img">
                <img src={Candle} alt="candle" />
              </div>
              <div className="reviews__slider-item">
                <div className="reviews__slider-title">
                  {TEXT.SectionReviews.sliderTitle}
                </div>
                <div className="reviews__slider-text">
                  {TEXT.SectionReviews.sliderText}
                </div>
                <div className="reviews__btn">
                  {" "}
                  <Button className="rev-btn" buttonText="Купити цей товар" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="reviews__slider-decor">
          <img src={Decor} alt="" />
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
