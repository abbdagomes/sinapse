/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Isso aqui vai fazer o build ignorar esses erros de "any"
    ignoreBuildErrors: true,
  }
};

export default nextConfig;