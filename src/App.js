import React from 'react'
import {HashRouter} from 'react-router-dom'
import routes from './routes'
import './App.css'
import Header from './Components/Header'

const App = (props) => {
  return (
    <HashRouter>
        <div id='app' >
          <Header  />
        {routes}
      </div>
    </HashRouter>
  )
}
export default App