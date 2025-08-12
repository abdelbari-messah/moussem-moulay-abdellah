"use client";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { createLocalizedPath } from "@/i18n/navigation";

export default function Section8() {
  const t = useTranslations("HomePage");

  const locale = useLocale();
  const programs = [
    {
      id: 1,
      title: t("section8.programs.religious.title"),
      date: t("section8.programs.dateRange"),
      image: "/assets/img/all-images/blog/about-6.png",
    },
    {
      id: 2,
      title: t("section8.programs.tbourida.title"),
      date: t("section8.programs.dateRange"),
      image: "/assets/img/all-images/blog/about-5.png",
    },
    {
      id: 3,
      title: t("section8.programs.artistic.title"),
      date: t("section8.programs.dateRange"),
      image: "/assets/img/all-images/blog/about-4.png",
    },
  ];

  return (
    <div
      className="blog1-section-area sp2"
      style={{ backgroundColor: "#fbf9f4" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="blog-header text-center heading2 space-margin60">
              <h5 data-aos="fade-left" data-aos-duration={900}>
                {t("section8.title")}
              </h5>
              <div className="space16" />
              <h2 className="text-anime-style-3">{t("section8.subtitle")}</h2>
            </div>
          </div>
        </div>
        <div className="row" dir={locale === "ar" ? "rtl" : "ltr"}>
          {programs.map((program, index) => (
            <div
              key={program.id}
              className="col-lg-4 col-md-6"
              data-aos="zoom-in"
              data-aos-duration={800 + index * 200}
            >
              <div className="blog1-auhtor-boxarea">
                <div className="img1 image-anime">
                  <img src={program.image} alt={program.title} />
                </div>
                <div
                  className="content-area"
                  dir={locale === "ar" ? "rtl" : "ltr"}
                >
                  <ul>
                    <li>
                      <Link href="">
                        <img
                          style={{ marginLeft: 5 }}
                          src="/assets/img/icons/calender1-black.svg"
                          alt="calendar"
                        />
                        {program.date}
                      </Link>
                    </li>
                  </ul>
                  <div className="space20" />
                  <Link
                    href={createLocalizedPath(
                      `/blog-details/${program.id}`,
                      locale
                    )}
                    style={{ marginRight: 5, fontSize: 22 }}
                  >
                    {program.title}
                  </Link>
                  <div className="space24" />
                  <div className="btn-area1">
                    <Link
                      href={createLocalizedPath(
                        `/blog-details/${program.id}`,
                        locale
                      )}
                      className="vl-btn2"
                    >
                      {t("section8.readMore")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
