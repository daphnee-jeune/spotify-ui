import React from 'react'
import './App.scss'
import Nav from './components/Nav'
import Main from './components/Main'

const App = () => {
  return (
    <div className="outerWrap">

      <div className="App">
        <Nav />
        <Main />
      </div>

      <div className="musicControls">
        <i className="ri-shuffle-line"></i> 
        <i className="ri-skip-back-fill ri-lg"></i>
        <i className="ri-play-circle-line ri-3x"></i> 
        <i className="ri-skip-forward-fill ri-lg"></i>
        <i className="ri-repeat-2-line ri-lg"></i>
      </div>

    </div>
  )
}
export default App