/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
    images: {
      domains: ["store.storeimages.cdn-apple.com"],
    },
  },
};

module.exports = nextConfig;
