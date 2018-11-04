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
        const post = this.props.post //.data will still be attached when we send back to setState
        const updateFavorites = this.props.updateFavorites
        updateFavorites(post)
    }

    render() {
        const post = this.props.post //still has data prop
        const postData = this.props.post.data
        const favorites = this.props.favorites //still has data prop
        return (
            <LazyLoad once>
                <div>
                    <div className="single-post">
                        <div className="img-container" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOff}>
                            {/* if post is not in favorites, show heart icon on hover, if it is in favorites, show delete icon */}
                            {!favorites.includes(post) ? (
                                <i className="fas fa-heart favorite-icon" id={postData.id} onClick={this.handleFavorite} hidden></i>
                            ) : (
                                    <i className="fas fa-trash-alt favorite-icon" id={postData.id} onClick={this.handleFavorite} hidden></i>
                                )}
                            < img src={postData.url} alt="img" height="350px" />
                        </div>
                        <div className="post-title">
                            <h1>{postData.title}</h1>
                        </div>
                        <div className="post-subhead">
                            <p><i className="fas fa-user"></i> {postData.author}</p>
                            <p><i className="fas fa-bolt"></i> {postData.ups}</p>
                        </div>
                    </div>
                </div>
            </LazyLoad >
        )
    }
}

export default SinglePost