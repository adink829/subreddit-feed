import React, { Component } from 'react'
import LazyLoad from 'react-lazy-load'

class SinglePost extends Component {
    render() {
        const post = this.props.post.data
        return (
            <LazyLoad offset once>
                <div id="single-post">
                    <div id="thumbnail-container">
                        <img src={post.thumbnail} alt="thumbnail img" height="350px" />
                    </div>
                    <div id="post-title">
                        <h1>{post.title}</h1>
                    </div>
                    <div id="post-subhead">
                        <p>{post.author}</p>
                        {/* <p>{post.created_utc}</p> */}
                        {post.ups ? (<p>{post.ups}</p>) : null}
                    </div>
                </div>
            </LazyLoad>
        )
    }
}

export default SinglePost