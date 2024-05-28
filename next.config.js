const IMAGE_DOMAINS = process.env.NEXT_PUBLIC_IMAGE_DOMAINS
  ? process.env.NEXT_PUBLIC_IMAGE_DOMAINS?.split(',').map((i) => new URL(i).host)
  : []

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['lg-prototype-strapi.azurewebsites.net', 'img.youtube.com'],
    deviceSizes: [640, 768, 1024, 1280, 1536]
  }
}

module.exports = nextConfig