import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

class PlayerBuilder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            img: '',
            team: '',
            position: '',
            addToggle: false
        }
    }
    handleChange = ({name, value}) => {
        this.setState({[name]: value})
    }
    handleToggle = () => {
        this.setState({addToggle: !this.state.toggleAdd})
    }
    handleAdd = () => {
        const {name, img, team, position} = this.state
        this.props.createPlayer({name, img, team, position})
        // this.handleToggle()
        this.setState({
            name: '',
            img: '',
            team: '',
            position: '',
            addToggle: false
        })
    }
    render() {
        return (
            <div className='player-form' >
                <button id='create' onClick={this.handleToggle} > Create Player </button>
                <div id='form-container' >
                    {
                        this.state.addToggle === true &&
                        <div id='submit-form' > 
                            <p> Name: </p>
                            <input 
                                onChange={(evt) => this.handleChange(evt.target)}
                                value={this.state.name}
                                name='name'
                                placeholder='name'
                            />
                            <p> Image: </p>
                            <input 
                                onChange={(evt) => this.handleChange(evt.target)}
                                value={this.state.img}
                                name='img'
                                placeholder='url'
                            />
                            <p> Team: </p>
                            <input 
                                onChange={(evt) => this.handleChange(evt.target)}
                                value={this.state.team}
                                name='team'
                                placeholder='team'
                            />
                            <p> Position: </p>
                            <input 
                                onChange={(evt) => this.handleChange(evt.target)}
                                value={this.state.position}
                                name='position'
                                placeholder='position'
                            />
                            <button id='create' onClick={this.handleAdd} > Add Player </button>
                        </div> 
                    }
                </div>
            </div>
        )
    }
}
export default withRouter(PlayerBuilder)