/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'upload.wikimedia.org', 'grainy-gradients.vercel.app'],
  },
  output: 'standalone',
};

module.exports = nextConfig;

