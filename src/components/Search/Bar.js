import React from 'react'
import PropTypes from 'prop-types'

import SVG from 'components/SVG'
import searchSVG from 'assets/search.svg'

import Autofill from './Autofill'


class SearchBar extends React.PureComponent {

  static contextTypes = {
    router: PropTypes.any
  }

  onFocus = e => this.setState({ focus:true })
  onBlur = e => this.setState({ focus:true })//TODO
  onChange = e => this.setState({ autofill:e.target.value })
  onKeyDown = e => e.keyCode === 13 && this.state.autofill && this.search()

  search = () => {
    this.context.router.history.push(encodeURIComponent(this.state.autofill))
  }

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
        onBlur={this.onBlur}
      />
      <SVG className="SearchIcon" path={searchSVG} onClick={this.search}/>
    </div>

    this.Autofill = () => this.state.focus ? <Autofill query={this.state.autofill}/> : null
  }

  render() {
    return this.props.fullscreen

    ? <React.Fragment>
        <div className="Bar fullscreen"><this.InputComponents/></div>
        <this.Autofill/>
      </React.Fragment>

    : <div className="Bar">
        <this.InputComponents/>
        <this.Autofill/>
      </div>
  }

}


export default SearchBar
