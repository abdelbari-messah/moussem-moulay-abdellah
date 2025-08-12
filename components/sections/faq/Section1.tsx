import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { createLocalizedPath } from "@/i18n/navigation";

function Section1() {
  const t = useTranslations("FaqPage");
  const locale = useLocale();
  return (
    <div
      className="inner-page-header"
      style={{
        backgroundImage: "url(../assets/img/bg/bg18.jpg)",
        position: "relative",
        backgroundColor: "#ccc",
      }}
    >
      <div className="bg1">
        <img
          src="/assets/img/bg/hbg5.png"
          alt=""
          className="header-bg1"
          style={{ opacity: 0.95 }}
        />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="heading1 text-center">
              <h1>{t("section1.title")}</h1>
              <div className="space20" />
              <Link href={createLocalizedPath("/", locale)}>
                {t("section1.subtitle_1")}{" "}
                <i
                  className={`fa-solid ${
                    locale === "ar" ? "fa-angle-left" : "fa-angle-right"
                  } `}
                />
                <span>{t("section1.subtitle_2")}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
