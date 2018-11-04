import React, { Component } from 'react'
import SinglePost from './SinglePost'

const Feed = props => {
    const posts = props.posts

    if (posts.length) {
        return (
            posts.map(post => (
                <ul className=".list-unstyled" key={post.id}>
                    <SinglePost post={post} favorites={props.favorites} updateFavorites={props.updateFavorites} />
                </ul>
            ))
        )
    }
    else return null
}

export default Feed