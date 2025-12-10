/** @type {import('next').NextConfig} */
const nextConfig = {
  // ⚠️ CRITICAL: Enable static export for GitHub Pages
  output: 'export',
  
  // Your existing image configurations
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
      },
    ],
  },
  
  // Your existing redirects
  async redirects() {
    return [
      {
        source: '/au',
        destination: '/online-quran-classes-au',
        permanent: true,
      },
      {
        source: '/nz',
        destination: '/online-quran-classes-nz',
        permanent: true,
      },
      {
        source: '/eu',
        destination: '/online-quran-classes-europe',
        permanent: true,
      },
      {
        source: '/uk',
        destination: '/online-quran-classes-uk',
        permanent: true,
      },
      {
        source: '/uae',
        destination: '/online-quran-classes-uk',
        permanent: true,
      },
      {
        source: '/us',
        destination: '/online-quran-classes-usa',
        permanent: true,
      },
      {
        source: '/ca',
        destination: '/online-quran-classes-canada',
        permanent: true,
      },
    ];
  },
  
  // Add basePath for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/ilmulquran-main' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ilmulquran-main/' : '',
  
  // Optional: Keep react strict mode
  reactStrictMode: true,
};

export default nextConfig;
