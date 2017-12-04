import React from 'react'
import {XYPlot, AreaSeries, VerticalBarSeries, XAxis, YAxis} from 'react-vis'
import 'react-vis/dist/style.css'

import Placeholder from 'components/Placeholder'
import { chart } from 'helpers'

import './Chart.css'


const Chart = ({ data, source='commits', byPerson=false}) => {

  if (data.loading) return (
    <Placeholder className="Chart">
      <XYPlot height={350} width={950}/>
    </Placeholder>
  )

  if (byPerson) {

    data = data.repository[source].nodes.filter(d => d.author)
    data = chart.similar(data, d => d.author.username)
    data = data.map(d => ({ x:d.original.author.username, y:d.count }))
    data = data.sort((a, b) => b.y - a.y)

    let ymin = 0
    let ymax = data[chart.max(data.map(d => d.y))].y

    return (
      <div className="Chart">
        <XYPlot
          margin={{bottom: 100}}
          xType="ordinal"
          yDomain={[ymin,ymax]}
          height={350}
          width={950}
          >
          <XAxis
            tickLabelAngle={-90}
            tickFormat={d => <a target="_blank" href={'https://github.com/'+d}>{d}</a>}
          />
          <YAxis/>
          <VerticalBarSeries
            animation
            color="#58CB86"
            data={data}
          />
        </XYPlot>
      </div>
    )
    /* TODO Images as labels!
    <GradientDefs>
      <pattern id="img1" patternUnits="userSpaceOnUse" width="100" height="100">
        <image xlinkHref="https://..." x="0" y="0" width="100" height="100" />
      </pattern>
    </GradientDefs> */
  }

  else {

    data = data.repository[source].nodes.map(({ time }) => Date.parse(time))
    if (source === 'commits') data.reverse()

    let xmin  = data[0]
    let xmax  = data[data.length-1]
    let xdata = chart.range(xmin, xmax, 10)
    let ydata = chart.approximate(xdata, data)
    let ymin  = 0
    let ymax  = ydata[chart.max(ydata)]

    return (
      <div className="Chart">
        <XYPlot
          height={350}
          width={950}
          xType="time"
          yDomain={[ymin, ymax]}>
          <XAxis
            tickFormat={d => chart.formatDate(d)}
            tickTotal={10}
          />
          <YAxis/>
          <AreaSeries
            animation
            stroke="#58CB86"
            fill="rgba(88, 203, 134, 0.8)"
            data={chart.zip(xdata, ydata, 'x', 'y')}
            curve="curveNatural"
          />
        </XYPlot>
      </div>
    )

  }

}


export default Chart
