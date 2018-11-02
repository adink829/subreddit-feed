import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div id="header">
                <Link className="nav-link" to="/">
                    /r/analog
                </Link>
                <Link className="nav-link" to="/favorites">
                    favorites
                </Link>
            </div>
        )
    }
}

export default Header