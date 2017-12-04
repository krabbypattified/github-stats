import React from 'react'
import { graphql } from 'react-apollo'

import Search from 'components/Search'
import MadeWithLove from 'components/MadeWithLove'
import { repository } from 'data/queries'

import Title from './Title'
import Contributors from './Contributors'
import Graph from './Graph'
import './Repository.css'


// TODO Handle not found repository (GQL error type:"NOT_FOUND")
const Repository = ({ data }) =>
<React.Fragment>
  <Search/>
  <div className="Repository">
    <Title data={data}/>
    <Contributors data={data}/>
    <Graph data={data}/>
  </div>
  <MadeWithLove/>
</React.Fragment>


export default graphql(repository, {
  options: p => ({variables: {
    owner: decodeURIComponent(p.match.params.owner),
    name: decodeURIComponent(p.match.params.name),
  }})
})(Repository)
