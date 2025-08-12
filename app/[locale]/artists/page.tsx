import Layout from "@/components/layout/Layout";
import Section4 from "@/components/sections/about/section4";
import Section1 from "@/components/sections/artists/Section1";
import Section9 from "@/components/sections/home/section9";

export default function Artists() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Section1 />
        <Section4 />
        <Section9 />
      </Layout>
    </>
  );
}
