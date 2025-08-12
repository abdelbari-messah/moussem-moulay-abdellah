"use client";
import Layout from "@/components/layout/Layout";
import Section9 from "@/components/sections/home/section9";
import Section1 from "@/components/sections/schedule2024/section1";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Schedule2025() {
  const [isTab, setIsTab] = useState(1);
  const handleTab = (i: number) => {
    setIsTab(i);
  };

  const t = useTranslations("schedule2025Page");

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Section1 />
        <div className="container" style={{ paddingTop: 100 }}>
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="blog-header text-center heading2 space-margin60">
                <h5 data-aos="fade-left" data-aos-duration={900}>
                  {t("title")}
                </h5>
                <div className="space16" />
                <h2 className="text-anime-style-3">{t("subtitle")}</h2>
              </div>
            </div>
          </div>
        </div>

        <Section9 />
      </Layout>
    </>
  );
}
