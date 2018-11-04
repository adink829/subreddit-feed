import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        const oldSelection = document.getElementsByClassName("nav-link-selected")
        const newSelection = document.getElementById("nav-link-unselected")

        oldSelection.classList.toggle("nav-link-unselected")
        newSelection.classList.toggle("nav-link-selected")
    }

    render() {
        const favorites = this.props.favorites
        return (
            <div id="header">
                <Link to="/" className="nav-link-selected" onClick={this.handleClick}>
                    <i className="fab fa-reddit-alien"></i><p> /r/analog</p>
                </Link>
                <Link to="/favorites" className="nav-link-unselected" onClick={this.handleClick}>
                    <i className="fas fa-heart"></i><p> favorites({favorites.length})</p>
                </Link>
            </div >
        )
    }
}

export default Header