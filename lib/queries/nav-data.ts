import { initializeApollo } from "../apolloClient"
import { gql } from '@apollo/client'
import {
  CORE_UPLOAD_FILE_FIELDS,
  PILLARS,
} from 'lib/queries/fragments'
import {
  StrapiFile,
  FAIconProps
} from 'interfaces'
import { generateMenuList } from 'utils/helpers'

export const NAVIGATION_QUERY = gql`
  ${CORE_UPLOAD_FILE_FIELDS}
  ${PILLARS}
  query Navs($filters: NavFiltersInput) {
    navs(filters: $filters) {
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
  }
`

export type PillarsProps = {
  id: string
  Title: string
  FAIcon: FAIconProps
  Items: [
    id: string,
    Title: string,
    FAIcon: FAIconProps,
  ]
}

export type HeaderNavigationProps = {
  Logo: {
    id: string
    Width: string
    Height: string
    Image: StrapiFile
  }
  Pillars: [PillarsProps]
  MorePillars: [PillarsProps]
}

export type FooterNavigationProps = {
  Logo: {
    id: string
    Width: string
    Height: string
    Image: StrapiFile
  }
  Pillars: [PillarsProps]
  Disclaimer: string
}

export type NavigationData = {
  data: {
    attributes: {
      Header_Navigation: HeaderNavigationProps
      Footer_Navigation: FooterNavigationProps
    }
  }
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

export const fetchNavigation = async (isPwa?: boolean) => {
  if (!isPwa) {
    const apolloClient = initializeApollo();
    var [
      {
        data: { navs: { data } }
      }
    ] = await Promise.all([
      apolloClient.query({
        query: NAVIGATION_QUERY,
        variables: {
          "filters": {
            "id": {
              "eq": 1
            }
          }
        }
      })
    ])

    if (data.length) {
      return {
        data: data[0]
      }
    }
  } else {
    return {
      header: [
        {
          id: 1,
          title: 'Networking',
          icon: 'fa-people-group',
        },
        {
          id: 2,
          title: 'Activities',
          icon: 'fa-screwdriver-wrench',
        },
        {
          id: 3,
          title: 'Social',
          icon: 'fa-heart',
        },
      ],
      footer: [
        {
          id: 1,
          title: 'Menu',
          items: [
            {
              id: 1,
              title: 'Networking',
            },
            {
              id: 2,
              title: 'Activities',
            },
            {
              id: 3,
              title: 'Social',
            },
          ]
        },
      ]
    }
  }
}