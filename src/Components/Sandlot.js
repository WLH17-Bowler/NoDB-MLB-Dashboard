import React, {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

import Form from './Form'
import PlayerBuilder from './PlayerBuilder'

class Sandlot extends Component {
    constructor(props) {
        super(props)
        this.state = {
            roster: []
        }
    }
    componentDidMount() {
        axios.get('/api/roster').then(results => {
            console.log(results.data)
            this.setState({roster: results.data})
        }).catch(err => console.log(err))
    }
    createPlayer = (body) => {
        axios.post('/api/roster', body).then(results => {
            this.setState({roster: results.data})
        }).catch(err => console.log(err))
    }
    editPlayer = (body) => {
        axios.put(`/api/roster/${body.id}`, body).then(res => {
            this.setState({roster: res.data})
        }).catch(err => console.log(err))
    }
    deletePlayer = (id) => {
        axios.delete(`/api/roster/${id}`).then(res => {
            this.setState({roster: res.data})
        }).catch(err => console.log(err))
    }
    render() {
        let roster = this.state.roster.map((element, index) => {
            return <Form
                        key={index} 
                        editPlayer={this.editPlayer} 
                        deletePlayer={this.deletePlayer}
                        roster={element} 
                    />})
        return (
            <div id='roster'>
                <PlayerBuilder
                    roster={this.state.roster}
                    createPlayer={this.createPlayer}
                    deletePlayer={this.deletePlayer}
                />
                {roster}
            </div>
        )
    }
}
export default withRouter(Sandlot)