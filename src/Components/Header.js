import React from 'react'
import logo from '../assets/mlb.png'
import {Link, withRouter} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <header id='header'>
                <div>
                    <Link to='/' >
                        <img id='logo' src={logo}  alt='' />
                    </Link>
                </div>
                <div id='head-menu'>
                    <Link to='/MVP' >
                        <button className='head-btns' > Player Profile </button>
                    </Link>
                    <Link to='/dashboard' >
                        <button className='head-btns'> Boxscores </button>
                    </Link>
                    <Link to='/sandlot' >
                        <button className='head-btns' > The Sandlot </button>
                    </Link>
                </div>
            </header> 
        </div>
    )
}
export default withRouter(Header)