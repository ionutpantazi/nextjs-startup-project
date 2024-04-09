import { initializeApollo } from "../apolloClient"
import { gql } from '@apollo/client'
import {
  CORE_UPLOAD_FILE_FIELDS,
} from 'lib/queries/fragments'
import {
  StrapiFileFields
} from 'interfaces'
import { HEADER_NAVIGATION_ID_OR_SLUG, FOOTER_NAVIGATION_ID_OR_SLUG } from 'lib/constants'
import { generateMenuList } from 'utils/helpers'

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

export const HEADER_NAVIGATION_QUERY = gql`
  query RenderNavigation($navigationIdOrSlug: String!) {
    headerNavigation: renderNavigation(navigationIdOrSlug: $navigationIdOrSlug) {
      id
      order
      title
      externalPath
      type
      parent {
        id
      }
    }
  }
`

export const FOOTER_NAVIGATION_QUERY = gql`
  query RenderNavigation($navigationIdOrSlug: String!) {
    footerNavigation: renderNavigation(navigationIdOrSlug: $navigationIdOrSlug) {
      id
      order
      title
      externalPath
      type
      parent {
        id
      }
    }
  }
`

export type NavigationData = {
  siteLogo?: StrapiFileFields
  headerNavigationData?: [
    NavigationItem
  ],
  footerNavigationData?: [
    NavigationItem
  ]
}

export type NavigationItem = {
  id: string,
  order: string,
  title: string,
  externalPath: string,
  type: string,
  parent: {
    id: number
  }
  children?: NavigationItem[];
}

export const fetchNavigation = async () => {
  const apolloClient = initializeApollo();
  var [
    {
      data: { settingses: { data: { attributes } } }
    },
    {
      data: { headerNavigation }
    },
    {
      data: { footerNavigation }
    }
  ] = await Promise.all([
    apolloClient.query({
      query: LOGO_QUERY
    }),
    apolloClient.query({
      query: HEADER_NAVIGATION_QUERY,
      variables: {
        navigationIdOrSlug: HEADER_NAVIGATION_ID_OR_SLUG
      }
    }),
    apolloClient.query({
      query: FOOTER_NAVIGATION_QUERY,
      variables: {
        navigationIdOrSlug: FOOTER_NAVIGATION_ID_OR_SLUG
      }
    })
  ])

  let siteLogo = attributes?.SiteLogo?.data?.attributes;
  let headerNavigationData = JSON.parse(JSON.stringify(headerNavigation));
  let footerNavigationData = JSON.parse(JSON.stringify(footerNavigation));

  return {
    siteLogo: siteLogo,
    headerNavigationData: generateMenuList(headerNavigationData),
    footerNavigationData: generateMenuList(footerNavigationData),
  }
}