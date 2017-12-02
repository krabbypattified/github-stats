import gql from 'graphql-tag'


export const searchResults = gql`
query SearchResults($query: String!, $limit: Int!) {
  search(query: $query, limit: $limit) {
    name
    description
    owner {
      username
    }
    tags
    forks { total }
    stars { total }
    pullRequests { total }
    issues { total }
  }
}`


export const repository = gql`
query Repository($owner: String!, $name: String!) {
  repository(owner: $owner, name: $name) {
    name
    description
    owner
    url
    contributors {
      picture
      url
    }
    commits {
      nodes {
        time
        author {
          picture
          url
        }
      }
    }
    pullRequests {
      nodes {
        time
        author {
          picture
          url
        }
      }
    }
    issues {
      nodes {
        time
        author {
          picture
          url
        }
      }
    }
  }
}`
