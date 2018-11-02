import React, { Component } from 'react'
import SinglePost from './SinglePost'
import LazyLoad from 'react-lazy-load'

const Feed = props => {
    const posts = props.posts
    console.log('in feed', posts)
    if (posts.length) {
        return (
            posts.map(post => (
                <ul key={post.url} className=".list-unstyled" >
                    <SinglePost post={post} />
                </ul >
            ))
        )
    }
    else return null
}

export default Feed