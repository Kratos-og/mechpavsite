/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  webpack(config) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
      topLevelAwait: true
    };
    return config;
  }
}

module.exports = nextConfig
