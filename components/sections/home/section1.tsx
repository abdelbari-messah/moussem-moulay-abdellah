"use client";
import Countdown from "@/components/elements/Countdown";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import styles from "./section1.module.css";
import { createLocalizedPath } from "@/i18n/navigation";

import { useEffect, useState } from "react";

const msInSecond = 1000;
const msInMinute = 60 * msInSecond;
const msInHour = 60 * msInMinute;
const msInDay = 24 * msInHour;

const getPartsOfTimeDuration = (duration: number) => {
  const days = Math.floor(duration / msInDay);
  const hours = Math.floor((duration % msInDay) / msInHour);
  const minutes = Math.floor((duration % msInHour) / msInMinute);
  const seconds = Math.floor((duration % msInMinute) / msInSecond);

  return { days, hours, minutes, seconds };
};

export default function Section1() {
  const t = useTranslations("HomePage");

  const tm = useTranslations("Countdown");
  const locale = useLocale();
  const [isClient, setIsClient] = useState(false);
  const [timeDif, setTimeDif] = useState(0);

  const [endDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 84);
    date.setHours(23, 59, 59, 0);
    return date;
  });

  const calculateTimeLeft = () => {
    const now = Date.now();
    const difference = endDate.getTime() - now;
    return difference > 0 ? difference : 0;
  };
  useEffect(() => {
    setIsClient(true);
    setTimeDif(calculateTimeLeft());

    const interval = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeDif(newTimeLeft);
      if (newTimeLeft <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  const timeParts = getPartsOfTimeDuration(timeDif);

  if (!isClient) {
    return null;
  }

  const isRTL = locale === "ar";

  return (
    <>
      <div className="hero1-section-area">
        <div className="bg1">
          <img
            src="/assets/img/bg/hbg5.png"
            alt=""
            className="header-bg1"
            style={{ opacity: 0.95 }}
          />
        </div>
        <div style={{ paddingBottom: 50 }} className="container">
          <div
            className="row"
            style={isRTL ? { flexDirection: "row-reverse" } : {}}
          >
            <div
              className={` ${locale === "ar" ? "col-lg-5" : "col-lg-6"}`}
              style={{ paddingTop: 100 }}
            >
              <div
                className="hero1-header heading1"
                dir={locale === "ar" ? "rtl" : "ltr"}
              >
                <h5 data-aos="fade-left" data-aos-duration={800}>
                  {t("section1.subtitle")}
                </h5>
                <div className="space16" />
                <h1
                  className="text-anime-style-3 fade-left"
                  style={{
                    letterSpacing: locale === "ar" ? 3 : 0,
                    fontSize: "clamp(2.5rem, 3vw + 1rem, 4rem)",
                  }}
                >
                  {t("section1.title.item_1")}
                  <br className="d-lg-block d-none" />
                  {t("section1.title.item_2")}
                  <br className="d-lg-block d-none" />
                  {t("section1.title.item_3")}
                </h1>
                <div className="space16" />
                <div
                  data-aos="fade-left"
                  data-aos-duration={900}
                  className={styles.responsiveContainer}
                >
                  <div className={styles.locationItem}>
                    <img
                      src="/assets/img/icons/location1.svg"
                      alt={t("section1.location.iconAlt")}
                    />
                    {t("section1.location.text")}
                  </div>
                  <div className={styles.locationItem}>
                    <img
                      src="/assets/img/icons/calender1.svg"
                      alt={t("section1.date.iconAlt")}
                    />
                    {t("section1.date.text")}
                  </div>
                </div>
                <div className="space32" />
                <div
                  className="btn-area1"
                  data-aos="fade-left"
                  data-aos-duration={1100}
                  style={{
                    display: "flex",
                    gap: 25,
                  }}
                >
                  <Link
                    href={createLocalizedPath("/schedule2025", locale)}
                    className="vl-btn2"
                  >
                    {t("section1.buttons.schedule")}
                  </Link>
                  <Link
                    href={createLocalizedPath("/about", locale)}
                    className="vl-btn2"
                  >
                    {t("section1.buttons.about")}
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="header-images col-lg-6 "
              style={{ paddingBottom: 100 }}
            >
              <div className="img1" data-aos="zoom-in" data-aos-duration={1000}>
                <img src="/assets/img/all-images/hero/hero-8.png" alt="" />
              </div>
              <div
                className="images-content-area"
                data-aos="fade-up"
                data-aos-duration={900}
                style={{ textAlign: "center" }}
              >
                <div className="space12" />
                <Link href="">{t("section1.boxSection.item_1")}</Link>
                <div className="space16" />
                <p>{t("section1.boxSection.item_2")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cta1-section-area  pb-[100px]">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 m-auto">
                <div
                  style={{ backgroundColor: "#a88a7b" }}
                  className="cta1-main-boxarea"
                  dir={locale === "ar" ? "rtl" : "ltr"}
                >
                  <div
                    className="timer-btn-area"
                    style={{
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      padding: "10px 20px",
                      borderRadius: "10px",
                      margin: "10px 0",
                    }}
                  >
                    <div className=" flex justify-center items-center w-full flex-wrap gap-4 ">
                      <div className="w-[170px] h-[90px] bg-[#e2d7d1] flex justify-center items-center flex-col rounded-[20px] ">
                        <span
                          id="days1"
                          className="-mb-[10px]"
                          style={{
                            fontFamily: "Space Grotesk",
                            fontSize: "36px",
                            fontWeight: "bold",
                            color: "#000",
                          }}
                        >
                          {timeParts.days}
                        </span>
                        <span
                          style={{
                            fontFamily: "Space Grotesk",
                            fontSize: "18px",
                            fontWeight: "bold",
                            color: "#000",
                          }}
                        >
                          {tm("days")}
                        </span>
                      </div>
                      <div className="w-[170px] h-[90px] bg-[#e2d7d1] flex justify-center items-center flex-col rounded-[20px] ">
                        <span
                          id="days1"
                          className="-mb-[10px]"
                          style={{
                            fontFamily: "Space Grotesk",
                            fontSize: "36px",
                            fontWeight: "bold",
                            color: "#000",
                          }}
                        >
                          {timeParts.hours}
                        </span>
                        <span
                          style={{
                            fontFamily: "Space Grotesk",
                            fontSize: "18px",
                            fontWeight: "bold",
                            color: "#000",
                          }}
                        >
                          {tm("hours")}
                        </span>
                      </div>
                      <div className="w-[170px] h-[90px] bg-[#e2d7d1] flex justify-center items-center flex-col rounded-[20px] ">
                        <span
                          id="days1"
                          className="-mb-[10px]"
                          style={{
                            fontFamily: "Space Grotesk",
                            fontSize: "36px",
                            fontWeight: "bold",
                            color: "#000",
                          }}
                        >
                          {timeParts.minutes}
                        </span>
                        <span
                          style={{
                            fontFamily: "Space Grotesk",
                            fontSize: "18px",
                            fontWeight: "bold",
                            color: "#000",
                          }}
                        >
                          {tm("minutes")}
                        </span>
                      </div>
                      <div className="w-[170px] h-[90px] bg-[#e2d7d1] flex justify-center items-center flex-col rounded-[20px] ">
                        <span
                          className="-mb-[10px]"
                          id="days1"
                          style={{
                            fontFamily: "Space Grotesk",
                            fontSize: "36px",
                            fontWeight: "bold",
                            color: "#000",
                          }}
                        >
                          {timeParts.seconds}
                        </span>
                        <span
                          style={{
                            fontFamily: "Space Grotesk",
                            fontSize: "18px",
                            fontWeight: "bold",
                            color: "#000",
                          }}
                        >
                          {tm("seconds")}
                        </span>
                      </div>
                    </div>
                    {locale === "ar" ? (
                      <div className="btn-areaTemp">
                        <Link
                          href={createLocalizedPath("/about", locale)}
                          className="vl-btn1"
                        >
                          {t("section9.buttonText")}
                        </Link>
                      </div>
                    ) : (
                      <div className="btn-area1">
                        <Link
                          href={createLocalizedPath("/about", locale)}
                          className="vl-btn1"
                        >
                          {t("section9.buttonText")}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
