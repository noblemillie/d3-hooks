import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
// import BarChart from './BarChart'
import ReactComponent from './ReactComponent'

import './App.css'
import './BarChart.css'

import logo from './logo.svg'
import d3Logo from './d3-logo.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} id="react-logo" className="App-logo" alt="react-logo" />
        <img src={d3Logo} id="d3-logo" className="App-logo" alt="d3-logo" />
      </header>
      <h1>sj.Eb hooks</h1>
      <h2>DOM DADA</h2>
      <ReactComponent />
      {/* <BarChart data={[8, 6, 23, 6, 7, 10]} width={450} height={300} /> */}
    </div>
  )
}

export default App
