"use client";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  navigation: {
    nextEl: ".owl-next",
    prevEl: ".owl-prev",
  },

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
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
};

export default function Section4() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  return (
    <>
      <div className="team1-section-area spTmp1">
        <div className="container" style={{ paddingTop: 50 }}>
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="memory-header text-center heading2 space-margin60">
                <h5 data-aos="fade-left" data-aos-duration={800}>
                  {t("section4.title")}
                </h5>
                <div className="space16" />
                <h2 className="text-anime-style-3">{t("section4.subtitle")}</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 position-relative">
              <Swiper {...swiperOptions} className="team-slider-area ">
                <SwiperSlide className="team-widget-boxarea">
                  <div className="img1 image-anime">
                    <img src="/assets/img/organizers/organizer-1.png" alt="" />
                    <ul>
                      <Link
                        style={{
                          fontWeight: "bold",
                          fontSize: 20,
                          color: "#fff",
                        }}
                        href=""
                      >
                        {t("section4.organizers.item_1")}
                      </Link>
                    </ul>
                  </div>
                  <div className="space20" />
                </SwiperSlide>
                <SwiperSlide className="team-widget-boxarea">
                  <div className="img1 image-anime">
                    <img src="/assets/img/organizers/organizer-2.png" alt="" />
                    <ul>
                      <Link
                        style={{
                          fontWeight: "bold",
                          fontSize: 20,
                          color: "#fff",
                        }}
                        href=""
                      >
                        {t("section4.organizers.item_2")}
                      </Link>
                    </ul>
                  </div>
                  <div className="space20" />
                </SwiperSlide>
                <SwiperSlide className="team-widget-boxarea">
                  <div className="img1 image-anime">
                    <img src="/assets/img/organizers/organizer-4.png" alt="" />

                    <ul>
                      <Link
                        style={{
                          fontWeight: "bold",
                          fontSize: 20,
                          color: "#fff",
                        }}
                        href=""
                      >
                        {t("section4.organizers.item_3")}
                      </Link>
                    </ul>
                  </div>
                  <div className="space20" />
                </SwiperSlide>
                <SwiperSlide className="team-widget-boxarea">
                  <div className="img1 image-anime">
                    <img src="/assets/img/organizers/organizer-3.png" alt="" />
                    <ul>
                      <Link
                        style={{
                          fontWeight: "bold",
                          fontSize: 20,
                          color: "#fff",
                        }}
                        href=""
                      >
                        {t("section4.organizers.item_4")}
                      </Link>
                    </ul>
                  </div>
                  <div className="space20" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
