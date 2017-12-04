import React from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'


import SVG from 'components/SVG'
import logoSVG from 'assets/logo.svg'
import './Logo.css'


const Logo = ({ fullscreen, key }) => fullscreen

? <CSSTransition timeout={1000} classNames="fade" key={key}>
    <div className="Logo">
      <SVG path={logoSVG}/>
      <div>Repo Search</div>
    </div>
  </CSSTransition>

: <CSSTransition timeout={1000} classNames="fade" key={key}>
    <Link to='' className="Logo">
      <SVG path={logoSVG}/>
    </Link>
  </CSSTransition>


export default Logo
