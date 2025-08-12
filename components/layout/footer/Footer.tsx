import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { createLocalizedPath } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  return (
    <>
      <div
        className="footer1-sertion-area"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-logo-area">
                <img
                  src="/assets/img/logo/logo-footer-balck.png"
                  style={{ height: 118, width: 155 }}
                  alt={t("logoAlt")}
                />
                <div className="space16" />
                <p>{t("description")}</p>
                <div className="space24" />
                <ul>
                  <li>
                    <Link
                      target="_blank"
                      href="https://www.tiktok.com/@moussem.mly.abdell"
                    >
                      <i className="fa-brands fa-tiktok" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href="https://www.instagram.com/moussem_moulay_abdellah?igsh=dWQweDRyZjNsYmhw"
                    >
                      <i className="fa-brands fa-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href="https://www.youtube.com/@MoussemMoulayAbdellahAmghar"
                    >
                      <i className="fa-brands fa-youtube" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="link-content">
                <h3>{t("quickLinks.title")}</h3>
                <ul>
                  <li>
                    <Link href={createLocalizedPath("/about", locale)}>
                      {t("quickLinks.aboutUs")}
                    </Link>
                  </li>
                  <li>
                    <Link href={createLocalizedPath("/partners", locale)}>
                      {t("quickLinks.partners")}
                    </Link>
                  </li>
                  <li>
                    <Link href={createLocalizedPath("/schedule2024", locale)}>
                      {t("quickLinks.schedule")}
                    </Link>
                  </li>
                  <li>
                    <Link href={createLocalizedPath("/memories2024", locale)}>
                      {t("quickLinks.memories")}
                    </Link>
                  </li>
                  <li>
                    <Link href={createLocalizedPath("/contact", locale)}>
                      {t("quickLinks.contactUs")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="link-content2">
                <h3>{t("contactUs.title")}</h3>
                <ul>
                  <li>
                    <Link href={createLocalizedPath("/contact", locale)}>
                      <img src="/assets/img/icons/phn1.svg" alt="" />
                      {t("contactUs.phone")}
                    </Link>
                  </li>
                  <li>
                    <Link href={createLocalizedPath("/contact", locale)}>
                      <img src="/assets/img/icons/location1-black.svg" alt="" />
                      {t("contactUs.location")}
                    </Link>
                  </li>
                  <li>
                    <Link href={createLocalizedPath("/contact", locale)}>
                      <img src="/assets/img/icons/mail1.svg" alt="" />
                      {t("contactUs.email")}
                    </Link>
                  </li>
                  <li>
                    <Link href={createLocalizedPath("/", locale)}>
                      <img src="/assets/img/icons/world1.svg" alt="" />
                      {t("contactUs.website")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-social-box">
                <h3>{t("gallery.title")}</h3>
                <div className="space12" />
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-4">
                    <div className="img1">
                      <img
                        src="/assets/img/all-images/footer/Frame 49.png"
                        alt=""
                      />
                      <div className="icons">
                        <Link
                          href={createLocalizedPath("/memories2024", locale)}
                        >
                          <img
                            src="/assets/img/logo/logo-white-hover.png"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <div className="img1">
                      <img
                        src="/assets/img/all-images/footer/Frame 50.png"
                        alt=""
                      />
                      <div className="icons">
                        <Link
                          href={createLocalizedPath("/memories2024", locale)}
                        >
                          <img
                            src="/assets/img/logo/logo-white-hover.png"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <div className="img1">
                      <img
                        src="/assets/img/all-images/footer/Frame 51.png"
                        alt=""
                      />
                      <div className="icons">
                        <Link
                          href={createLocalizedPath("/memories2024", locale)}
                        >
                          <img
                            src="/assets/img/logo/logo-white-hover.png"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <div className="img1">
                      <img
                        src="/assets/img/all-images/footer/Frame 52.png"
                        alt=""
                      />
                      <div className="icons">
                        <Link
                          href={createLocalizedPath("/memories2024", locale)}
                        >
                          <img
                            src="/assets/img/logo/logo-white-hover.png"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <div className="img1">
                      <img
                        src="/assets/img/all-images/footer/Frame 53.png"
                        alt=""
                      />
                      <div className="icons">
                        <Link
                          href={createLocalizedPath("/memories2024", locale)}
                        >
                          <img
                            src="/assets/img/logo/logo-white-hover.png"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <div className="img1">
                      <img
                        src="/assets/img/all-images/footer/Frame 54.png"
                        alt=""
                      />
                      <div className="icons">
                        <Link
                          href={createLocalizedPath("/memories2024", locale)}
                        >
                          <img
                            src="/assets/img/logo/logo-white-hover.png"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space60" />
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright">
                <p>
                  © Copyright {new Date().getFullYear()} - {t("copyrightText")}{" "}
                  . All Right Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
