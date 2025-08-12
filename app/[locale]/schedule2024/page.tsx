"use client";
import Layout from "@/components/layout/Layout";
import Section9 from "@/components/sections/home/section9";
import Section1 from "@/components/sections/schedule2024/section1";
import Section2 from "@/components/sections/schedule2024/section2";

export default function Schedule2024() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Section1 />
        <Section2 />
        <Section9 />
      </Layout>
    </>
  );
}
