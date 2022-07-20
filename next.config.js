/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i3.ytimg.com'],
  },
  async redirects() {
    return [{
      source: '/',
      destination: '/home',
      permanent: true,
    }]
  }
}

module.exports = nextConfig
