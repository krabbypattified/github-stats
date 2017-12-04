import React from 'react'

import Placeholder from 'components/Placeholder'

import './Contributors.css'


const Contributors = ({ data }) =>
<div className="Contributors">
  {data.loading && [1,2,3,4,5,6,7,8,9,10].map((c,i) => <Placeholder className="Picture" key={i}/>)}
  {data.loading || data.repository.contributors.map((c,i) => <a key={i} href={c.url} target="_blank"><img style={{animationDelay:i*30+'ms'}} className="Picture" src={c.picture} alt=""/></a>)}
</div>


export default Contributors
