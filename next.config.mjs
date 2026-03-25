/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.vrdsystem.com.br',
      },
      {
        protocol: 'https',
        hostname: 'law-match.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'talitha-pedroso-ipsi.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
