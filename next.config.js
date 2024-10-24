/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_PROTOCOL,
        hostname: "foodyman.s3.amazonaws.com",
      },
      {
        protocol: process.env.NEXT_PUBLIC_PROTOCOL,
        hostname: "demo-api.foodyman.org",
      },
    ],
    minimumCacheTTL: 3600,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: process.env.NEXT_PUBLIC_PROTOCOL,
  //       hostname: process.env.NEXT_PUBLIC_API_HOSTNAME,
  //       port: "",
  //     },
  //     {
  //       protocol: process.env.NEXT_PUBLIC_PROTOCOL,
  //       hostname: process.env.NEXT_PUBLIC_STORAGE_HOSTNAME,
  //       port: "",
  //     },
  //     {
  //       protocol: process.env.NEXT_PUBLIC_PROTOCOL,
  //       hostname: "demo-api.foodyman.org",
  //       port: "",
  //     },
  //   ],
  //   minimumCacheTTL: 3600,
  //   dangerouslyAllowSVG: true,
  //   contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  // },
};

module.exports = withBundleAnalyzer(nextConfig);
