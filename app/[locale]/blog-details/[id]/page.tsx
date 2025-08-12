"use client";
import "@/node_modules/react-modal-video/css/modal-video.css";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Section9 from "@/components/sections/home/section9";
import Section1 from "@/components/sections/blog-details/Section1";
import { notFound } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import enMessages from "@/messages/en.json";
import arMessages from "@/messages/ar.json";
import Script from "next/script";

type BlogPost = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  author: string;
  image: string;
  paragraph1_title: string;
  paragraph1_content: string;
  paragraph2_title: string;
  paragraph2_content: string;
  paragraph3_title: string;
  paragraph3_content: string;
  images: string[];
  innerImage: string;
  tags: string[];
};

// Define the structure of blog translations
interface BlogTranslations {
  readMore: string;
  [key: string]: any; // Allow dynamic access with string keys
}

// export async function generateMetadata({
//   params,
// }: {
//   params: { id: string; locale: string };
// }) {
//   const messages = params.locale === "ar" ? arMessages : enMessages;
//   const blogTranslations = messages.BlogDetailsPage.blogs as BlogTranslations;

//   const getBlogData = (id: string) => {
//     try {
//       return blogTranslations[`blog_${id}`] || {};
//     } catch (error) {
//       return {};
//     }
//   };

//   const blogData = getBlogData(params.id);

//   return {
//     title: `${blogData.title || "Blog Post"} | Moussem Moulay Abdellah Amghar`,
//     description:
//       blogData.excerpt ||
//       blogData.summary ||
//       "Read more about Moussem Moulay Abdellah Amghar festival traditions and events.",
//     openGraph: {
//       title: blogData.title || "Blog Post",
//       description:
//         blogData.excerpt ||
//         blogData.summary ||
//         "Moussem Moulay Abdellah Amghar blog",
//       url: `https://yourdomain.com/${params.locale}/blog-details/${params.id}`,
//       images: [
//         {
//           url: blogData.innerImage || "/assets/img/all-images/blog/default.jpg",
//           width: 1200,
//           height: 630,
//           alt: blogData.title || "Blog post image",
//         },
//       ],
//     },
//   };
// }

