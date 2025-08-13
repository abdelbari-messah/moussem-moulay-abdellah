import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { DOWNLOAD_CONFIG } from "@/config/download";

import { createLocalizedPath } from "@/i18n/navigation";
import { usePathname } from "next/navigation";

export default function Header({
  scroll,
  isMobileMenu,
  handleMobileMenu,
}: any) {
  const pathname = usePathname();

  const t = useTranslations("Header");
  const locale = useLocale();

  const getLocalizedPath = (newLocale: string) => {
    const segments = pathname.split("/");
    segments.splice(1, 1, newLocale);
    return segments.join("/");
  };
  return (
    <>
      <header>
        <div
          className={`header-area homepage1 header header-sticky d-none d-lg-block ${
            scroll ? "sticky" : ""
          }`}
          dir={locale === "ar" ? "rtl" : "ltr"}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="header-elements">
                  <div className="site-logo">
                    <Link href={createLocalizedPath("/", locale)}>
                      <img
                        src="/assets/img/logo/logo-header-white.png"
                        alt={t("logoAlt")}
                      />
                    </Link>
                  </div>
                  <div className="main-menu">
                    <ul>
                      <li>
                        <Link href={createLocalizedPath("/", locale)}>
                          {t("navigation.home")}
                        </Link>
                      </li>
                      <li>
                        <Link href={createLocalizedPath("/about", locale)}>
                          {t("navigation.about")}
                        </Link>
                      </li>
                      <li>
                        <Link href={createLocalizedPath("/partners", locale)}>
                          {t("navigation.partners")}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={createLocalizedPath("/schedule2024", locale)}
                        >
                          {t("navigation.schedule.label")}{" "}
                          <i className="fa-solid fa-angle-down" />
                        </Link>
                        <ul className="dropdown-padding">
                          <li>
                            <Link
                              href={createLocalizedPath(
                                "/schedule2025",
                                locale
                              )}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                              >
                                {t("navigation.schedule.dropdown.2025")}
                                <p
                                  style={{
                                    fontSize: 14,
                                    fontWeight: 700,
                                    color: "#a88a7b",
                                  }}
                                >
                                  {t("navigation.soon")}
                                </p>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href={createLocalizedPath(
                                "/schedule2024",
                                locale
                              )}
                            >
                              {t("navigation.schedule.dropdown.2024")}
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link
                          href={createLocalizedPath("/memories2024", locale)}
                        >
                          {t("navigation.memories.label")}{" "}
                          <i className="fa-solid fa-angle-down" />
                        </Link>
                        <ul className="dropdown-padding">
                          <li>
                            <Link
                              href={createLocalizedPath(
                                "/memories2025",
                                locale
                              )}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                              >
                                {t("navigation.memories.dropdown.2025")}
                                <p
                                  style={{
                                    fontSize: 14,
                                    fontWeight: 700,
                                    color: "#a88a7b",
                                  }}
                                >
                                  {t("navigation.soon")}
                                </p>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href={createLocalizedPath(
                                "/memories2024",
                                locale
                              )}
                            >
                              {t("navigation.memories.dropdown.2024")}
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link href={createLocalizedPath("/", locale)}>
                          {t("navigation.others.label")}{" "}
                          <i className="fa-solid fa-angle-down" />
                        </Link>
                        <ul className="dropdown-padding">
                          <li>
                            <Link href={createLocalizedPath("/faq", locale)}>
                              {t("navigation.others.dropdown.faq")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href={createLocalizedPath("/contact", locale)}
                            >
                              {t("navigation.others.dropdown.contact")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href={createLocalizedPath("/artists", locale)}
                            >
                              {t("navigation.others.dropdown.artists")}
                            </Link>
                          </li>
                          <li>
                            <Link href={createLocalizedPath("/blog", locale)}>
                              {t("navigation.others.dropdown.blogs")}
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href={""}>
                          {t("navigation.language.label")}
                          <i
                            className="fa-solid fa-angle-down"
                            style={{ marginLeft: 4 }}
                          />
                        </Link>
                        <ul className="dropdown-padding">
                          <li>
                            <Link href={getLocalizedPath("en")}>
                              {t("navigation.language.dropdown.english")}
                            </Link>
                          </li>
                          <li>
                            <Link href={getLocalizedPath("fr")}>
                              {t("navigation.language.dropdown.french")}
                            </Link>
                          </li>
                          <li>
                            <Link href={getLocalizedPath("ar")}>
                              {t("navigation.language.dropdown.arabic")}
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          href={DOWNLOAD_CONFIG.APK_URL}
                          download={DOWNLOAD_CONFIG.APK_FILENAME}
                          className="download-app-btn"
                          style={{
                            backgroundColor: "#a88a7b",
                            color: "white",
                            padding: "8px 16px",
                            borderRadius: "5px",
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#967b6a";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#a88a7b";
                          }}
                        >
                          <i className="fa-solid fa-download"></i>
                          {t("navigation.downloadApp")}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
