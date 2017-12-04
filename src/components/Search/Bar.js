import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import SVG from 'components/SVG'
import searchSVG from 'assets/search.svg'
import { listener, random } from 'helpers'

import Autofill from './Autofill'
import './Bar.css'


class Bar extends React.PureComponent {

  static contextTypes = {
    router: PropTypes.any
  }

  onChange = e => this.mounted && this.setState({ autofill:e.target.value })

  onKeyDown = e => {
    if (e.keyCode === 13 && this.state.autofill) this.search()
    if (e.keyCode === 27) this.blurAutofill()
  }

  focusAutofill = e => {
    if (!this.mounted) return
    this.input.focus()
    this.setState({ focus:true })
  }

  blurAutofill = e => {
    if (!this.mounted) return
    this.input.blur()
    this.setState({ focus:false })
  }

  search = e => {
    this.blurAutofill()
    this.context.router.history.push('/'+encodeURIComponent(this.state.autofill))
  }

  constructor() {
    super(...arguments)
    this.state = {autofill: this.props.children || '', focus:false}
    this.searchTerm = random(['opengl', 'react', 'python', 'linux'])

    this.InputComponents = () =>
    <div className="InputComponents">
      <input
        placeholder={`Search "${this.searchTerm}"`}
        value={this.state.autofill}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        onFocus={this.focusAutofill}
      />
      <SVG className="SearchIcon" path={searchSVG} onClick={this.search}/>
    </div>

    this.Autofill = () => this.state.focus ? <Autofill query={this.state.autofill}/> : null
  }

  componentDidMount() {
    this.mounted = true
    this.input = document.querySelector('.Search .Bar input')
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


export default Bar
