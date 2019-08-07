import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import BarChart from './BarChart'

import './App.css'
import './BarChart.css'

import logo from './logo.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>D3333Z Hooks</h1>
      <h2>DOM DADA</h2>
      <BarChart id="barchart" data={[1, 16, 3, 6, 7, 10]} />
    </div>
  )
}

export default App
