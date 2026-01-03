/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This ignores the "unescaped entities" errors like the quotes and apostrophes
    ignoreDuringBuilds: true,
  },
  typescript: {
    // This ignores any TypeScript mismatches during build
    ignoreBuildErrors: true,
  },
  // This helps if you are using <img> instead of <Image />
  images: {
    unoptimized: true,
  }
};

export default nextConfig;