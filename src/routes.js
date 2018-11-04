import React, { Component } from 'react'
import { withRouter, Redirect, Route, Switch } from 'react-router-dom'

import AllPosts from './components/AllPosts'
import FavoritePosts from './components/Favorites'


class Routes extends Component {
    render() {
        return (
            < Switch >
                <Route path="/feed" render={() => <AllPosts favorites={this.props.favorites} updateFavorites={this.props.updateFavorites} />} />
                <Route path="/favorites" render={() => <FavoritePosts favorites={this.props.favorites} updateFavorites={this.props.updateFavorites} />} />
                <Redirect to="/feed" />
            </Switch >
        )
    }
}

export default withRouter(Routes)