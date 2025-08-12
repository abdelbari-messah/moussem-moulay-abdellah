import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { createLocalizedPath } from "@/i18n/navigation";

function Section2() {
  const t = useTranslations("BlogsPage");
  const locale = useLocale();
  const details = useTranslations("BlogDetailsPage.blogs");

  const blogPosts = [
    {
      id: details("blog_1.id"),
      title: details("blog_1.title"),
      date: details("blog_1.date"),
      author: details("blog_1.author"),
      images: [
        "/assets/img/all-images/blog/blog1_img2.png",
        "/assets/img/all-images/blog/blog1_img3.png",
      ],
      innerImage: "/assets/img/all-images/blog/blog1_img4.png",
    },
    {
      id: details("blog_2.id"),
      title: details("blog_2.title"),
      date: details("blog_2.date"),
      author: details("blog_2.author"),
      innerImage: "/assets/img/all-images/blog/blog2_img4.png",
    },
    {
      id: details("blog_3.id"),
      title: details("blog_3.title"),
      date: details("blog_3.date"),
      author: details("blog_3.author"),
      innerImage: "/assets/img/all-images/blog/blog3_img4.png",
    },
    {
      id: details("blog_4.id"),
      title: details("blog_4.title"),
      date: details("blog_4.date"),
      author: details("blog_4.author"),
      innerImage: "/assets/img/all-images/blog/blog4_img4.png",
    },
    {
      id: details("blog_5.id"),
      title: details("blog_5.title"),
      date: details("blog_5.date"),
      author: details("blog_5.author"),
      innerImage: "/assets/img/all-images/blog/blog5_img4.png",
    },
    {
      id: details("blog_6.id"),
      title: details("blog_6.title"),
      date: details("blog_6.date"),
      author: details("blog_6.author"),
      innerImage: "/assets/img/all-images/blog/blog6_img4.png",
    },
    {
      id: details("blog_7.id"),
      title: details("blog_7.title"),
      date: details("blog_7.date"),
      author: details("blog_7.author"),
      innerImage: "/assets/img/all-images/blog/blog7_img4.png",
    },
    {
      id: details("blog_8.id"),
      title: details("blog_8.title"),
      date: details("blog_8.date"),
      author: details("blog_8.author"),
      innerImage: "/assets/img/all-images/blog/blog8_img4.png",
    },
  ];

  return (
    <div className="bloginner-section-area sp1">
      <div className="row">
        <div className="col-lg-6 m-auto">
          <div className="blog-header text-center heading2 space-margin60">
            <h5 data-aos="fade-left" data-aos-duration={900}>
              {t("section2.title")}
            </h5>
            <div className="space16" />
            <h2 className="text-anime-style-3">{t("section2.subtitle")}</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="col-lg-4 col-md-6"
              data-aos="zoom-in"
              data-aos-duration={800 + (index % 3) * 200}
            >
              <div className="blog4-boxarea">
                <div className="img1">
                  <img
                    src={post.innerImage}
                    alt={post.title}
                    className="img-fluid"
                  />
                </div>
                <div className="content-area">
                  <ul>
                    <li>
                      <Link
                        href={createLocalizedPath(
                          `/blog-details/${post.id}`,
                          locale
                        )}
                      >
                        <img
                          src="/assets/img/icons/calender1-black.svg"
                          alt="Calendar"
                        />
                        {post.date}
                      </Link>
                    </li>
                  </ul>
                  <div className="space20" />
                  <Link
                    href={createLocalizedPath(
                      `/blog-details/${post.id}`,
                      locale
                    )}
                  >
                    {post.title}
                  </Link>
                  <div className="space24" />
                  <Link
                    href={createLocalizedPath(
                      `/blog-details/${post.id}`,
                      locale
                    )}
                    className="readmore"
                  >
                    {details("readMore")}{" "}
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                  <div className="arrow">
                    <Link
                      href={createLocalizedPath(
                        `/blog-details/${post.id}`,
                        locale
                      )}
                    >
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
  );
}

export default Section2;
