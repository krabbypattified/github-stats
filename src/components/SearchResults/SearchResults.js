import React from 'react'
import {graphql} from 'react-apollo'

import Search from 'components/Search'
import {searchResults} from 'data/queries'
import forkSVG from 'assets/fork.svg'
import starSVG from 'assets/star.svg'
import pullSVG from 'assets/pull.svg'
import issueSVG from 'assets/issue.svg'
import { storage } from 'helpers'


const SearchResults = ({ match, data }) => {
  let query = decodeURIComponent(match.params.query)
  let history = new Set(storage.get("autofill", []))
  history.add(query)
  storage.set("autofill", Array.from(history))

  return (
    <React.Fragment>
      <Search text={query}/>
      {data.loading ? [] : data.search.map((repo, i) => <SearchResult key={i} repo={repo}/>)}
    </React.Fragment>
  )
}


const SearchResult = ({ repo }) =>
<div className="Row">
  <div className="Header">
    <div className="Title">{repo.owner.username}/{repo.name}</div>
    <div className="Stats">
      <Stat path={forkSVG}>{repo.forks.total}</Stat>
      <Stat path={starSVG}>{repo.stars.total}</Stat>
      <Stat path={pullSVG}>{repo.pullRequests.total}</Stat>
      <Stat path={issueSVG}>{repo.issues.total}</Stat>
    </div>
  </div>
  <div className="Description">{repo.description}</div>
  <div className="Tags">
    {repo.tags.map((tag, i) => <Tag key={i}>tag</Tag>)}
  </div>
</div>


const Stat = ({ children, path }) =>
<div>{children}</div>


const Tag = ({ children }) =>
<div>{children}</div>


export default graphql(searchResults, {
  options: p => ({variables: {
    query: decodeURIComponent(p.match.params.query),
    limit: 2,
  }})
})(SearchResults)
