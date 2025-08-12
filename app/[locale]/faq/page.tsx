"use client";
import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/faq/Section1";
import Section2 from "@/components/sections/faq/Section2";
import Section9 from "@/components/sections/home/section9";
export default function Faq() {
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
