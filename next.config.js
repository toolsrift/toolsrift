/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Allow large component files
  experimental: {
    largePageDataBytes: 512 * 1024,
  },
}

module.exports = nextConfig
