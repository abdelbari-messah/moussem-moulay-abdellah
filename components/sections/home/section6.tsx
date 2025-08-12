"use client";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { createLocalizedPath } from "@/i18n/navigation";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".owl-next",
    prevEl: ".owl-prev",
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

export default function Section6() {
  const router = useRouter();

  const t = useTranslations("HomePage");
  const locale = useLocale();
  return (
    <>
      <div className="memory1-section-area spTmp2">
        <div className="container" style={{ paddingBottom: 50 }}>
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="memory-header text-center heading2 space-margin60">
                <h5 data-aos="fade-left" data-aos-duration={800}>
                  {t("section6.title")}
                </h5>
                <div className="space16" />
                <h2 className="text-anime-style-3">{t("section6.heading")}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 memory-slider-area">
              <Swiper {...swiperOptions} className=" owl-carousel">
                <SwiperSlide
                  className="memory-boxarea"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    router.push("/memories2024");
                  }}
                >
                  <div className="img1 image-anime">
                    <img
                      src="/assets/img/all-images/memory2024/m-14.png"
                      alt=""
                    />
                  </div>
                  <div
                    className="content-area"
                    style={{
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "space-between",
                      cursor: "pointer",
                    }}
                    dir={locale === "ar" ? "rtl" : "ltr"}
                  >
                    <div>
                      <p>{t("section6.slides.item_1.eventYear")}</p>
                      <div className="space12" />
                      <Link href={createLocalizedPath("/memories2024", locale)}>
                        {t("section6.slides.item_1.eventType")}
                      </Link>
                    </div>
                    <div className="arrow">
                      <Link href={createLocalizedPath("/memories2024", locale)}>
                        <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="memory-boxarea"
                  style={{ backgroundColor: "#ccc", cursor: "pointer" }}
                  onClick={() => {
                    router.push("/memories2024");
                  }}
                >
                  <div className="img1 image-anime">
                    <img
                      src="/assets/img/all-images/memory2024/m-12.png"
                      alt=""
                    />
                  </div>
                  <div
                    className="content-area"
                    style={{
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                    dir={locale === "ar" ? "rtl" : "ltr"}
                  >
                    <div>
                      <p>{t("section6.slides.item_2.eventYear")}</p>
                      <div className="space12" />
                      <Link href={createLocalizedPath("/memories2024", locale)}>
                        {t("section6.slides.item_2.eventType")}
                      </Link>
                    </div>
                    <div className="arrow">
                      <Link href={createLocalizedPath("/memories2024", locale)}>
                        <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="memory-boxarea"
                  style={{ backgroundColor: "#ccc", cursor: "pointer" }}
                  onClick={() => {
                    router.push("/memories2024");
                  }}
                >
                  <div className="img1 image-anime">
                    <img
                      src="/assets/img/all-images/memory2024/m-11.png"
                      alt=""
                    />
                  </div>
                  <div
                    className="content-area"
                    style={{
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                    dir={locale === "ar" ? "rtl" : "ltr"}
                  >
                    <div>
                      <p>{t("section6.slides.item_3.eventYear")}</p>
                      <div className="space12" />
                      <Link href={createLocalizedPath("/memories2024", locale)}>
                        {t("section6.slides.item_3.eventType")}
                      </Link>
                    </div>
                    <div className="arrow">
                      <Link href={createLocalizedPath("/memories2024", locale)}>
                        <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="memory-boxarea"
                  style={{ backgroundColor: "#ccc", cursor: "pointer" }}
                  onClick={() => {
                    router.push("/memories2024");
                  }}
                >
                  <div className="img1 image-anime">
                    <img
                      src="/assets/img/all-images/memory2024/m-16.png"
                      alt=""
                    />
                  </div>
                  <div
                    className="content-area"
                    style={{
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                    dir={locale === "ar" ? "rtl" : "ltr"}
                  >
                    <div>
                      <p>{t("section6.slides.item_4.eventYear")}</p>
                      <div className="space12" />
                      <Link href={createLocalizedPath("/memories2024", locale)}>
                        {t("section6.slides.item_4.eventType")}
                      </Link>
                    </div>
                    <div className="arrow">
                      <Link href={createLocalizedPath("/memories2024", locale)}>
                        <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="memory-boxarea"
                  style={{ backgroundColor: "#ccc", cursor: "pointer" }}
                  onClick={() => {
                    router.push("/memories2024");
                  }}
                >
                  <div className="img1 image-anime">
                    <img
                      src="/assets/img/all-images/memory2024/m-4.png"
                      alt=""
                    />
                  </div>
                  <div
                    className="content-area"
                    style={{
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                    dir={locale === "ar" ? "rtl" : "ltr"}
                  >
                    <div>
                      <p>{t("section6.slides.item_4.eventYear")}</p>
                      <div className="space12" />
                      <Link href={createLocalizedPath("/memories2024", locale)}>
                        {t("section6.slides.item_4.eventType")}
                      </Link>
                    </div>
                    <div className="arrow">
                      <Link href={createLocalizedPath("/memories2024", locale)}>
                        <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="memory-boxarea"
                  style={{ backgroundColor: "#ccc", cursor: "pointer" }}
                  onClick={() => {
                    router.push("/memories2024");
                  }}
                >
                  <div className="img1 image-anime">
                    <img
                      src="/assets/img/all-images/memory2024/m-19.png"
                      alt=""
                    />
                  </div>
                  <div
                    className="content-area"
                    style={{
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                    dir={locale === "ar" ? "rtl" : "ltr"}
                  >
                    <div>
                      <p>{t("section6.slides.item_5.eventYear")}</p>
                      <div className="space12" />
                      <Link href={createLocalizedPath("/memories2024", locale)}>
                        {t("section6.slides.item_5.eventType")}
                      </Link>
                    </div>
                    <div className="arrow">
                      <Link href={createLocalizedPath("/memories2024", locale)}>
                        <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="owl-nav">
                <button
                  type="button"
                  role="presentation"
                  className="owl-prev h1p"
                >
                  <i className="fa-solid fa-angle-left" />
                </button>
                <button
                  type="button"
                  role="presentation"
                  className="owl-next h1n"
                >
                  <i className="fa-solid fa-angle-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
