import React, {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boxLeagueData: []
        }
    }
    componentDidMount() {
        this.loadTodayscores()
    }
    loadTodayscores = () => {
        axios.get('/api/boxscores').then(results => {
            console.log(results.data, "res")
            this.setState({boxLeagueData: results.data})
        })
    }
    render() {
        const homeDash = this.state.boxLeagueData.map((element, i) => {
            return <div key={i} > {element.league.games.map((league, index) => {
                return <div key={index} > 
                {league.game.home.market} {league.game.home.name} {league.game.home.runs} {league.game.home.hits} {league.game.home.errors} 
                
                 </div>
            })} </div>
        })
        const awayDash = this.state.boxLeagueData.map((element, i) => {
            return <div key={i} > {element.league.games.map((league, index) => {
                return <div key={index} > 
                
                {league.game.away.market} {league.game.away.name} {league.game.away.runs} {league.game.away.hits} {league.game.away.errors}  </div>
            })} </div>
        })
        return (
            <div className='home'>
                {/* <button onClick={this.loadTodayscores} > Load Today's Games </button> */}
                <h1 id='home'> Today's Games </h1>     
                <div className='league-scores' >
                    <div className="box-score">
                        {homeDash}
                    </div>
                    <div className="box-score">
                        {awayDash}
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Home)