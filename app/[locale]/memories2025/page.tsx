import Layout from "@/components/layout/Layout";
import Section9 from "@/components/sections/home/section9";
import Section1 from "@/components/sections/memories2025/Section1";
import { useTranslations } from "next-intl";
export default function Memories() {
  const t = useTranslations("memories2025Page");
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
