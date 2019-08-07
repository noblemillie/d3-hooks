import React, { useState, useEffect, useRef } from 'react'
import D3Component from './D3Component'

let vis

export default function ReactComponent() {
  const [data, setData] = useState(null)
  const [width, setWidth] = useState(600)
  const [height, setHeight] = useState(300)
  const [active, setActive] = useState(null)
  const refElement = useRef(null)

  useEffect(fetchData, [])
  useEffect(handleResizeEvent, [])
  useEffect(initVis, [data])
  useEffect(updateVisOnResize, [width, height])

  function fetchData() {
    Promise.resolve().then(() => setData([8, 6, 12, 4, 7, 10]))
    // Promise.resolve().then(() => setData(['a', 'b', 'c']))
  }

  function handleResizeEvent() {
    let resizeTimer
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(function() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
      }, 300)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }

  function initVis() {
    if (data && data.length) {
      const d3Props = {
        data,
        width,
        height,
        onDatapointClick: setActive
      }
      vis = new D3Component(refElement.current, d3Props)
    }
  }

  function updateVisOnResize() {
    vis && vis.resize(data, width, height)
  }

  return (
    <div className="react-world">
      <div>{active}</div>
      <div ref={refElement} />
    </div>
  )
}
