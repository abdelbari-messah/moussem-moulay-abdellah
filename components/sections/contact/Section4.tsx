import { useTranslations } from "next-intl";
import Link from "next/link";
import { createLocalizedPath } from "@/i18n/navigation";

function Section4() {
  const t = useTranslations("ContactPage");
  return (
    <>
      <div className="row">
        <div className="col-lg-6 m-auto">
          <div className="memory-header text-center heading2 spTmp2">
            <h2 className="text-anime-style-3">{t("section4.title")}</h2>
          </div>
        </div>
      </div>
      <div className="contact2-bg-section" style={{ position: "relative" }}>
        <div className="bg1">
          <img
            src="/assets/img/bg/hbg5.png"
            alt=""
            className="header-bg1"
            style={{ opacity: 0.95 }}
          />
        </div>

        <div
          className="container"
          style={{
            paddingBottom: 45,
          }}
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="space48" />
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div
                    className="contact-boxarea"
                    data-aos="zoom-in"
                    data-aos-duration={900}
                  >
                    <div className="icons">
                      <img src="/assets/img/icons/mail1.svg" alt="" />
                    </div>
                    <div className="text">
                      <h5>{t("section4.emailTitle")}</h5>
                      <div className="space14" />
                      <Link href="/maito:eventify@gmail.com">
                        filat.distr@gmail.com
                      </Link>
                    </div>
                  </div>
                  <div className="space18" />
                  <div
                    className="contact-boxarea"
                    data-aos="zoom-in"
                    data-aos-duration={1000}
                  >
                    <div className="icons">
                      <img src="/assets/img/icons/tiktok.svg" alt="" />
                    </div>
                    <div className="text">
                      <h5>{t("section4.locationTitle")}</h5>
                      <div className="space14" />
                      <Link
                        target="_blank"
                        href="https://www.tiktok.com/@moussem.mly.abdell"
                      >
                        @moussem.mly.abdell
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="space20 d-md-none d-block" />
                  <div
                    className="contact-boxarea"
                    data-aos="zoom-in"
                    data-aos-duration={1000}
                  >
                    <div className="icons">
                      <img src="/assets/img/icons/phn1.svg" alt="" />
                    </div>
                    <div className="text">
                      <h5>{t("section4.phoneTitle")}</h5>
                      <div className="space14" />
                      <Link href="/tel:+11234567890">+212 661-192597</Link>
                    </div>
                  </div>
                  <div className="space18" />
                  <div
                    className="contact-boxarea"
                    data-aos="zoom-in"
                    data-aos-duration={1200}
                  >
                    <div className="icons">
                      <img src="/assets/img/icons/instagram.svg" alt="" />
                    </div>
                    <div className="text">
                      <h5>Instagram</h5>
                      <div className="space14" />
                      <Link
                        target="_blank"
                        href="https://www.instagram.com/moussem_moulay_abdellah?igsh=dWQweDRyZjNsYmhw"
                      >
                        @moussem_moulay_abdellah
                      </Link>
                    </div>
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

export default Section4;
