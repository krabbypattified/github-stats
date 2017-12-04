import React from 'react'

import SVG from 'components/SVG'
import pencilSVG from 'assets/pencil.svg'
import heartSVG from 'assets/heart.svg'
import './MadeWithLove.css'

const MadeWithLove = () =>
<div className="MadeWithLove">
  <div className="inner">
    <SVG path={pencilSVG}/>
    <span>with</span>
    <SVG path={heartSVG}/>
    <span>by</span>
    <b>krabbypattified</b>
  </div>
</div>


export default MadeWithLove
