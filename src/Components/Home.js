import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boxData: [],
            saveData: []
        }
    }
    componentDidMount() {
        this.loadBoxscore()
    }
    loadBoxscore = () => {
        axios.get('/api/boxscore/')
        .then(results => {
            console.log(results.data, "res")
            this.setState({boxData: results.data})
        })
    }
    todayScore = () => {
        this.loadBoxscore()
    }
    render() {
        const gameDay = this.state.boxData.map((element, index) => {
            const {day_night, venue, attendance} = element.game
            return <div key={index} > {day_night} {venue.surface} {venue.name} {attendance} </div>
        })  
        const gameStatsHome = this.state.boxData.map((element, index) => {
            const {market, name, runs, hits, errors} = element.game.home
            return <div key={index} id='box' > <h3 id='team-name' > {market} </h3> <h3 id="team-name" > {name} </h3> <div> Runs {runs} </div> <div> Hits {hits} </div>  <div> Errors {errors} </div>   </div>  
        })
        const gameStatsAway = this.state.boxData.map((element, index) => {
            const {market, name, runs, hits, errors} = element.game.away
            console.log(element.game)
            return <div key={index} id='box' > <h3 id='team-name' > {market} </h3> <h3 id="team-name" > {name} </h3> <div> Runs {runs} </div> <div> Hits {hits} </div>  <div> Errors {errors} </div>  </div>  
        })
        return (
            <div className='live-update'>
                {/* <button onClick={this.loadBoxscore}> Game Highlights </button> */}
                {/* <button onClick={this.todayScore}> Today's Scores </button> */}
            <div id='live-update' >

                <div className='gameday'>
                    <div id='venue'>
                    <h1> GameDay </h1>
                        {gameDay}
                    </div>
                </div>
                    
                <div className='home-feed' >
                    <h1> Home </h1>
                    <div className='welcome-box'>
                        {gameStatsHome}
                    </div>
                    
                    <h1> Away </h1>
                    <div className='welcome-box'>
                        {gameStatsAway}
                    </div>

                </div>
            </div>
            </div>
        )
    }
}
export default withRouter(Home)