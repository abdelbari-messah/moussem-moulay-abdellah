import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/blogs/Section1";
import Section2 from "@/components/sections/blogs/Section2";
import Section9 from "@/components/sections/home/section9";
export default function Blog() {
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
