import { gql } from '@apollo/client';
import {
  CORE_UPLOAD_FILE_FIELDS,
  SEO_META,
} from 'lib/queries/fragments'

export const HOMEPAGE_QUERY = gql`
  ${CORE_UPLOAD_FILE_FIELDS}
  ${SEO_META}
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
              Title
              Sub_Title
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
`