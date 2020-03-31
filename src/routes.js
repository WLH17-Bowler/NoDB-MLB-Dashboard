import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import MVP from './Components/MVP'
import Sandlot from './Components/Sandlot'
import Form from './Components/Form'
import PlayerBuilder from './Components/PlayerBuilder'

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/mvp' component={MVP} />
        <Route path='/sandlot' component={Sandlot} />
        <Route path='/playerbuilder' component={PlayerBuilder} />
        <Route path='/form/:id' component={Form} />
    </Switch>
)