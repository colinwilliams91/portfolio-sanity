/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // <-- taken from error, needed src for projects-images
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
