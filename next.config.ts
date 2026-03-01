import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value:
              "noindex, nofollow, noarchive, nosnippet, noimageindex, nocache, max-image-preview:none, max-snippet:0, max-video-preview:0",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
