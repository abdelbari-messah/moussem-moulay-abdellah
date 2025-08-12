import { useLocale, useTranslations } from "next-intl";

export default function Section7() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  return (
    <>
      <div className="brands1-section-area sp2">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 m-auto">
              <div className="brand-header heading2 space-margin60 text-center">
                <h5 data-aos="fade-left" data-aos-duration={800}>
                  {t("section7.title")}
                </h5>
                <div className="space16" />
                <h2 className="text-anime-style-3">{t("section7.subtitle")}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in"
              data-aos-duration={800}
            >
              <div className="brand-box">
                <img src="/assets/img/all-images/sponsors/image_2.png" alt="" />
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in"
              data-aos-duration={900}
            >
              <div className="brand-box">
                <img src="/assets/img/all-images/sponsors/image_4.png" alt="" />
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in"
              data-aos-duration={1000}
            >
              <div className="brand-box">
                <img src="/assets/img/all-images/sponsors/image_9.png" alt="" />
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in"
              data-aos-duration={1100}
            >
              <div className="brand-box">
                <img src="/assets/img/all-images/sponsors/image_7.png" alt="" />
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in"
              data-aos-duration={900}
            >
              <div className="brand-box">
                <img src="/assets/img/all-images/sponsors/image_6.png" alt="" />
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in"
              data-aos-duration={1000}
            >
              <div className="brand-box">
                <img
                  src="/assets/img/all-images/sponsors/image_11.png"
                  alt=""
                />
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in"
              data-aos-duration={1100}
            >
              <div className="brand-box">
                <img src="/assets/img/all-images/sponsors/image_8.png" alt="" />
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in"
              data-aos-duration={1200}
            >
              <div className="brand-box">
                <img
                  src="/assets/img/all-images/sponsors/image_10.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// setInterval(function() {
//   $('#inputfield').val(words[word_pointer]); }, 10 )
