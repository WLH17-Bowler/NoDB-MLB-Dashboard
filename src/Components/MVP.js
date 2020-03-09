import React, {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

class MVP extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mvp: [],
            custom: '',
            favInput: '',
            // favoritePlayer: '',
            editToggle: false
        }
    }
    componentDidMount() {
        // this.getPlayer()
    }
    getPlayer = () => {
        axios.get('/api/players/:id').then(results => {
            // 2142e1ba-3b40-445c-b8bb-f1f8b1054220
            console.log(results.data, 'res')
            this.setState({mvp: results.data})
        }).catch(err => console.log(err))
    }
    handleEditToggle = () => {
        this.setState({editToggle: !this.state.editToggle})
    }
    favPlayer = (event) => {
        this.setState({
            favoritePlayer: event.target.value
        })
    }
    favSubmit = (event) => {
        this.getPlayer()
        this.setState({favoritePlayer: this.state.value})
        console.log(this.state.favoritePlayer)
        // alert(`Watching player: ${this.state.value}`)
        // event.preventDefault()
    }
    customName = (val) => {
        this.setState({favInput: val})
    }
    handleEdit = (favePlayer) => {
        axios.put('/api/favplayer', {favePlayer})
        .then(results => {
            this.setState({
                custom: results.data,
                editToggle: false

            })

        }).catch(err => console.log(err))
    }
    deleteAllStar = () => {
        axios.delete('/api/delete')
        .then(results => {
            this.setState({custom: results.data})
        }).catch(err => console.log(err))
    }
    render() {
        let myPlayer = this.state.mvp.map((element, index) => {
            console.log(element)
            const {id, status, position, primary_position, first_name, last_name, preferred_name, jersey_number, full_name, height, weight, throw_hand, bat_hand, college, high_schoool, birthdate, birthstate, birthcountry, birthcity, pro_debut, updated, reference, draft, team, seasons} = element.player
            return <div key={index} > 
            <div> Status: {status} </div> <div> Position: {position} </div> <div> Primary: {primary_position} </div> <div> {first_name} </div> <div> {last_name} </div> <div> Number: {jersey_number}  </div> <div> Full Name {full_name} </div>   <div> Height: {height} </div> <div> Weight:  {weight} </div>  <div> Throw Hand: {throw_hand} </div> <div> Bat Hand: {bat_hand} </div> <div> College: {college} </div>  <div> High School: {high_schoool}</div> <div> Birthdate: {birthdate} </div> <div> State: {birthstate} </div> <div> City: {birthcity} </div> <div> Country: {birthcountry} </div> <div> Pro Debut: {pro_debut} </div>   </div>
        })
        let {custom} = this.state
        return (
            <div className='mvp'>
                <form onSubmit={this.favSubmit}> 
                    <label>
                    <h3> Player Profile </h3>
                    <select onChange={this.favPlayer} value={this.state.favoritePlayer} >
                        <option value='Bryce Harper' > Bryce Harper </option>
                        <option value='Mike Trout' > Mike Trout </option>
                        <option value='Mookie Betts' > Mookie Betts </option>
                    </select>
                    </label>
                    <input type='submit' value='Submit' />
                </form>
                <div>
                    <h3> My Player </h3>
                    
                    {
                        this.state.editToggle && 
                            <div> 
                        <input onChange={(e) => this.customName(e.target.value)}  placeholder='custom name' />
                        <button onClick={() => this.handleEdit(this.state.favInput)} > Save </button>
                        </div>
                    }
                    <div> Name: {custom} </div>
                        <button onClick={() => this.handleEditToggle()} > Edit </button>   
                        <button onClick={() => this.deleteAllStar()} > Delete </button>   

                </div>
                <div id='mvp'>
                {myPlayer}
                </div>
                
            </div>
        )
    }
}
export default withRouter(MVP)