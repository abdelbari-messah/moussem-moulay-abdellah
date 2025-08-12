import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/contact/Section1";
import Section2 from "@/components/sections/contact/Section2";
import Section3 from "@/components/sections/contact/Section3";
import Section4 from "@/components/sections/contact/Section4";
import Section9 from "@/components/sections/home/section9";
export default function Contact() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Section1 />
        <Section2 />
        <Section4 />
        <Section3 />
        <Section9 />
      </Layout>
    </>
  );
}
