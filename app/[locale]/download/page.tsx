"use client";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function DownloadPage() {
  const t = useTranslations("Download");

  useEffect(() => {
    // Auto-download the APK when the page loads
    const downloadAPK = () => {
      const link = document.createElement("a");
      link.href = "/downloads/moussem-app.apk";
      link.download = "Moussem-Moulay-Abdellah-App.apk";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    // Small delay to ensure page loads completely
    const timer = setTimeout(downloadAPK, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="download-page"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          maxWidth: "500px",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <i
            className="fa-solid fa-download"
            style={{
              fontSize: "48px",
              color: "#a88a7b",
              marginBottom: "20px",
            }}
          ></i>
        </div>

        <h1
          style={{
            color: "#333",
            marginBottom: "20px",
            fontSize: "28px",
          }}
        >
          {t("title")}
        </h1>

        <p
          style={{
            color: "#666",
            marginBottom: "30px",
            fontSize: "16px",
            lineHeight: "1.5",
          }}
        >
          {t("description")}
        </p>

        <div style={{ marginBottom: "30px" }}>
          <div
            style={{
              display: "inline-block",
              padding: "10px",
              backgroundColor: "#a88a7b",
              borderRadius: "5px",
              color: "white",
              fontSize: "14px",
              marginBottom: "10px",
            }}
          >
            <i
              className="fa-solid fa-spinner fa-spin"
              style={{ marginRight: "8px" }}
            ></i>
            {t("downloadStarting")}
          </div>
        </div>

        <p
          style={{
            color: "#888",
            fontSize: "14px",
            marginBottom: "20px",
          }}
        >
          {t("troubleshoot")}
        </p>

        <a
          href="/downloads/moussem-app.apk"
          download="Moussem-Moulay-Abdellah-App.apk"
          style={{
            backgroundColor: "#a88a7b",
            color: "white",
            padding: "12px 24px",
            borderRadius: "5px",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginRight: "10px",
            transition: "all 0.3s ease",
          }}
        >
          <i className="fa-solid fa-download"></i>
          {t("manualDownload")}
        </a>

        <Link
          href="/"
          style={{
            backgroundColor: "#6c757d",
            color: "white",
            padding: "12px 24px",
            borderRadius: "5px",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            transition: "all 0.3s ease",
          }}
        >
          <i className="fa-solid fa-home"></i>
          {t("backToHome")}
        </Link>
      </div>
    </div>
  );
}
