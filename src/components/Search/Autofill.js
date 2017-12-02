import React from 'react'
import fuzzy from 'fuzzy'
import { Link } from 'react-router-dom'

import SVG from 'components/SVG'
import openArrowSVG from 'assets/openArrow.svg'
import { storage } from 'helpers'


const Autofill = ({ query }) => {
  if (!query) return null

  let history = storage.get("autofill", [])
  let matches = fuzzy
      .filter(query, history)
      .sort((a,b) => b.score - a.score)
      .map(r => r.original).slice(0,5)

  if (!matches.length) return null

  return <div className="Autofill">{matches.map((m,i) => <Row text={m} key={i}/>)}</div>
}


const Row = ({ text }) =>
<Link className="Row" to={encodeURIComponent(text)}>
  <div>{text}</div>
  <SVG className="OpenArrowIcon" path={openArrowSVG}/>
</Link>


export default Autofill
