"use client";
import Layout from "@/components/layout/Layout";
import Section9 from "@/components/sections/home/section9";
import Section1 from "@/components/sections/partners/section1";
import Section2 from "@/components/sections/partners/section2";
export default function Partners() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Section1 />
        <Section2 />

        <div className="space100 d-lg-block d-none" />
        <div className="space50 d-lg-none d-block" />
        <Section9 />
      </Layout>
    </>
  );
}
