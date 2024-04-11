import { gql } from '@apollo/client';
import {
  CORE_UPLOAD_FILE_FIELDS,
  SEO_META,
  BUTTON,
} from 'lib/queries/fragments'

export const HOMEPAGE_QUERY = gql`
  ${CORE_UPLOAD_FILE_FIELDS}
  ${SEO_META}
  ${BUTTON}
  query HomepageQuery {
    homepage {
      data {
        id,
        attributes {
          SEO_Meta {
            ...SeoMeta
          }
          Title
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
          }
        }
      }
    }
  }
`