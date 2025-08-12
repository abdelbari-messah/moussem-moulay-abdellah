import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/home/section1";
import Section2 from "@/components/sections/home/section2";
import Section3 from "@/components/sections/about/section3";
import Section4 from "@/components/sections/home/section4";
import Section6 from "@/components/sections/home/section6";
import Section8 from "@/components/sections/home/section8";
import Section9 from "@/components/sections/home/section9";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Section1 />
        <Section2 />
        <Section8 />
        <Section4 />
        <Section3 />
        <Section6 />
        <Section9 />
      </Layout>
    </>
  );
}
