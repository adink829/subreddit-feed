import React from 'react'
import SinglePost from './SinglePost'

const Feed = props => {
    const posts = props.posts
    return (
        < ul className="feed-list" >
            {posts.map(post => (
                <SinglePost key={post.id} post={post} favorites={props.favorites} updateFavorites={props.updateFavorites} />
            ))}
        </ul >

    )
}

export default Feed