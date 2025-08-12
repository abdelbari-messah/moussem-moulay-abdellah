import BrandSlider from "@/components/slider/BrandSlider";
import { useLocale, useTranslations } from "next-intl";

function Section3() {
  const t = useTranslations("AboutPage");
  return (
    <div className="brands3-section-area sp2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="memory-header text-center heading2 space-margin60">
              <h5 data-aos="fade-left" data-aos-duration={800}>
                {t("section3.title")}
              </h5>
              <div className="space16" />
              <h2 className="text-anime-style-3">{t("section3.subtitle")}</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12" data-aos="zoom-in" data-aos-duration={800}>
            <BrandSlider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
