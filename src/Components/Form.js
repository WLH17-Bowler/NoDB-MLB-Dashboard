import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.roster.name,
            img: this.props.roster.img,
            team: this.props.roster.team,
			position: this.props.roster.position,
			editToggle: false
        }
	}
	handleToggle = () => {
		this.setState({editToggle: !this.state.editToggle})
	}
	editFn = () => {
		const {name, img, team, position} = this.state
		this.props.editPlayer({id: this.props.roster.id, name, img, team, position})
		this.handleToggle()
	}
	handleChange = ({name, value}) => {
		this.setState({[name]: value})
	}
    render() {
		const {name, img, team, position} = this.state
		const {id} = this.props.roster
		console.log(id)
        return (
            <div>
				{this.state.editToggle === true ?
					<div> 
						<input name='name' onChange={(evt) => this.handleChange(evt.target)} value={this.state.name} />
						<input name='img' onChange={(evt) => this.handleChange(evt.target)} value={this.state.img} />
						<input name='team' onChange={(evt) => this.handleChange(evt.target)} value={this.state.team} />
						<input name='position' onChange={(evt) => this.handleChange(evt.target)} value={this.state.position} />
						<button id='save'  onClick={this.handleToggle}> Save </button>
					</div>
					:
					<div className='player-card' onDoubleClick={this.handleToggle} >
						<h2> {name} </h2>
						<img src={img} alt='' />
						<p> {team} </p>
						<p> {position} </p>
						<button id='cut' onClick={() => this.props.deletePlayer(id)} > Cut Player </button>
					</div>
				}
            </div>
        )
    }
}
export default withRouter(Form)