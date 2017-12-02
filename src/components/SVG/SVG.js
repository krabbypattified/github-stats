import React from 'react'
import ReactSVG from 'react-svg'
import './SVG.css'


const SVG = ({className, path, ...props}) =>
<div className={(className || '') + ' SVG'} {...props}>
  <ReactSVG path={path}/>
</div>


export default SVG
