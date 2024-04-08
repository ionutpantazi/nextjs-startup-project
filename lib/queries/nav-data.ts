import { initializeApollo } from "../apolloClient"
import { gql } from '@apollo/client'
import {
  CORE_UPLOAD_FILE_FIELDS,
} from 'lib/queries/fragments'
import {
  StrapiFileFields
} from 'interfaces'
import { HEADER_NAVIGATION_ID_OR_SLUG } from 'lib/constants'

export const LOGO_QUERY = gql`
  ${CORE_UPLOAD_FILE_FIELDS}
  query Settingses {
    settingses {
      data {
        attributes {
          SiteLogo {
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
`

export const NAVIGATION_QUERY = gql`
  query RenderNavigation($navigationIdOrSlug: String!) {
    renderNavigation(navigationIdOrSlug: $navigationIdOrSlug) {
      id
      order
      title
      externalPath
    }
  }
`

export type NavigationData = {
  siteLogo?: StrapiFileFields
  navigationData?: [
    NavigationItem
  ]
}

export type NavigationItem = {
  id: string,
  order: string,
  title: string,
  externalPath: string,
}

export const fetchNavigation = async () => {
  const apolloClient = initializeApollo();
  const [
    {
      data: { settingses: { data: { attributes } } }
    },
    {
      data: { renderNavigation }
    }
  ] = await Promise.all([
    apolloClient.query({
      query: LOGO_QUERY
    }),
    apolloClient.query({
      query: NAVIGATION_QUERY,
      variables: {
        navigationIdOrSlug: HEADER_NAVIGATION_ID_OR_SLUG
      }
    })
  ])

  let siteLogo = attributes?.SiteLogo?.data?.attributes;
  let navigationData = renderNavigation;

  return {
    siteLogo: siteLogo,
    navigationData: navigationData
  }
}