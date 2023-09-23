import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
query {
  repositories {
    edges {
      node {
        id
        fullName
        description
        language
        forksCount
        stargazersCount
        ratingAverage
        reviewCount
        ownerAvatarUrl
      }
    }
  }
}
`

export const GET_SINGLE_REPOSITORY = gql`
query getRepository($repositoryId: ID!) {
  repository(id: $repositoryId) {
    id
    fullName
    description
    language
    forksCount
    ratingAverage
    reviewCount
    stargazersCount
    ownerAvatarUrl
    url
  }
}
`

export const GET_CURRENT_USER = gql`
query {
  me {
    id
    username
  }
}
`