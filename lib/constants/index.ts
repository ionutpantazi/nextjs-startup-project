export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL
  ? process.env.NEXT_PUBLIC_STRAPI_URL
  : "https://elk-apt-implicitly.ngrok-free.app"

export const IMAGE_DOMAIN = process.env.NEXT_PUBLIC_IMAGE_DOMAIN
  ? process.env.NEXT_PUBLIC_IMAGE_DOMAIN
  : "https://elk-apt-implicitly.ngrok-free.app"

export const HEADER_NAVIGATION_ID_OR_SLUG = process.env.NEXT_PUBLIC_HEADER_NAVIGATION_ID_OR_SLUG
  ? process.env.HEADER_NAVIGATION_ID_OR_SLUG
  : "1"

export const FOOTER_NAVIGATION_ID_OR_SLUG = process.env.NEXT_PUBLIC_FOOTER_NAVIGATION_ID_OR_SLUG
  ? process.env.FOOTER_NAVIGATION_ID_OR_SLUG
  : "2"