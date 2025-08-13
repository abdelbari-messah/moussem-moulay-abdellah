import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "/public/assets/css/vendor/aos.css";
import "/public/assets/css/vendor/bootstrap.min.css";
import "/public/assets/css/vendor/fontawesome.css";
import "/public/assets/css/vendor/magnific-popup.css";
import "/public/assets/css/vendor/mobile.css";
import "/public/assets/css/vendor/sidebar.css";
import "/public/assets/css/vendor/slick-slider.css";
import "/public/assets/css/vendor/nice-select.css";
import "/public/assets/css/vendor/odometer.css";
import "/public/assets/css/main.css";
import "/public/assets/css/rtl-mobile-menu.css";
import "../globals.css";

import type { Metadata } from "next";
import { Figtree, Space_Grotesk } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { read } from "fs";
import Script from "next/script";

const figtree = Figtree({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--figtree",
  display: "swap",
});
const grotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Moussem Moulay Abdellah Amghar Edition 2025 | Cultural Celebration in Morocco",
  description:
    "Experience the rich cultural heritage of Moussem Moulay Abdellah Amghar 2025. Traditional Moroccan celebration featuring Fantasia performances, spiritual ceremonies, and local crafts.",
  keywords:
    "Moussem Moulay Abdellah, Moroccan festival, cultural events Morocco, Fantasia, traditional celebration",
  openGraph: {
    title: "Moussem Moulay Abdellah Amghar Edition 2025",
    description:
      "Experience Morocco's largest traditional festival featuring spiritual ceremonies, Fantasia performances, and local craftsmanship.",
    url: "https://moussem-moulay-abdellah-amghar.vercel.app",
    siteName: "Moussem Moulay Abdellah Amghar",
    images: [
      {
        url: "/assets/img/all-images/metadata/meta1.JPG",
        width: 1200,
        height: 630,
        alt: "Moussem Moulay Abdellah Amghar Edition 2025",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moussem Moulay Abdellah Amghar Edition 2025",
    description:
      "Morocco's largest traditional festival with spiritual ceremonies and cultural performances",
    images: ["/assets/img/all-images/metadata/meta1.JPG"],
  },
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = require(`../../messages/${params.locale}.json`);
  } catch (error) {
    console.error(`No messages found for locale: ${params.locale}`);
    messages = require(`../../messages/en.json`);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Festival",
    name: "Moussem Moulay Abdellah Amghar Edition 2025",
    description:
      "Experience the rich cultural heritage of Moussem Moulay Abdellah Amghar 2025. Traditional Moroccan celebration featuring Fantasia performances, spiritual ceremonies, and local crafts.",
    startDate: "2025-08-08",
    endDate: "2025-08-16",
    location: {
      "@type": "Place",
      name: "Moulay Abdellah Community in El Jadida",
      address: {
        "@type": "PostalAddress",
        addressLocality: "El Jadida",
        addressRegion: "Morocco",
      },
    },
    image: "/assets/img/all-images/metadata/meta1.JPG",
    url: "https://moussem-moulay-abdellah-amghar.vercel.app",
    offers: {
      "@type": "Offer",
      url: "https://moussem-moulay-abdellah-amghar.vercel.app",
      availability: "https://schema.org/InStock",
    },
    organizer: {
      "@type": "Organization",
      name: "Moussem Moulay Abdellah Amghar Committee",
      url: "https://moussem-moulay-abdellah-amghar.vercel.app",
    },
    keywords:
      "Moussem Moulay Abdellah, Moroccan festival, cultural events Morocco, Fantasia, traditional celebration",
  };

  return (
    <html
      lang={params.locale}
      className={`${figtree.variable} ${grotesk.variable}`}
    >
      <body>
        <Script
          id="jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
