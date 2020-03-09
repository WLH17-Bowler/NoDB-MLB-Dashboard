import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import MVP from './Components/MVP'

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/MVP' component={MVP} />
    </Switch>
)


// import React from 'react'
// import {Switch, Route} from "react-router-dom"
// import Home from "./Components/Dashboard"
// import MVP from './Components/MVP'
// import Dashboard from './Components/Home'

// export default (
//     <Switch>
//         <Route exact path='/' component={Home} />
//         <Route path='/dashboard' component={Dashboard} />
//         <Route path='/mvp' component= {MVP} />
//     </Switch>
// )
