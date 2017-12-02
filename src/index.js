import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from 'assets/registerServiceWorker'
import {injectGlobal} from 'styled-components'
import {normalize} from 'polished'
import 'assets/reset.css'


injectGlobal`${normalize()}`

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()
