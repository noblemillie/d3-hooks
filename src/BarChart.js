import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import * as d3 from 'd3'

interface IProps {
  data?: number[];
}

// const BarChart = ({ data, width = 450, height = 300 }) => {
const BarChart = (props: IProps) => {
  const d3Container = useRef(null)

  useEffect(() => {
    if (props.data && d3Container.current) {
      // .select('#' + id)
      const svg = d3
        .select(d3Container.current)
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('border', `1px solid red`) // for dev ease
        .style('background-color', 'lightyellow') // for dev ease
        .style('margin-left', 10)

      const update = svg
        .append('g')
        .selectAll('rect')
        .data(props.data)

      update
        .enter()
        .append('rect')
        .attr('x', (d, i) => i * 70)
        .attr('y', (d, i) => height - 12 * d)
        .attr('width', 55)
        .attr('height', (d, i) => d * 12)
        .text(d => d)
        .attr('fill', 'slateblue')

      update
        .attr('x', (d, i) => i * 70)
        .attr('y', (d, i) => height - 12 * d)
        .text(d => d)

      update.exit().remove()
    }
  }, [props.data])

  return (
    <svg
      className="d3-component"
      ref={d3Container}
      // width={450}
      // height={300}
      // id={id}
    />
  )
}

export default BarChart
