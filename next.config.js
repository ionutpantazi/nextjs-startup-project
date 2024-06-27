/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['lg-strapi-s3.s3.us-east-1.amazonaws.com', 'img.youtube.com', 'dmsprod.azureedge.net'],
    deviceSizes: [640, 768, 1024, 1280, 1536]
  }
}

module.exports = nextConfig