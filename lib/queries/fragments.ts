import { gql } from '@apollo/client';

export const CORE_UPLOAD_FILE_FIELDS = gql`
  fragment CoreUploadFileFields on UploadFile {
    name
    url
    formats
    alternativeText
    width
    height
  }
`

export const SEO_META = gql`
  ${CORE_UPLOAD_FILE_FIELDS}
  fragment SeoMeta on ComponentSharedSeo {
    canonicalURL
    keywords
    metaDescription
    metaImage {
      data {
        attributes {
          ...CoreUploadFileFields
        }
      }
    }
    metaRobots
    metaTitle
    metaViewport
    structuredData
  }
`