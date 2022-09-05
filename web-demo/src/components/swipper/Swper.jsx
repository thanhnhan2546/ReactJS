import React, { useRef, useState } from "react";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
export default function Swper(props) {
  return (
    <>
      <br />
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        className="mySwiper"
        navigation={true}
        // modules={[Navigation]}

        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
          <img
            onMouseEnter={(e) => {
              props.handleMouseEnter(e);
            }}
            onMouseLeave={(e) => {
              props.handleMouseLeave(e);
            }}
            src={process.env.PUBLIC_URL + "/images/imgSwipper/images1.jpg"}
            alt=".."
            className="images-swipper"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            onMouseEnter={(e) => {
              props.handleMouseEnter(e);
            }}
            onMouseLeave={(e) => {
              props.handleMouseLeave(e);
            }}
            src={process.env.PUBLIC_URL + "/images/imgSwipper/images2.jpg"}
            alt=".."
            className="images-swipper"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            onMouseEnter={(e) => {
              props.handleMouseEnter(e);
            }}
            onMouseLeave={(e) => {
              props.handleMouseLeave(e);
            }}
            src={process.env.PUBLIC_URL + "/images/imgSwipper/images3.jpg"}
            alt=".."
            className="images-swipper"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            onMouseEnter={(e) => {
              props.handleMouseEnter(e);
            }}
            onMouseLeave={(e) => {
              props.handleMouseLeave(e);
            }}
            src={process.env.PUBLIC_URL + "/images/imgSwipper/images4.jpg"}
            alt=".."
            className="images-swipper"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            onMouseEnter={(e) => {
              props.handleMouseEnter(e);
            }}
            onMouseLeave={(e) => {
              props.handleMouseLeave(e);
            }}
            src={process.env.PUBLIC_URL + "/images/imgSwipper/images5.jpg"}
            alt=".."
            className="images-swipper"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            onMouseEnter={(e) => {
              props.handleMouseEnter(e);
            }}
            onMouseLeave={(e) => {
              props.handleMouseLeave(e);
            }}
            src={process.env.PUBLIC_URL + "/images/imgSwipper/images6.jpg"}
            alt=".."
            className="images-swipper"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
