import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net", // the actual image CDN
      },
            {
        protocol: "https",
        hostname: "www.notion.com",  // ← add this
      }
      // add more hostnames if logos come from different domains
    ],
  },
};

export default nextConfig;
