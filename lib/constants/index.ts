export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL
  ? process.env.NEXT_PUBLIC_STRAPI_URL
  : "https://lg-prototype-strapi.azurewebsites.net/"

export const IMAGE_DOMAIN = process.env.NEXT_PUBLIC_IMAGE_DOMAIN
  ? process.env.NEXT_PUBLIC_IMAGE_DOMAIN
  : ""

export const HEADER_NAVIGATION_ID_OR_SLUG = process.env.NEXT_PUBLIC_HEADER_NAVIGATION_ID_OR_SLUG
  ? process.env.HEADER_NAVIGATION_ID_OR_SLUG
  : "1"

export const FOOTER_NAVIGATION_ID_OR_SLUG = process.env.NEXT_PUBLIC_FOOTER_NAVIGATION_ID_OR_SLUG
  ? process.env.FOOTER_NAVIGATION_ID_OR_SLUG
  : "2"

export const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY

export const AUTH_SECRET = process.env.NEXT_PUBLIC_AUTH_SECRET
  ? process.env.AUTH_SECRET
    ? process.env.AUTH_SECRET
    : "complex_password_at_least_32_characters_long"
  : "complex_password_at_least_32_characters_long"