import { useLocale, useTranslations } from "next-intl";

function Section2() {
  const t = useTranslations("ContactPage");
  const local = useLocale();
  return (
    <div className="contact-inner-section sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="memory-header text-center heading2 space-margin60">
              <h5 data-aos="fade-left" data-aos-duration={800}>
                {t("section2.head")}
              </h5>
              <div className="space16" />
              <h2 className="text-anime-style-3">{t("section2.subHead")}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="img1 image-anime">
              <img
                src="/assets/img/all-images/contact/contact-img7.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6" data-aos="zoom-in" data-aos-duration={1000}>
            <div
              className="contact4-boxarea"
              // dir={local === "ar" ? "rtl" : "ltr"}
              dir="ltr"
            >
              <h3 className="text-anime-style-3">{t("section2.title")}</h3>
              <div className="space8" />
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="input-area">
                    <input type="text" placeholder="Name" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="input-area">
                    <input type="text" placeholder="Phone" />
                  </div>
                </div>
                <div className="col-lg-12 col-md-6">
                  <div className="input-area">
                    <input type="email" placeholder="Email" />
                  </div>
                </div>
                <div className="col-lg-12 col-md-6">
                  <div className="input-area">
                    <input type="text" placeholder="Subjects" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-area">
                    <textarea placeholder="Message" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="space24" />
                  <div
                    className="input-area text-end"
                    style={{ display: "flex" }}
                  >
                    <button type="submit" className="vl-btn1">
                      {t("section2.buttonText")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
