"use client";
import Layout from "@/components/layout/Layout";
import Section9 from "@/components/sections/home/section9";
import Section1 from "@/components/sections/memories2024/Section1";
import Section2 from "@/components/sections/memories2024/Section2";
import { useState } from "react";
export default function Memories() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} isModalOpen={isModalOpen}>
        <Section1 />
        <Section2 isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        {!isModalOpen && <Section9 />}
      </Layout>
    </>
  );
}
