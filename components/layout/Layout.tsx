"use client";
import AOS from "aos";
import { useEffect, useState } from "react";
import AddClassBody from "../elements/AddClassBody";
import BackToTop from "../elements/BackToTop";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import MobileMenu from "./MobileMenu";

interface LayoutProps {
  headerStyle?: Number;
  footerStyle?: Number;
  children?: React.ReactNode;
  breadcrumbTitle?: string;
  isModalOpen?: boolean;
}

export default function Layout({
  headerStyle,
  footerStyle,
  breadcrumbTitle,
  children,
  isModalOpen = false,
}: LayoutProps) {
  const [scroll, setScroll] = useState<boolean>(false);
  // Mobile Menu
  const [isMobileMenu, setMobileMenu] = useState<boolean>(false);
  const handleMobileMenu = (): void => setMobileMenu(!isMobileMenu);

  useEffect(() => {
    AOS.init();
    const handleScroll = (): void => {
      const scrollCheck: boolean = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <>
      <div id="top" />
      <AddClassBody />

      {!isModalOpen && headerStyle == 1 && (
        <Header
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
        />
      )}
      <MobileMenu
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
      />
      {children}
      {!isModalOpen && footerStyle == 1 && <Footer />}

      <BackToTop target="#top" />
    </>
  );
}
