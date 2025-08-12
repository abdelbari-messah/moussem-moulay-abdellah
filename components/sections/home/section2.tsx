"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import CountUp from "react-countup";
import { createLocalizedPath } from "@/i18n/navigation";

export default function Section2() {
  const locale = useLocale();
  const t = useTranslations("HomePage");
  return (
    <>
      <div className="about1-section-area sp1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-imges">
                <div className="img1 reveal image-anime">
                  <img
                    src="/assets/img/all-images/about/about-1.jpg"
                    alt="about img1"
                  />
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="space30" />
                    <div className="img1 reveal image-anime">
                      <img
                        src="/assets/img/all-images/about/about-2.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="space30" />
                    <div className="img1 reveal image-anime">
                      <img
                        src="/assets/img/all-images/about/about-9.JPG"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="about-btnarea">
                  <Link href={createLocalizedPath("/about", locale)}>
                    <span>
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                    <br />
                    <div className="space12" />
                    {t("section2.buyTicket")}
                  </Link>
                </div> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-header-area heading2"
                dir={locale === "ar" ? "rtl" : "ltr"}
              >
                <h5 data-aos="fade-left" data-aos-duration={800}>
                  {t("section2.title")}
                </h5>
                <div className="space16" />
                <h2 className="text-anime-style-3">{t("section2.subtitle")}</h2>
                <div className="space16" />
                <p data-aos="fade-left" data-aos-duration={900}>
                  {t("section2.description")}
                </p>
                <div className="space32" />
                <div
                  className="about-counter-area"
                  style={{
                    paddingLeft: locale === "ar" ? 20 : 0,
                  }}
                  dir={locale === "ar" ? "ltr" : "ltr"}
                >
                  <div className="counter-box">
                    <h2>
                      <CountUp
                        className="odometer"
                        enableScrollSpy={true}
                        end={5000000}
                      />
                      +
                    </h2>
                    <div className="space18" />
                    <p>{t("section2.kpis.item_1")}</p>
                  </div>
                  <div className="counter-box box2">
                    <h2>
                      <CountUp
                        className="odometer"
                        enableScrollSpy={true}
                        end={35000}
                      />
                      +
                    </h2>
                    <div className="space18" />
                    <p>{t("section2.kpis.item_2")}</p>
                  </div>
                  <div className="counter-box box2">
                    <h2>
                      <CountUp
                        className="odometer"
                        enableScrollSpy={true}
                        end={2200}
                      />
                      +
                    </h2>
                    <div className="space18" />
                    <p>{t("section2.kpis.item_3")}</p>
                  </div>
                  <div className="counter-box box3" style={{ border: "none" }}>
                    <h2>
                      <CountUp
                        className="odometer"
                        enableScrollSpy={true}
                        end={123}
                      />
                      +
                    </h2>
                    <div className="space18" />
                    <p>{t("section2.kpis.item_4")}</p>
                  </div>
                </div>
                <div className="space32" />
                <div
                  className="btn-area1"
                  data-aos="fade-left"
                  data-aos-duration={1200}
                >
                  <Link
                    href={createLocalizedPath("/contact", locale)}
                    className="vl-btn1"
                  >
                    {t("section2.buttonText")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
