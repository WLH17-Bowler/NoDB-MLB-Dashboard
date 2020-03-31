import React, {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

class MVP extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mvp: [],
            favoritePlayer: []
        }
    }
    getPlayer = () => {
        axios.get('/api/player/:id').then(results => {
            // 2142e1ba-3b40-445c-b8bb-f1f8b1054220
            console.log(results.data, 'res')
            this.setState({mvp: results.data})
        }).catch(err => console.log(err))
    }
    favPlayer = (event) => {
        this.setState({favoritePlayer: event.target.value})
    }
    favSubmit = (event) => {
        this.getPlayer()
        this.setState({favoritePlayer: this.state.value})
        console.log(this.state.favoritePlayer)
    }

    render() {
        let myPlayer = this.state.mvp.map((element, index) => {
            console.log(element)
            const {id, status, position, primary_position, jersey_number, full_name, height, weight, throw_hand, bat_hand, college, high_school, birthdate, birthstate, birthcountry, birthcity, pro_debut, draft, team} = element.player
            return <div key={index} > 
            <h2> {full_name} </h2> <div> Status: {status} </div> <div> Franchise: {team.market} {team.name} </div> <div> Position: {position} </div> <div> Primary: {primary_position} </div> <div> Number: {jersey_number}  </div> <div> Height: {height} </div> <div> Weight:  {weight} </div>  <div> Throw Hand: {throw_hand} </div> <div> Bat Hand: {bat_hand} </div> <div> College: {college} </div>  <div> High School: {high_school}</div> <div> Birthdate: {birthdate} </div> <div> State: {birthstate} </div> <div> City: {birthcity} </div> <div> Country: {birthcountry} </div> <div> Pro Debut: {pro_debut} </div> Draft Year: {draft.year} Round: {draft.round} Pick: {draft.pick}  </div>
        })
        return (
            <div className='mvp'>
                <form onSubmit={this.favSubmit}> 
                    <label>
                    <h3> Player Profile </h3>
                    <select id='mvp-btn' onChange={this.favPlayer} value={this.state.favoritePlayer} >
                        <option value='Bryce Harper' > Bryce Harper </option>
                        <option value='Mike Trout' > Mike Trout </option>
                        <option value='Mookie Betts' > Mookie Betts </option>
                    </select>
                    </label>
                    <input id='mvp-btn' type='submit' value='Submit' />
                </form>
                
                <div id='mvp'> {myPlayer} </div>
            </div>
        )
    }
}
export default withRouter(MVP)