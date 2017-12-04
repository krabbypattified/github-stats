import React from 'react'

import Bar from './Bar'
import Logo from './Logo'
import './Search.css'


const Search = ({ fullscreen, text }) => {
  return (
    <Wrapper fullscreen={fullscreen}>
      <Logo fullscreen={fullscreen}/>
      <Bar fullscreen={fullscreen}>{text}</Bar>
    </Wrapper>
  )
}


const Wrapper = ({ children, fullscreen }) => <div className={'Search' + (fullscreen ? ' fullscreen' : '')}>{children}</div>


export default Search
