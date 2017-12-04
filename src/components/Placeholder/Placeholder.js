import React from 'react'

import './Placeholder.css'


const Placeholder = ({ children, className, ...other }) =>
<div {...other} className={(className || '') + ' Placeholder'}>{children}</div>


export default Placeholder
