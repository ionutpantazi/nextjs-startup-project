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
    Sub_Title
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

export const DISCUSSION_DATA = gql`
  ${CORE_UPLOAD_FILE_FIELDS}
  fragment DiscussionData on Discussion {
    createdAt
    Title
    Slug
    Impressions
    Content
    Author {
      data {
        id
        attributes {
        ...Speakers
        }
      }
    }
    Category {
      data {
        id
        attributes {
          Title
          Slug
        }
      }
    }
    Comments {
      data {
        id
        attributes {
          createdAt
          Title
          Slug
          Impressions
          Content
          Author {
            data {
              id
              attributes {
                ...Speakers
              }
            }
          }
        }
      }
    }
  }
`

export const TEXT_AND_ICONS = gql`
  ${CORE_UPLOAD_FILE_FIELDS}
  fragment TextAndIcons on ComponentIncludesTextAndIcons {
    id
    Title
    Introduction
    Icon {
      data {
        attributes {
          ...CoreUploadFileFields
        }
      }
    }
    FAIcon {
      id
      Width
      Icon
      Height
      Color
    }
    Icons {
      id
      Type
      Title
      Icons {
        id
        Title
        Icon {
          data {
            attributes {
              ...CoreUploadFileFields
            }
          }
        }
        FAIcon {
          id
          Width
          Icon
          Height
          Color
        }
      }
    }
  }
`

export const AGENDA = gql`
  ${SPEAKERS}
  fragment Agenda on Agenda {
    Title
    Sub_Title
    Date
    Start_Time
    End_Time
    Room
    Tags {
      data {
        attributes {
          Name
          Slug
        }
      }
    }
    Participants {
      data {
        attributes {
          ...Speakers
        }
      }
    }
  }
`

export const CARDS_CAROUSEL = gql`
  ${CORE_UPLOAD_FILE_FIELDS}
  fragment CardsCarousel on ComponentSectionsCardsCarousel {
    id
    Title
    Cards {
      id
      Type
      Title
      Sub_Title
      Impressions
      Link
      Image {
        data {
          attributes {
            ...CoreUploadFileFields
          }
        }
      }
    }
  }
`