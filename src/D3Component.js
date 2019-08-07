import * as d3 from 'd3'

class D3Component {
  containerEl
  props
  svg

  constructor(containerEl, props) {
    this.containerEl = containerEl
    this.props = props
    const { width, height } = props
    this.svg = d3
      .select(containerEl)
      .append('svg')
      .style('background-color', 'lightyellow')
      .attr('width', width)
      .attr('height', height)
    this.updateDatapoints()
  }

  updateDatapoints = () => {
    const {
      svg,
      props: { data, width, height }
    } = this
    svg
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .style('fill', (d, i) => {
        return `rgba(${255 / i}, ${255 * (i / data.length)}, 229, 1)`
      })
      .attr('cx', (d, i) => i * (width / data.length) + 20)
      .attr('cy', d => height - d * 15)
      .attr('r', d => d * 5)
      .on('mouseup', (d, i, nodes) => this.setActiveDatapoint(d, nodes[i]))
  }

  setActiveDatapoint = (d, node) => {
    d3.select(node).style('fill', 'hotpink')
    this.props.onDatapointClick(d)
  }

  resize = (width, height) => {
    const { svg } = this
    svg.attr('width', width).attr('height', height)
    svg.selectAll('circle')
    // .attr('cx', () => Math.random() * width)
    // .attr('cy', () => Math.random() * height)
    // .text(d => d)
  }
}

export default D3Component
