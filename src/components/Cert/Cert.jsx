import React from "react";
import Img from "./Images/cert.png";
import Img2 from "./Images/cert2.jpg";
import { TEXT } from "../Constants";
import Decor from "../Reviews/Image/reviews-decor.png";
import TitleTemplate from "../TitleTemplate/TitleTemplate";
import TextTemplate from "../TextTemplate/TextTemplate";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./style.scss";

const Cert = () => {
  return (
    <section className="cert">
      <div className="cert__container">
        <div className="cert__inner">
          <div className="cert__content">
            <TitleTemplate
              className="cert__content-title"
              text={TEXT.SectionCert.title}
            />
            <TextTemplate
              className="cert__content-text"
              text={TEXT.SectionCert.text}
            />
          </div>

          <Swiper
            spaceBetween={20}
            slidesPerView={2.3}
            modules={[Pagination]}
            pagination={{ type: "bullets", clickable: true }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              445: { slidesPerView: 1 },
            }}
          >
            <SwiperSlide>
              <div className="cert__slider">
                <div className="cert__slider-item">
                  <div className="cert__slider-img">
                    <img src={Img} alt="Certificate" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cert__slider">
                <div className="cert__slider-item">
                  <div className="cert__slider-img">
                    <img src={Img2} alt="Certificate" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cert__slider">
                <div className="cert__slider-item">
                  <div className="cert__slider-img">
                    <img src={Img2} alt="Certificate" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cert__slider">
                <div className="cert__slider-item">
                  <div className="cert__slider-img">
                    <img src={Img} alt="Certificate" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cert__slider">
                <div className="cert__slider-item">
                  <div className="cert__slider-img">
                    <img src={Img} alt="Certificate" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <div className="cert__slider-decor">
              <img src={Decor} alt="" />
              <span></span>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Cert;
