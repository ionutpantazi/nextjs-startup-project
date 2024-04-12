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

export const BUTTON = gql`
  ${CORE_UPLOAD_FILE_FIELDS}
  fragment Button on ComponentIncludesButton {
    Text
    Link
    ClassName
    Image {
      data {
        attributes {
          ...CoreUploadFileFields
        }
      }
    }
    BackgroundColor
    BackgroundHoverColor
    TextColor
    TextHoverColor
  }
`

export const SPEAKERS = gql`
  ${CORE_UPLOAD_FILE_FIELDS}
  fragment Speakers on Speake {
    Name
    Intro
    Image {
      data {
        attributes {
          ...CoreUploadFileFields
        }
      }
    }
    Position
    Type
    Linkedin
    Workshops {
      data {
        id
        attributes {
          Title
          Intro
        }
      }
    }
  }
`