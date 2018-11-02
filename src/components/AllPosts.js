import React, { Component } from 'react'
import Feed from './Feed'

class AllPosts extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        try {
            const fetchFeed = await fetch('https://www.reddit.com/r/analog/top/.json')
            const res = await fetchFeed.json()
            const posts = res.data.children
            this.setState({
                posts: posts
            })
        } catch (err) {
            console.error(err.message)
        }
    }

    render() {
        return (
            <Feed posts={this.state.posts} />
        )
    }
}

export default AllPosts