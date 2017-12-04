import React from 'react'

import SVG from 'components/SVG'
import pencilSVG from 'assets/pencil.svg'
import heartSVG from 'assets/heart.svg'
import './MadeWithLove.css'

const MadeWithLove = () =>
<div className="MadeWithLove">
  <SVG path={pencilSVG}/>
  <span>with</span>
  <SVG path={heartSVG}/>
  <span>by</span>
  <b>krabbypattified</b>
</div>


export default MadeWithLove
