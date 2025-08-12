import { useTranslations, useLocale } from "next-intl";

export default function Section2() {
  const locale = useLocale();
  const t = useTranslations("AboutPage");
  return (
    <>
      <div className="about1-section-area spTmp2">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
