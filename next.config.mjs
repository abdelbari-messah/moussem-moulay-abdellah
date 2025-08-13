import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  // Ensure large static files can be served
  experimental: {
    largePageDataBytes: 128 * 1000 * 1000, // 128MB
  },
  // Allow large files in public directory
  async headers() {
    return [
      {
        source: "/downloads/:path*",
        headers: [
          {
            key: "Content-Disposition",
            value: "attachment",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
