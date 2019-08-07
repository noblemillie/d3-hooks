import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import * as d3 from 'd3'

const BarChart = ({ id, data, width = 450, height = 300 }) => {
  useEffect(() => {
    const svg = d3
      .select('#' + id)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .style('border', `1px solid red`) // for dev ease
      .style('background-color', 'lightyellow') // for dev ease
      .style('margin-left', 10)

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 70)
      .attr('y', (d, i) => height - 12 * d)
      .attr('width', 55)
      .attr('height', (d, i) => d * 12)
      .attr('fill', 'slateblue')
  }, [data, height, id, width])

  return <div id={id} />
}

export default BarChart
