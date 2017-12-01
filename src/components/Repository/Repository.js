import React from 'react'

import Title from './Title'
import Contributors from './Contributors'
import Graph from './Graph'
import Attribution from './Attribution'


const Repository = ({ data/*: {repository:repo} */}) => {
  return (
    <div>
      <Title>krabbypattified/github-stats</Title>
      <Contributors/>
      <Graph/>
      <Attribution/>
    </div>
  )
}


export default Repository
