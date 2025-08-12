"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const t = useTranslations("NotFoundPage");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        padding: "20px",
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          padding: "40px",
          borderRadius: "12px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#2d3748",
            margin: "0 0 16px",
          }}
        >
          {t("title")}
        </h1>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: 600,
            color: "#4a5568",
            margin: "0 0 24px",
          }}
        >
          {t("heading")}
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#718096",
            margin: "0 0 32px",
            lineHeight: "1.6",
          }}
        >
          {t("description")}
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <button
            onClick={() => router.back()}
            style={{
              padding: "12px 24px",
              backgroundColor: "#edf2f7",
              color: "#2d3748",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#e2e8f0";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#edf2f7";
            }}
          >
            {t("goBack")}
          </button>
          <Link
            href="/"
            style={{
              padding: "12px 24px",
              backgroundColor: "#a88a7b",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              fontWeight: 600,
              cursor: "pointer",
              textDecoration: "none",
              transition: "background-color 0.2s",
            }}
          >
            {t("returnHome")}
          </Link>
        </div>
      </div>
    </div>
  );
}
