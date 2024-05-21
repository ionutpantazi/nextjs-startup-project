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

export const PILLARS = gql`
  fragment Pillars on ComponentNavPillars {
    id
    Title
    Items {
      id
      Title
      FAIcon {
        id
        Width
        Icon
        Height
        Color
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
`

export const NAVIGATION = gql`
  ${CORE_UPLOAD_FILE_FIELDS}
  ${PILLARS}
  fragment Navigation on NavEntityResponse {
    data {
      id
      attributes {
        Title
        Header_Navigation {
          id
          Logo {
            id
            Height
            Width
            Image {
              data {
                attributes {
                  ...CoreUploadFileFields
                }
              }
            }
          }
          Pillars {
            ...Pillars
          }
          More_Pillars {
            ...Pillars
          }
        }
        Footer_Navigation {
          id
          Disclaimer
          Logo {
            id
            Height
            Width
            Image {
              data {
                attributes {
                  ...CoreUploadFileFields
                }
              }
            }
          }
          Pillars {
            ...Pillars
          }
        }
      }
    }
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

export const CARDS_CAROUSEL4 = gql`
  ${CORE_UPLOAD_FILE_FIELDS}
  fragment CardsCarousel4 on ComponentSectionsCardsCarousel4 {
    id
    Title
    Cards {
      id
      Title
      Sub_Title
      Impressions
      Tags {
        data {
          attributes {
            Name
            Slug
          }
        }
      } 
    }
  }
`

export const CARDS_CAROUSEL5 = gql`
  ${CORE_UPLOAD_FILE_FIELDS}
  fragment CardsCarousel5 on ComponentSectionsCardsCarousel5 {
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

export const LISTS = gql`
  ${SPEAKERS}
  ${CORE_UPLOAD_FILE_FIELDS}
  fragment Lists on ComponentIncludesLists {
    id
    Title
    List {
      id
      Title
      Visible
      Speakers {
        data {
          id
          attributes {
            ...Speakers
          }
        }
      }
      Workshops {
        data {
          id
          attributes {
            Title
            Intro
            Image {
              data {
                attributes {
                  ...CoreUploadFileFields
                }
              }
            }
          }
        }
      }
    }
  }
`

export const VIDEO = gql`
  fragment Video on ComponentSectionsVideo {
    id
    Title
    Videos {
      id
      Title
      Sub_Title
      YouTubeID
      Categories {
        data {
          id
          attributes {
            Title
            Slug
          }
        }
      }
    }
  }
`

export const CONTACT = gql`
  fragment Contact on ComponentSectionsContact {
    id
    Title
    Sub_Title
  }
`