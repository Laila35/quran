/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove swcMinify as it's deprecated in Next.js 16
  // swcMinify: true,
  
  // Add these configurations to fix the warnings:
  images: {
    unoptimized: true, // If you're having image optimization issues
  },
  
  // Add headers to handle cross-origin warnings in development
  async headers() {
    return [
      {
        source: '/_next/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: process.env.NODE_ENV === 'development' ? '*' : 'https://yourdomain.com',
          },
        ],
      },
    ];
  },
  
  // For better error handling in development
  experimental: {
    // You can add valid experimental options here if needed
    // For example, if using app router:
    // serverActions: true,
  },
};

module.exports = nextConfig;