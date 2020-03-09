import React from 'react'
import {HashRouter} from 'react-router-dom'
import routes from './routes'
import logo from './assets/mlb.png'
import './App.css'

import Header from './Components/Header'

const App = (props) => {
  return (
    <HashRouter>
        <div>
          <Header  />
        <div>
          
        </div>
        {routes}
        <footer id='footer' >
          <div id='logo-container' >
            <img alt='' src={logo} className='logo' />
          </div>
        </footer>
      </div>
    </HashRouter>
  )
}
export default App
