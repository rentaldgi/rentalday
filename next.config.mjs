/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },
    ],
    domains: ["backend.ptdahliaglobalindo.id"],
  },
};

export default nextConfig;
