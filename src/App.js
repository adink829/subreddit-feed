import React, { Component } from 'react'
import Header from './components/Header'
import Routes from './routes'
import { Router } from 'react-router-dom'
import history from './history'

class App extends Component {
  constructor() {
    super()
    this.state = {
      favorites: []
    }
    this.updateFavorites = this.updateFavorites.bind(this)
  }

  updateFavorites(post) { //if post is not in favorites, add it; if it is in favorites, remove it
    const favorites = this.state.favorites
    if (!favorites.includes(post)) {
      this.setState({
        favorites: [...favorites, post]
      })
    }
    else if (favorites.includes(post)) {
      this.setState({
        favorites: this.state.favorites.filter(e => e.data.id !== post.data.id)
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Header favorites={this.state.favorites} />
          <div id="feed">
            <Routes favorites={this.state.favorites} updateFavorites={this.updateFavorites} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