export default function BlogDetails({ params }: { params: { id: string } }) {
  const t = useTranslations("BlogDetailsPage.blogs");
  const locale = useLocale();

  const blogPosts = [
    {
      id: t("blog_1.id"),
      title: t("blog_1.title"),
      subtitle: t("blog_1.subtitle"),
      date: t("blog_1.date"),
      author: t("blog_1.author"),
      image: "/assets/img/all-images/blog/blog1_img1.png",
      paragraph1_title: t("blog_1.paragraph1_title"),
      paragraph1_content: t("blog_1.paragraph1_content"),
      paragraph2_title: t("blog_1.paragraph2_title"),
      paragraph2_content: t("blog_1.paragraph2_content"),
      paragraph3_title: t("blog_1.paragraph3_title"),
      paragraph3_content: t("blog_1.paragraph3_content"),
      images: [
        "/assets/img/all-images/blog/blog1_img2.png",
        "/assets/img/all-images/blog/blog1_img3.png",
      ],
      innerImage: "/assets/img/all-images/blog/blog1_img4.png",
      tags: [t("blog_1.tags.tag1"), t("blog_1.tags.tag2")],
    },
    {
      id: t("blog_2.id"),
      title: t("blog_2.title"),
      subtitle: t("blog_2.subtitle"),
      date: t("blog_2.date"),
      author: t("blog_2.author"),
      image: "/assets/img/all-images/blog/blog2_img1.png",
      paragraph1_title: t("blog_2.paragraph1_title"),
      paragraph1_content: t("blog_2.paragraph1_content"),
      paragraph2_title: t("blog_2.paragraph2_title"),
      paragraph2_content: t("blog_2.paragraph2_content"),
      paragraph3_title: t("blog_2.paragraph3_title"),
      paragraph3_content: t("blog_2.paragraph3_content"),
      images: [
        "/assets/img/all-images/blog/blog2_img2.png",
        "/assets/img/all-images/blog/blog2_img3.png",
      ],
      innerImage: "/assets/img/all-images/blog/blog2_img4.png",
      tags: [t("blog_2.tags.tag1"), t("blog_2.tags.tag2")],
    },
    {
      id: t("blog_3.id"),
      title: t("blog_3.title"),
      subtitle: t("blog_3.subtitle"),
      date: t("blog_3.date"),
      author: t("blog_3.author"),
      image: "/assets/img/all-images/blog/blog3_img1.png",
      paragraph1_title: t("blog_3.paragraph1_title"),
      paragraph1_content: t("blog_3.paragraph1_content"),
      paragraph2_title: t("blog_3.paragraph2_title"),
      paragraph2_content: t("blog_3.paragraph2_content"),
      paragraph3_title: t("blog_3.paragraph3_title"),
      paragraph3_content: t("blog_3.paragraph3_content"),
      images: [
        "/assets/img/all-images/blog/blog3_img2.png",
        "/assets/img/all-images/blog/blog3_img3.png",
      ],
      innerImage: "/assets/img/all-images/blog/blog3_img4.png",
      tags: [t("blog_3.tags.tag1"), t("blog_3.tags.tag2")],
    },
    {
      id: t("blog_4.id"),
      title: t("blog_4.title"),
      subtitle: t("blog_4.subtitle"),
      date: t("blog_4.date"),
      author: t("blog_4.author"),
      image: "/assets/img/all-images/blog/blog4_img1.png",
      paragraph1_title: t("blog_4.paragraph1_title"),
      paragraph1_content: t("blog_4.paragraph1_content"),
      paragraph2_title: t("blog_4.paragraph2_title"),
      paragraph2_content: t("blog_4.paragraph2_content"),
      paragraph3_title: t("blog_4.paragraph3_title"),
      paragraph3_content: t("blog_4.paragraph3_content"),
      images: [
        "/assets/img/all-images/blog/blog4_img2.png",
        "/assets/img/all-images/blog/blog4_img3.png",
      ],
      innerImage: "/assets/img/all-images/blog/blog4_img4.png",
      tags: [t("blog_4.tags.tag1"), t("blog_4.tags.tag2")],
    },
    {
      id: t("blog_5.id"),
      title: t("blog_5.title"),
      subtitle: t("blog_5.subtitle"),
      date: t("blog_5.date"),
      author: t("blog_5.author"),
      image: "/assets/img/all-images/blog/blog5_img1.png",
      paragraph1_title: t("blog_5.paragraph1_title"),
      paragraph1_content: t("blog_5.paragraph1_content"),
      paragraph2_title: t("blog_5.paragraph2_title"),
      paragraph2_content: t("blog_5.paragraph2_content"),
      paragraph3_title: t("blog_5.paragraph3_title"),
      paragraph3_content: t("blog_5.paragraph3_content"),
      images: [
        "/assets/img/all-images/blog/blog5_img2.png",
        "/assets/img/all-images/blog/blog5_img3.png",
      ],

      innerImage: "/assets/img/all-images/blog/blog5_img4.png",
      tags: [t("blog_5.tags.tag1"), t("blog_5.tags.tag2")],
    },
    {
      id: t("blog_6.id"),
      title: t("blog_6.title"),
      subtitle: t("blog_6.subtitle"),
      date: t("blog_6.date"),
      author: t("blog_6.author"),
      image: "/assets/img/all-images/blog/blog6_img1.png",
      paragraph1_title: t("blog_6.paragraph1_title"),
      paragraph1_content: t("blog_6.paragraph1_content"),
      paragraph2_title: t("blog_6.paragraph2_title"),
      paragraph2_content: t("blog_6.paragraph2_content"),
      paragraph3_title: t("blog_6.paragraph3_title"),
      paragraph3_content: t("blog_6.paragraph3_content"),
      images: [
        "/assets/img/all-images/blog/blog6_img2.png",
        "/assets/img/all-images/blog/blog6_img3.png",
      ],
      innerImage: "/assets/img/all-images/blog/blog6_img4.png",
      tags: [t("blog_6.tags.tag1"), t("blog_6.tags.tag2")],
    },
    {
      id: t("blog_7.id"),
      title: t("blog_7.title"),
      subtitle: t("blog_7.subtitle"),
      date: t("blog_7.date"),
      author: t("blog_7.author"),
      image: "/assets/img/all-images/blog/blog7_img1.png",
      paragraph1_title: t("blog_7.paragraph1_title"),
      paragraph1_content: t("blog_7.paragraph1_content"),
      paragraph2_title: t("blog_7.paragraph2_title"),
      paragraph2_content: t("blog_7.paragraph2_content"),
      paragraph3_title: t("blog_7.paragraph3_title"),
      paragraph3_content: t("blog_7.paragraph3_content"),
      images: [
        "/assets/img/all-images/blog/blog7_img2.png",
        "/assets/img/all-images/blog/blog7_img3.png",
      ],
      innerImage: "/assets/img/all-images/blog/blog7_img4.png",
      tags: [t("blog_7.tags.tag1"), t("blog_7.tags.tag2")],
    },
    {
      id: t("blog_8.id"),
      title: t("blog_8.title"),
      subtitle: t("blog_8.subtitle"),
      date: t("blog_8.date"),
      author: t("blog_8.author"),
      image: "/assets/img/all-images/blog/blog8_img1.png",
      paragraph1_title: t("blog_8.paragraph1_title"),
      paragraph1_content: t("blog_8.paragraph1_content"),
      paragraph2_title: t("blog_8.paragraph2_title"),
      paragraph2_content: t("blog_8.paragraph2_content"),
      paragraph3_title: t("blog_8.paragraph3_title"),
      paragraph3_content: t("blog_8.paragraph3_content"),
      images: [
        "/assets/img/all-images/blog/blog8_img2.png",
        "/assets/img/all-images/blog/blog8_img3.png",
      ],
      innerImage: "/assets/img/all-images/blog/blog8_img4.png",
      tags: [t("blog_8.tags.tag1"), t("blog_8.tags.tag2")],
    },
  ];

  const blogPost = blogPosts.find((post) => post.id === params.id);

  const getDeterministicRelatedPosts = (
    currentPostId: string,
    totalCount: number,
    allPosts: BlogPost[]
  ): BlogPost[] => {
    const seed = currentPostId
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);

    const otherPosts = allPosts.filter((post) => post.id !== currentPostId);

    if (otherPosts.length <= totalCount) {
      return otherPosts;
    }

    const shuffled = [...otherPosts];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = (seed + i) % (i + 1);
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, totalCount);
  };

  const relatedPosts = getDeterministicRelatedPosts(params.id, 3, blogPosts);

  if (!blogPost) {
    return notFound();
  }

  // Create the JSON-LD schema for the blog article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blogPost.title,
    description: blogPost.subtitle,
    image: blogPost.image,
    datePublished: blogPost.date,
    author: {
      "@type": "Person",
      name: blogPost.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Moussem Moulay Abdellah Amghar",
      logo: {
        "@type": "ImageObject",
        url: "https://moussem-moulay-abdellah-amghar.vercel.app/assets/img/all-images/metadata/meta1.JPG",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://moussem-moulay-abdellah-amghar.vercel.app/blog-details/${params.id}`,
    },
    keywords: blogPost.tags.join(", "),
  };

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Script
          id="blog-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Section1 />

        <div className="blog-details-section sp8">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="blog-deatils-content heading2"
                  dir={locale === "ar" ? "rtl" : "ltr"}
                >
                  <div className="row">
                    <div className="col-lg-6 m-auto">
                      <div className="memory-header text-center heading2 space-margin20">
                        <h2 className="text-anime-style-3">{blogPost.title}</h2>
                        <div className="space10" />
                        <h5 data-aos="fade-left" data-aos-duration={800}>
                          {blogPost.subtitle}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="img1">
                    <img src={blogPost.image} alt="" />
                  </div>
                  <div className="space32" />
                  <ul>
                    <li>
                      <Link
                        href="/#"
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 6,
                          display: "flex",
                        }}
                      >
                        <img
                          src="/assets/img/icons/calender1-black.svg"
                          alt=""
                        />
                        <div>{blogPost.date}</div>
                      </Link>
                    </li>
                  </ul>
                  <div className="space18" />
                  <h2>{blogPost.paragraph1_title}</h2>
                  <div className="space16" />
                  <p>{blogPost.paragraph1_content}</p>
                  <div className="space48" />
                  <h2>{blogPost.paragraph2_title}</h2>
                  <div className="space16" />
                  <p>{blogPost.paragraph2_content}</p>
                  <div className="space48" />
                  <div className="row">
                    <h2>{blogPost.paragraph3_title}</h2>
                    <div className="space16" />
                    <p>{blogPost.paragraph3_content}</p>
                    <div className="space48" />
                    {blogPost.images.map((image, index) => (
                      <div key={index} className="col-lg-6 col-md-6">
                        <div className="img1 image-anime">
                          <img src={image} alt="" />
                        </div>
                        {index === 0 && (
                          <div className="space30 d-md-none d-block" />
                        )}
                      </div>
                    ))}
                    <div className="space16" />
                  </div>
                  <div className="space32" />
                  <div className="tags-social-area">
                    <div className="tags">
                      <h4>{t("tags")} : </h4>
                      <ul>
                        {blogPost.tags.map((tag, index) => (
                          <li key={index}>
                            <Link href="/#">{tag}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="social">
                      <h4>{t("social")} : </h4>
                      <ul>
                        <li>
                          <Link
                            target="_blank"
                            href="https://www.tiktok.com/@moussem.mly.abdell"
                          >
                            <i className="fa-brands fa-tiktok" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            href="https://www.instagram.com/moussem_moulay_abdellah?igsh=dWQweDRyZjNsYmhw"
                          >
                            <i className="fa-brands fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            href="https://www.youtube.com/@MoussemMoulayAbdellahAmghar"
                          >
                            <i className="fa-brands fa-youtube" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bloginner-section-area sp1">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 m-auto">
                <div className="heading2 text-center space-margin60">
                  <h2> {t("readMore")}</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {relatedPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="col-lg-4 col-md-6"
                  data-aos="zoom-in"
                  data-aos-duration={800 + index * 200}
                >
                  <div className="blog4-boxarea">
                    <div className="img1">
                      <img src={post.innerImage} alt={post.title} />
                    </div>
                    <div className="content-area">
                      <ul>
                        <li>
                          <Link href="/#">
                            <img
                              src="/assets/img/icons/calender1-black.svg"
                              alt=""
                            />
                            {post.date}
                          </Link>
                        </li>
                      </ul>
                      <div className="space20" />
                      <Link href={`/blog-details/${post.id}`}>
                        {post.title}
                      </Link>
                      <div className="space24" />
                      <Link
                        href={`/blog-details/${post.id}`}
                        className="readmore"
                      >
                        {t("readMore")}
                        <i className="fa-solid fa-arrow-right" />
                      </Link>
                      <div className="arrow">
                        <Link href={`/blog-details/${post.id}`}>
                          <i className="fa-solid fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Section9 />
      </Layout>
    </>
  );
}
