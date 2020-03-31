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
        // this.loadTodayscores()
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
                return <div key={index} className='stats' >
                            <h3> {league.game.home.market} {league.game.home.name} </h3>
                            <h5> Runs: {league.game.home.runs} </h5>
                            <h5> Hits: {league.game.home.hits} </h5>
                            <h5> Errors: {league.game.home.errors} </h5>                
                        </div>
            })} </div>
        })
        const awayDash = this.state.boxLeagueData.map((element, i) => {
            return <div key={i} > {element.league.games.map((league, index) => {
                return <div key={index} className='stats' >
                            <h3> {league.game.away.market} {league.game.away.name} </h3>
                            <h5> Runs: {league.game.away.runs} </h5>
                            <h5> Hits: {league.game.away.hits} </h5>
                            <h5> Errors: {league.game.away.errors} </h5>
                        </div>
            })} </div>
        })
        return (
            <div className='main-dashboard' >
                <div id='menu'>
                    <h1 id='home'> Today's Games </h1>
                    <button id='trigger-btn' onClick={this.loadTodayscores} > League Box Scores </button>
                </div>
                <div id='score-box' >
                    <div className='team' >
                        <h3> Home </h3>
                        <div className="box-score"> {homeDash} </div>
                    </div>
                    <div className='team' >
                        <h3> Away </h3>
                        <div className="box-score"> {awayDash} </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Home)