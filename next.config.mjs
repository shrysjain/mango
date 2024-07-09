/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  nextConfig,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3001/api/:path*',
      },
    ];
  },
};
