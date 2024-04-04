import { gql } from '@apollo/client';

export const HOMEPAGE_QUERY = gql`
  query HomepageQuery {
    homepage {
      data {
        id,
        attributes {
          title
          createdAt
        }
      }
    }
  }
`