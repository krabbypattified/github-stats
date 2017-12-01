import React from 'react'

import Wrapper from './Wrapper'
import Bar from './Bar'
import Logo from './Logo'


const Search = ({ match }) => {
  return (
    <Wrapper fullscreen>
      <Logo large/>
      <Bar/>
    </Wrapper>
  )
}


export default Search
