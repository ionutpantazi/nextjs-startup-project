import { gql } from '@apollo/client';
import {
  CORE_UPLOAD_FILE_FIELDS,
  SEO_META,
  BUTTON,
  SPEAKERS,
  DISCUSSION_DATA,
  TEXT_AND_ICONS,
  AGENDA,
  CARDS_CAROUSEL,
} from 'lib/queries/fragments'

export const PAGES_QUERY = gql`
  ${CORE_UPLOAD_FILE_FIELDS}
  ${SEO_META}
  ${BUTTON}
  ${SPEAKERS}
  ${DISCUSSION_DATA}
  ${TEXT_AND_ICONS}
  ${AGENDA}
  ${CARDS_CAROUSEL}
  query PagesQuery($filters: PageFiltersInput) {
    pages(filters: $filters) {
      data {
        id,
        attributes {
          SEO_Meta {
            ...SeoMeta
          }
          Title
          Theme {
            data {
              attributes {
                Name
                Data
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
          Page_Content {
            ... on ComponentIntrosLanding {
              id
              Title
              Introduction
              Content
              Background_Image {
                data {
                  attributes {
                    ...CoreUploadFileFields
                  }
                }
              }
              Event_Details {
                Event_Details {
                  id
                  Title
                  Sub_Title
                  Icon {
                    data {
                      attributes {
                        ...CoreUploadFileFields
                      }
                    }
                  }
                }
                Button {
                  ...Button
                }
              }
              I_Want_To {
                Title
                Items {
                  id
                  Title
                  Icon {
                    data {
                      attributes {
                        ...CoreUploadFileFields
                      }
                    }
                  }
                  Background_Image {
                    data {
                      attributes {
                        ...CoreUploadFileFields
                      }
                    }
                  }
                }
              }
            }
            ... on ComponentIntrosLandingNew {
              id
              Title
              Introduction
              Content
              Background_Image {
                data {
                  attributes {
                    ...CoreUploadFileFields
                  }
                }
              }
              Event_Details {
                Event_Details {
                  id
                  Title
                  Sub_Title
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
                  Button {
                    ...Button
                  }
                }
                Button {
                  ...Button
                }
              }
              I_Want_To {
                Title
                Items {
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
                  Background_Image {
                    data {
                      attributes {
                        ...CoreUploadFileFields
                      }
                    }
                  }
                }
              }
              Button {
                ...Button
              }
            }
            ... on ComponentSectionsSectionTitle {
              id
              Title
              Icon {
                data {
                  attributes {
                    ...CoreUploadFileFields
                  }
                }
              }
            }
            ... on ComponentSectionsSpeakersCarousel {
              id
              Title
              Speakers {
                data {
                  id
                  attributes {
                    ...Speakers
                  }
                }
              }
            }
            ... on ComponentSectionsCardsCarousel {
              id
              Title
              Cards {
                id
                Type
                Title
                Sub_Title
                Image {
                  data {
                    attributes {
                      ...CoreUploadFileFields
                    }
                  }
                }
              }
            }
            ... on ComponentSectionsFaQs {
              id
              Title
              FAQs {
                data {
                  id
                  attributes {
                    Question
                    Answer
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
              }
              Info_Box {
                id
                Title
                Sub_Title
                Icon {
                  data {
                    attributes {
                      ...CoreUploadFileFields
                    }
                  }
                }
                Button {
                  ...Button
                }
              }
            }
            ... on ComponentIntrosSimpleSlider {
              id
              Title
              Slides {
                data {
                  id
                  attributes {
                    ...CoreUploadFileFields
                  }
                }
              }
            }
            ... on ComponentSectionsVideo {
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
            ... on ComponentSectionsIWantTo {
              id
              Title
              Items {
                id
                Title
                Icon {
                  data {
                    attributes {
                      ...CoreUploadFileFields
                    }
                  }
                }
                Background_Image {
                  data {
                    attributes {
                      ...CoreUploadFileFields
                    }
                  }
                }
              }
            }
            ... on ComponentSectionsSection1 {
              id
              TextAndIcons {
                ...TextAndIcons
              }
              CardsCarousel {
                ...CardsCarousel
              }
              Discussion {
                id
                Title
                FeaturedDiscussions {
                  data {
                    id
                    attributes {
                      ...DiscussionData
                    }
                  }
                }
                OtherDiscussions {
                  data {
                    id
                    attributes {
                      ...DiscussionData
                    }
                  }
                }
              }
            }
            ... on ComponentSectionsSection2 {
              id
              TextAndIcons {
                ...TextAndIcons
              }
              Agenda {
                id
                Title
                Items {
                  data {
                    attributes {
                      ...Agenda
                    }
                  }
                }
              }
              CardsCarousel {
                ...CardsCarousel
              }
            }
            ... on ComponentSectionsSection3 {
              id
              TextAndIcons {
                ...TextAndIcons
              }
              CardsCarousel2 {
                id
                Cards {
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
              }
              CardsCarousel3 {
                id
                Cards {
                  Type
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
      }
    }
  }
`