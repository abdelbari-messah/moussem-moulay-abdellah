"use client";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

interface Section2Props {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

function Section2({ isModalOpen, setIsModalOpen }: Section2Props) {
  const [selectedImage, setSelectedImage] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 9;

  const t = useTranslations("memories2024Page");

  const images = [
    { src: "/assets/img/all-images/memory2024page/05.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/09.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/10.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/11.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/13.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/17.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/14.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/15.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/25.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/26.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/27.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/35.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/31.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/36.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/30.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/21.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/37.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/38.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/50.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/39.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/40.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/52.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/56.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/57.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/58.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/61.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/63.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/22.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/12.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/18.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/20.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/24.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/01.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/02.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/03.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/04.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/06.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/07.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/08.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/16.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/19.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/23.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/28.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/29.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/32.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/33.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/34.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/41.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/42.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/43.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/44.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/45.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/46.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/47.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/48.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/49.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/51.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/53.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/54.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/55.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/59.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/60.jpeg", alt: "Event 2024" },
    { src: "/assets/img/all-images/memory2024page/62.jpeg", alt: "Event 2024" },
  ];

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const openModal = (imageSrc: string) => {
    const index = images.findIndex((img) => img.src === imageSrc);
    if (index !== -1) {
      setCurrentImageIndex(index);
      setSelectedImage(imageSrc);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(images[newIndex].src);
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(images[newIndex].src);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, currentImageIndex]);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    const ellipsisThreshold = 2;

    pageNumbers.push(1);

    if (currentPage > ellipsisThreshold + 2) {
      pageNumbers.push("...");
    }

    let startPage = Math.max(2, currentPage - ellipsisThreshold);
    let endPage = Math.min(totalPages - 1, currentPage + ellipsisThreshold);

    if (currentPage <= ellipsisThreshold + 1) {
      endPage = Math.min(ellipsisThreshold * 2 + 1, totalPages - 1);
    }
    if (currentPage >= totalPages - ellipsisThreshold) {
      startPage = Math.max(2, totalPages - ellipsisThreshold * 2);
    }

    for (let i = startPage; i <= endPage; i++) {
      if (i > 1 && i < totalPages) {
        pageNumbers.push(i);
      }
    }

    if (currentPage < totalPages - (ellipsisThreshold + 1)) {
      pageNumbers.push("...");
    }

    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }

    return pageNumbers.map((number, index) => {
      if (number === "...") {
        return (
          <li
            key={`ellipsis-${index}`}
            className="page-item disabled"
            style={{
              backgroundColor: "#EDEDED",
              height: 50,
              width: 50,
              borderRadius: 8,
              textAlign: "center",
              marginRight: 8,
              color: "#1A1719",
            }}
          >
            <span className="page-link" style={{ color: "#1A1719" }}>
              ...
            </span>
          </li>
        );
      }

      return (
        <li key={number} className={`page-item`}>
          <button
            className={`page-link ${currentPage === number ? "active" : ""}`}
            onClick={() => paginate(Number(number))}
          >
            {number}
          </button>
        </li>
      );
    });
  };

  return (
    <div className="memory-inner-section-area sp1">
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
          {currentImages.map((image, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="memory3-boxarea">
                <div
                  className="img1"
                  onClick={() => openModal(image.src)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={image.src} alt={image.alt} />
                </div>
                <div className="content-area">
                  <p>{t("section2.subtitle_2")}</p>
                  <div className="space12" />
                </div>
              </div>
            </div>
          ))}
          <div className="space30" />
        </div>
      </div>

      {isModalOpen && (
        <div
          className="modal-overlay"
          onClick={closeModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            cursor: "pointer",
          }}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            style={{
              position: "absolute",
              left: "20px",
              fontSize: "3rem",
              color: "white",
              cursor: "pointer",
              zIndex: 10001,
              userSelect: "none",
            }}
          >
            &#10094;
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              position: "relative",
            }}
          >
            <img
              src={selectedImage}
              alt="Enlarged view"
              style={{
                maxWidth: "100%",
                maxHeight: "90vh",
                display: "block",
              }}
            />
          </div>

          <div
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            style={{
              position: "absolute",
              right: "20px",
              fontSize: "3rem",
              color: "white",
              cursor: "pointer",
              zIndex: 10001,
              userSelect: "none",
            }}
          >
            &#10095;
          </div>

          <button
            onClick={closeModal}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "none",
              border: "none",
              color: "white",
              fontSize: "2rem",
              cursor: "pointer",
              zIndex: 10000,
            }}
          >
            ×
          </button>
        </div>
      )}

      <div className="space30" />
      <div className="pagination-area">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous"
              >
                <i className="fa-solid fa-angle-left" />
              </button>
            </li>

            {renderPageNumbers()}

            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next"
              >
                <i className="fa-solid fa-angle-right" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Section2;
