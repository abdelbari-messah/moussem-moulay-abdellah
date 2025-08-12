"use client";
import Layout from "@/components/layout/Layout";
import Section2 from "@/components/sections/about/section2";
import Section1 from "@/components/sections/about/section1";
import Section3 from "@/components/sections/about/section3";
import Section9Home from "@/components/sections/home/section9";
import Section5 from "@/components/sections/about/section5";
import Section6 from "@/components/sections/about/section6";
export default function About() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Section1 />
        <Section2 />
        <Section5 />
        <Section6 />
        <Section3 />
        <Section9Home />
      </Layout>
    </>
  );
}
