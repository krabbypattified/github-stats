import React from 'react'
// import {graphql} from 'react-apollo'

// import {searchResults} from 'data/queries'


const SearchResults = ({ match, data/*: {search}*/ }) => {
  return (
    <div>
      <div>Search Results for {match.params.query}:</div>
      {[1,2,3].map((repo, i) => <div key={i}>{repo}</div>)}
    </div>
  )
}


export default SearchResults//graphql(searchResults)(SearchResults)
