/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "i.imgur.com, sendmail-ejqhdbrtsq-uc.a.run.app",
        },
      ],
    },
  };

module.exports = nextConfig
