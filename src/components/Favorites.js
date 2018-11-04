import React, { Component } from 'react'
import Feed from './Feed'

const FavoritePosts = props => {
    const favorites = this.props.favorites
    if (favorites.length) {
        return (
            <Feed posts={favorites} favorites={favorites} updateFavorites={this.props.updateFavorites} />
        )
    }
    else {
        return (
            <p>No favorites saved.</p>
        )
    }
}

export default FavoritePosts