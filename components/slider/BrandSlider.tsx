"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
};
export default function BrandSlider() {
  return (
    <>
      <Swiper {...swiperOptions} className="brand-slider-area owl-carousel">
        <SwiperSlide className="brand-box">
          <img src="/assets/img/all-images/sponsors/image_2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="brand-box">
          <img src="/assets/img/all-images/sponsors/image_3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="brand-box">
          <img src="/assets/img/all-images/sponsors/image_4.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="brand-box">
          <img src="/assets/img/all-images/sponsors/image_5.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="brand-box">
          <img src="/assets/img/all-images/sponsors/image_6.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="brand-box">
          <img src="/assets/img/all-images/sponsors/image_7.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="brand-box">
          <img src="/assets/img/all-images/sponsors/image_8.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="brand-box">
          <img src="/assets/img/all-images/sponsors/image_9.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="brand-box">
          <img src="/assets/img/all-images/sponsors/image_10.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="brand-box">
          <img src="/assets/img/all-images/sponsors/image_11.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="brand-box">
          <img src="/assets/img/all-images/sponsors/image_12.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="brand-box">
          <img src="/assets/img/all-images/sponsors/image_13.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="brand-box">
          <img src="/assets/img/all-images/sponsors/image_14.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="brand-box">
          <img src="/assets/img/all-images/sponsors/image_15.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="brand-box">
          <img src="/assets/img/all-images/sponsors/image_16.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="brand-box">
          <img src="/assets/img/all-images/sponsors/image_17.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="brand-box">
          <img src="/assets/img/all-images/sponsors/image_18.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="brand-box">
          <img src="/assets/img/all-images/sponsors/image_19.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="brand-box">
          <img src="/assets/img/all-images/sponsors/image_20.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="brand-box">
          <img src="/assets/img/all-images/sponsors/image_21.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="brand-box">
          <img src="/assets/img/all-images/sponsors/image_22.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="brand-box">
          <img src="/assets/img/all-images/sponsors/image_23.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
