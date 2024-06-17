import { initializeApollo } from "../apolloClient"
import { gql } from '@apollo/client'
import {
  CORE_UPLOAD_FILE_FIELDS,
} from 'lib/queries/fragments'
import {
  StrapiFile,
  FAIconProps
} from 'interfaces'
import { generateMenuList } from 'utils/helpers'

export const SETTINGS_QUERY = gql`
  query Data {
    settingses {
      data {
        attributes {
          Registration_Questions {
            id
            Question
            Answers {
              id
              Answer
              Homepage {
                data {
                  id
                  attributes {
                    Slug
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

export const GET_USER = gql`
  query UsersPermissionsUsers($filters: UsersPermissionsUserFiltersInput) {
    usersPermissionsUsers(filters: $filters) {
      data {
        id
        attributes {
          Homepage {
            data {
              attributes {
                Slug
              }
            }
          }
        }
      }
    }
  }
`

export const MUTATION_USER = gql`
  mutation UpdateUsersPermissionsUser($updateUsersPermissionsUserId: ID!, $data: UsersPermissionsUserInput!) {
    updateUsersPermissionsUser(id: $updateUsersPermissionsUserId, data: $data) {
      data {
        id
      }
    }
  }
`

export type Registration_Questions = {
  id: number
  Question: string
  Answers: [Registration_Answers]
}

export type Registration_Answers = {
  id: number
  Answer: string
  Homepage: {
    data: {
      id: number
      attributes: {
        Slug: string
      }
    }
  }
}

export type SettingsProps = {
  Registration_Questions: [Registration_Questions]
}

export const fetchSettings = async () => {
  const apolloClient = initializeApollo();
  const { data: { settingses: { data } } } = await apolloClient.query({
    query: SETTINGS_QUERY
  })

  if (data?.attributes) {
    return data.attributes
  }
}

export const updateUser = async (userid: string, homepageId: number) => {
  const apolloClient = initializeApollo();
  const { data: { updateUsersPermissionsUser: { data } } } = await apolloClient.mutate({
    variables: {
      "updateUsersPermissionsUserId": userid,
      "data": {
        "Homepage": homepageId
      }
    },
    mutation: MUTATION_USER,
  })

  if (data?.id) {
    return true
  }
}

export const fetchUserData = async (email: string) => {
  const apolloClient = initializeApollo();
  const { data: { usersPermissionsUsers: { data } } } = await apolloClient.query({
    query: GET_USER,
    variables: {
      "filters": {
        "email": {
          "eq": email
        }
      }
    }
  })

  if (data?.length) {
    return data[0]
  }
}