/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "i.imgur.com",
        },
        {
          protocol: "https",
          hostname: "cdn.mtos.com.au"
        },
        {
          protocol: "https",
          hostname: "mtos.com.au"
        }
      ],
      unoptimized: true
    },
  };

module.exports = nextConfig
