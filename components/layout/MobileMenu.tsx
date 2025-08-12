"use client";
import { useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { createLocalizedPath } from "@/i18n/navigation";
export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
  const [isAccordion, setIsAccordion] = useState(1);

  const pathname = usePathname();

  const t = useTranslations("Header");
  const locale = useLocale();

  const handleAccordion = (key: any) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };

  const getLocalizedPath = (newLocale: string) => {
    const segments = pathname.split("/");
    segments.splice(1, 1, newLocale);
    return segments.join("/");
  };
  return (
    <>
      <div className="mobile-header mobile-haeder1 d-block d-lg-none">
        <div className="container-fluid">
          <div className="col-12">
            <div className="mobile-header-elements">
              <div className="mobile-logo">
                <Link href={createLocalizedPath("/", locale)}>
                  <img src="/assets/img/logo/logo-header-white.png" alt="" />
                </Link>
              </div>
              <div
                className="mobile-nav-icon dots-menu"
                onClick={handleMobileMenu}
              >
                <i className="fa-solid fa-bars-staggered" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        dir={locale === "ar" ? "rtl" : "ltr"}
        className={`mobile-sidebar mobile-sidebar1 ${
          isMobileMenu ? "mobile-menu-active" : ""
        }`}
      >
        <div
          className="logosicon-area"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="logos" style={{ height: 120, width: 150 }}>
            <img src="/assets/img/logo/logo-footer-balck.png" alt="" />
          </div>
          <div className="menu-close" onClick={handleMobileMenu}>
            <i className="fa-solid fa-xmark" />
          </div>
        </div>
        <div className="mobile-nav mobile-nav1">
          <ul className="mobile-nav-list nav-list1">
            <li className="has-sub hash-has-sub">
              <Link href={createLocalizedPath("/", locale)}>
                {t("navigation.home")}
              </Link>
            </li>
            <li className="hash-has-sub">
              <Link
                href={createLocalizedPath("/about", locale)}
                className="hash-nav"
              >
                {t("navigation.about")}
              </Link>
            </li>
            <li className="has-sub hash-has-sub">
              <Link
                href={createLocalizedPath("/partners", locale)}
                className="hash-nav"
              >
                {t("navigation.partners")}
              </Link>
            </li>
            <li className="has-sub hash-has-sub">
              <Link href={""} className="hash-nav">
                {t("navigation.schedule.label")}
              </Link>
              <span
                className={`submenu-button ${
                  isAccordion == 2 ? "submenu-opened" : ""
                }`}
                onClick={() => handleAccordion(2)}
              >
                <em />
              </span>
              <ul
                className={`sub-menu ${isAccordion == 2 ? "open-sub" : ""}`}
                style={{ display: `${isAccordion == 2 ? "block" : "none"}` }}
              >
                <li className="hash-has-sub">
                  <Link
                    href={createLocalizedPath("/schedule2025", locale)}
                    className="hash-nav"
                  >
                    <div style={{ display: "flex", gap: 55 }}>
                      {t("navigation.schedule.dropdown.2025")}
                      <p
                        style={{
                          fontSize: 16,
                          fontWeight: 900,
                          color: "#a88a7b",
                        }}
                      >
                        {t("navigation.soon")}
                      </p>
                    </div>
                  </Link>
                </li>
                <li className="hash-has-sub">
                  <Link
                    href={createLocalizedPath("/schedule2024", locale)}
                    className="hash-nav"
                  >
                    {t("navigation.schedule.dropdown.2024")}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="has-sub hash-has-sub">
              <span
                className={`submenu-button ${
                  isAccordion == 3 ? "submenu-opened" : ""
                }`}
                onClick={() => handleAccordion(3)}
              >
                <em />
              </span>
              <Link
                href={createLocalizedPath("/memories2024", locale)}
                className="hash-nav"
              >
                {t("navigation.memories.label")}{" "}
              </Link>
              <ul
                className={`sub-menu ${isAccordion == 3 ? "open-sub" : ""}`}
                style={{ display: `${isAccordion == 3 ? "block" : "none"}` }}
              >
                <li className="hash-has-sub">
                  <Link
                    href={createLocalizedPath("/memories2025", locale)}
                    className="hash-nav"
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: 55,
                      }}
                    >
                      {t("navigation.memories.dropdown.2025")}
                      <p
                        style={{
                          fontSize: 16,
                          fontWeight: 900,
                          color: "#a88a7b",
                        }}
                      >
                        {t("navigation.soon")}
                      </p>
                    </div>
                  </Link>
                </li>
                <li className="hash-has-sub">
                  <Link
                    href={createLocalizedPath("/memories2024", locale)}
                    className="hash-nav"
                  >
                    {t("navigation.memories.dropdown.2024")}
                  </Link>
                </li>
              </ul>
            </li>

            <li className="hash-has-sub">
              <span
                className={`submenu-button ${
                  isAccordion == 4 ? "submenu-opened" : ""
                }`}
                onClick={() => handleAccordion(4)}
              >
                <em />
              </span>
              <Link href="/#" className="hash-nav">
                {t("navigation.others.label")}
              </Link>
              <ul
                className={`sub-menu ${isAccordion == 4 ? "open-sub" : ""}`}
                style={{ display: `${isAccordion == 4 ? "block" : "none"}` }}
              >
                <li className="hash-has-sub">
                  <Link
                    href={createLocalizedPath("/faq", locale)}
                    className="hash-nav"
                  >
                    {t("navigation.others.dropdown.faq")}
                  </Link>
                </li>
                <li className="hash-has-sub">
                  <Link
                    href={createLocalizedPath("/contact", locale)}
                    className="hash-nav"
                  >
                    {t("navigation.others.dropdown.contact")}
                  </Link>
                </li>
                <li className="hash-has-sub">
                  <Link
                    href={createLocalizedPath("/artists", locale)}
                    className="hash-nav"
                  >
                    {t("navigation.others.dropdown.artists")}
                  </Link>
                </li>
                <li className="hash-has-sub">
                  <Link
                    href={createLocalizedPath("/blog", locale)}
                    className="hash-nav"
                  >
                    {t("navigation.others.dropdown.blogs")}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="has-sub hash-has-sub">
              <span
                className={`submenu-button ${
                  isAccordion == 5 ? "submenu-opened" : ""
                }`}
                onClick={() => handleAccordion(5)}
              >
                <em />
              </span>
              <Link href="" className="hash-nav">
                {t("navigation.language.label")}
              </Link>
              <ul
                className={`sub-menu ${isAccordion == 5 ? "open-sub" : ""}`}
                style={{ display: `${isAccordion == 5 ? "block" : "none"}` }}
              >
                <li className="hash-has-sub">
                  <Link href={getLocalizedPath("en")} className="hash-nav">
                    {t("navigation.language.dropdown.english")}
                  </Link>
                </li>
                <li className="hash-has-sub">
                  <Link href={getLocalizedPath("fr")} className="hash-nav">
                    {t("navigation.language.dropdown.french")}
                  </Link>
                </li>
                <li className="hash-has-sub">
                  <Link href={getLocalizedPath("ar")} className="hash-nav">
                    {t("navigation.language.dropdown.arabic")}
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <div className="allmobilesection">
            <a
              href="/downloads/moussem-app.apk"
              download="Moussem-Moulay-Abdellah-App.apk"
              className="vl-btn1"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              {t("navigation.downloadApp")}
            </a>

            <Link
              href="/contact"
              className="vl-btn1"
              style={{ display: "flex" }}
            >
              {t("mobileMenu.contactButton")}
            </Link>

            <div className="single-footer">
              <h3>{t("mobileMenu.contactInfo.title")}</h3>
              <div className="footer1-contact-info">
                <div className="contact-info-single">
                  <div className="contact-info-icon">
                    <span>
                      <i className="fa-solid fa-phone-volume" />
                    </span>
                  </div>
                  <div className="contact-info-text">
                    <Link href="tel:+3(924)4596512">
                      {t("mobileMenu.contactInfo.phone")}
                    </Link>
                  </div>
                </div>
                <div className="contact-info-single">
                  <div className="contact-info-icon">
                    <span>
                      <i className="fa-solid fa-envelope" />
                    </span>
                  </div>
                  <div className="contact-info-text">
                    <Link href="//mailto:info@example.com">
                      {t("mobileMenu.contactInfo.email")}
                    </Link>
                  </div>
                </div>
                <div className="single-footer">
                  <h3>{t("mobileMenu.location.title")}</h3>
                  <div className="contact-info-single">
                    <div className="contact-info-icon">
                      <span>
                        <i className="fa-solid fa-location-dot" />
                      </span>
                    </div>
                    <div className="contact-info-text">
                      <Link href={createLocalizedPath("/contact", locale)}>
                        {t("mobileMenu.location.address")}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="single-footer">
                  <h3>{t("mobileMenu.social.title")}</h3>
                  <div className="social-links-mobile-menu">
                    <ul>
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
                          href="https://www.tiktok.com/@moussem.mly.abdell"
                        >
                          <i className="fa-brands fa-tiktok" />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
