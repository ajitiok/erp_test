/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      "www.google.com",
    ].map(domain => ({ hostname: domain })),
  },
};

export default nextConfig;
