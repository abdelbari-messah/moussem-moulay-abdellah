"use client";
import Countdown from "@/components/elements/Countdown";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { createLocalizedPath } from "@/i18n/navigation";

export default function Section9() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  return (
    <>
      <div className="cta1-section-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <div
                className="cta1-main-boxarea"
                dir={locale === "ar" ? "rtl" : "ltr"}
              >
                <div
                  className="timer-btn-area"
                  style={{
                    justifyContent: locale === "ar" ? " space-around" : "",
                  }}
                >
                  <Countdown />
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
                <div className="location-area">
                  <ul>
                    <li>
                      <Link href={createLocalizedPath("/schedule2024", locale)}>
                        <img
                          src="/assets/img/icons/calender1-black.svg"
                          alt=""
                        />
                        {t("section9.dateAndTime")}
                      </Link>
                    </li>
                    <li>
                      <Link href={createLocalizedPath("/contact", locale)}>
                        <img
                          src="/assets/img/icons/location1-black.svg"
                          alt=""
                        />
                        {t("section9.location")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
