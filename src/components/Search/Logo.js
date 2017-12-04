import React from 'react'
import { Link } from 'react-router-dom'

import SVG from 'components/SVG'
import logoSVG from 'assets/logo.svg'
import './Logo.css'

const Logo = ({ fullscreen }) => fullscreen
? <div className="Logo"><SVG path={logoSVG}/><div>Repo Search</div></div>
: <Link to='' className="Logo"><SVG path={logoSVG}/></Link>


export default Logo
