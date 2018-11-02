import React, { Component } from 'react'
import { withRouter, Route, Switch } from 'react-router'

import AllPosts from './components/AllPosts'
import Favorites from './components/Favorites'


class Routes extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" component={AllPosts} />
                    <Route path="/favorites" component={Favorites} />
                </Switch>
            </div>
        )
    }
}

export default Routes