import React from 'react'
import Feed from './Feed'

const FavoritePosts = props => {
    const favorites = props.favorites
    if (favorites.length) {
        return (
            <Feed posts={favorites} favorites={favorites} updateFavorites={props.updateFavorites} />
        )
    }
    else {
        return (
            <div id="no-favorites-container">
                <p>No favorites saved.</p>
            </div>
        )
    }
}

export default FavoritePosts