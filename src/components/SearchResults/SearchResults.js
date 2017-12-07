import React from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'

import SVG from 'components/SVG'
import Placeholder from 'components/Placeholder'
import forkSVG from 'assets/fork.svg'
import starSVG from 'assets/star.svg'
import pullSVG from 'assets/pull.svg'
import issueSVG from 'assets/issue.svg'
import Search from 'components/Search'
import MadeWithLove from 'components/MadeWithLove'
import { searchResults } from 'data/queries'
import { storage } from 'helpers'

import './SearchResults.css'


const SearchResults = ({ match, data }) => {
  let query = decodeURIComponent(match.params.query)
  let history = new Set(storage.get("autofill", []))
  history.add(query)
  storage.set("autofill", Array.from(history))

  return (
    <React.Fragment>
      <Search text={query}/>
      <div className="SearchResults">
        {data.loading
          ? [1,2,3,4,5,6,7,8,9,10].map(i=><PlaceholderResult key={i}/>)
          : data.search.map((repo, i) => <Result key={i} repo={repo} delay={i*75}/>)}
      </div>
      {data.loading || <MadeWithLove/>}
    </React.Fragment>
  )
}


const PlaceholderResult = () =>
<div className="Result">
  <div className="Header">
    <Placeholder className="Title">
      krabbypattified/github-stats
    </Placeholder>
    <Placeholder className="Stats">
      <Stat path={forkSVG}>10</Stat>
      <Stat path={starSVG}>50</Stat>
      <Stat path={pullSVG}>4</Stat>
      <Stat path={issueSVG}>2</Stat>
    </Placeholder>
  </div>
  <Placeholder className="Description">A really cool repository with a really cool description</Placeholder>
</div>


const Result = ({ repo, delay }) =>
<div className="Result" style={{animationDelay:delay+'ms'}}>
  <div className="Header">
    <Link to={'/'+encodeURIComponent(repo.owner.username)+'/'+encodeURIComponent(repo.name)} className="Title">
      {repo.owner.username}/<b>{repo.name}</b>
    </Link>
    <div className="Stats">
      <Stat path={forkSVG}>{repo.forks.total}</Stat>
      <Stat path={starSVG}>{repo.stars.total}</Stat>
      <Stat path={pullSVG}>{repo.pullRequests.total}</Stat>
      <Stat path={issueSVG}>{repo.issues.total}</Stat>
    </div>
  </div>
  <div className="Description">{repo.description}</div>
  <div className="Tags">
    {repo.tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
  </div>
</div>


const Stat = ({ children, path }) =>
<div className="Stat">
  <SVG path={path}/>
  <div className="Count">{children}</div>
</div>


const Tag = ({ children }) =>
<a href={'https://github.com/topics/'+children} target="_blank" className="Tag">{children}</a>


export default graphql(searchResults, {
  options: p => ({variables: {
    query: decodeURIComponent(p.match.params.query),
  }})
})(SearchResults)
