import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
    render() {
        const favorites = this.props.favorites
        return (
            <div id="header">
                <NavLink to='/feed' className="nav-link" activeClassName="nav-link-selected">
                    <i className="fab fa-reddit-alien"></i><p> /r/analog</p>
                </NavLink>
                <NavLink to='/favorites' className="nav-link" activeClassName="nav-link-selected" >
                    <i className="fas fa-heart"></i><p> favorites({favorites.length})</p>
                </NavLink>
            </div >
        )
    }
}

export default Header