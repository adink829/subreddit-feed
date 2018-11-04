import React, { Component } from 'react'
import LazyLoad from 'react-lazy-load'

class SinglePost extends Component {
    constructor() {
        super()
        this.handleMouseOver = this.handleMouseOver.bind(this)
        this.handleMouseOff = this.handleMouseOff.bind(this)
        this.handleFavorite = this.handleFavorite.bind(this)

    }

    handleMouseOver() {
        const post = this.props.post.data
        const favoriteButton = document.getElementById(post.id)
        favoriteButton.removeAttribute("hidden")
    }

    handleMouseOff() {
        const post = this.props.post.data
        const favoriteButton = document.getElementById(post.id)
        favoriteButton.setAttribute("hidden", "true")
    }

    handleFavorite() {
        const post = this.props.post.data
        const updateFavorites = this.props.updateFavorites
        updateFavorites(post.id)
        console.log(this.props.favorites)
    }

    render() {
        const post = this.props.post.data
        const postId = post.id
        const favorites = this.props.favorites
        return (
            <LazyLoad once>
                <div>
                    <div className="single-post">
                        <div className="img-container" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOff}>
                            <i className="fas fa-heart favorite-icon" id={post.id} onClick={this.handleFavorite} hidden></i>
                            < img src={post.url} alt="img" height="350px" />
                        </div>
                        <div className="post-title">
                            <h1>{post.title}</h1>
                        </div>
                        <div className="post-subhead">
                            <p><i className="fas fa-user"></i> {post.author}</p>
                            <p><i className="fas fa-bolt"></i> {post.ups}</p>
                        </div>
                    </div>
                </div>
            </LazyLoad >
        )
    }
}

export default SinglePost