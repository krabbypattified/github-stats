import React from 'react'

import Search from 'components/Search'

import Title from './Title'
import Contributors from './Contributors'
import Graph from './Graph'
import Attribution from './Attribution'


const Repository = ({ data/*: {repository:repo} */}) => {
  return (
    <React.Fragment>
      <Search/>
      <Title>krabbypattified/github-stats</Title>
      <Contributors/>
      <Graph/>
      <Attribution/>
    </React.Fragment>
  )
}


export default Repository
