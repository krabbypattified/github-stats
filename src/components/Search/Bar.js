import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import SVG from 'components/SVG'
import searchSVG from 'assets/search.svg'
import { listener } from 'helpers'

import Autofill from './Autofill'
import './Bar.css'


class SearchBar extends React.PureComponent {

  static contextTypes = {
    router: PropTypes.any
  }

  onFocus = e => this.setState({ focus:true })
  onChange = e => this.setState({ autofill:e.target.value })
  onKeyDown = e => e.keyCode === 13 && this.state.autofill && this.search()
  blurAutofill = () => this.mounted && this.setState({ focus:false })
  search = () => this.context.router.history.push(encodeURIComponent(this.state.autofill))

  constructor() {
    super(...arguments)
    this.state = {autofill: this.props.text || '', focus:false}

    this.InputComponents = () =>
    <div className="InputComponents">
      <input
        value={this.state.autofill}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        onFocus={this.onFocus}
      />
      <SVG className="SearchIcon" path={searchSVG} onClick={this.search}/>
    </div>

    this.Autofill = () => this.state.focus ? <Autofill query={this.state.autofill}/> : null
  }

  componentDidMount() {
    this.mounted = true
    listener.addNegative(ReactDOM.findDOMNode(this), 'click', this.blurAutofill)
  }

  componentWillUnmount() {
    this.mounted = false
    listener.removeNegative('click', this.blurAutofill)
  }

  render() {
    return this.props.fullscreen

    ? <React.Fragment>
        <div className="BarGhost">
          <div className="Bar">
            <this.InputComponents/>
          </div>
        </div>
        <this.Autofill/>
      </React.Fragment>

    : <div className="BarGhost">
        <div className="Bar">
          <this.InputComponents/>
          <this.Autofill/>
        </div>
      </div>
  }

}


export default SearchBar
