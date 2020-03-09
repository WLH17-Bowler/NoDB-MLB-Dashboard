import React from 'react'
import logo from '../assets/mlb.png'
import {Link} from 'react-router-dom'

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
                        <nav className='head-btns' > MVP </nav>
                    </Link>
                    <Link to='/dashboard' >
                        <nav className='head-btns'> Data Dashboard </nav>
                    </Link>
                </div>
            </header> 
        </div>
    )
}
export default Header