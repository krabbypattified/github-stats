import gql from 'graphql-tag'


export const searchResults = gql`
query SearchResults($query: String!) {
  search(query: $query, limit: 10) {
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
    owner {
      username
    }
    url
    contributors {
      picture
      url
    }
    commits {
      nodes {
        time
        author {
          username
          picture
          url
        }
      }
    }
    pullRequests {
      nodes {
        time
        author {
          username
          picture
          url
        }
      }
    }
    issues {
      nodes {
        time
        author {
          username
          picture
          url
        }
      }
    }
  }
}`
