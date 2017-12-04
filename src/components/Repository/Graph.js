import React from 'react'

import Selector from 'components/Selector'
import { switchy } from 'helpers'

import Chart from './Chart'
import './Graph.css'


class Graph extends React.Component {

  constructor() {
    super(...arguments)
    this.state = {
      source: 'commits',
      byPerson: false,
    }
  }

  setChartSource = i => {
    let source = switchy(i)({
      0: 'commits',
      1: 'pullRequests',
      2: 'issues',
    })
    this.setState({ source })
  }

  setChartByPerson = i => {
    this.setState({ byPerson:Boolean(i) })
  }

  render() {
    let { data } = this.props
    let { source, byPerson } = this.state
    return (
      <div className="Graph">
        <Selector onSelect={this.setChartSource} selection={0} className="Tabs">
          <div className="Tab">Commits</div>
          <div className="Tab">Pull Requests</div>
          <div className="Tab">Issues</div>
        </Selector>
        <Chart data={data} source={source} byPerson={byPerson}/>
        <Selector onSelect={this.setChartByPerson} selection={0} className="Toggler">
          <div className="Button">Over Time</div>
          <div className="Button">By Person</div>
        </Selector>
      </div>
    )
  }

}


export default Graph
