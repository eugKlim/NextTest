/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath: '/testfavicon',
  basePath: '/NextTest',
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'flagcdn.com', 'upload.wikimedia.org'],
    unoptimized: true,
  },
};

export default nextConfig;
