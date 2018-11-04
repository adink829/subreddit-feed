import React, { Component } from 'react'
import Header from './components/Header'
import Feed from './components/Feed'
import Routes from './routes'
import AllPosts from './components/AllPosts'

class App extends Component {
  constructor() {
    super()
    this.state = {
      favorites: []
    }
    this.updateFavorites = this.updateFavorites.bind(this)
  }

  updateFavorites(id) {
    const favorites = this.state.favorites
    const favoriteButton = document.getElementById(id)

    if (!favorites.includes(id)) {
      this.setState({
        favorites: [...favorites, id]
      })
      favoriteButton.className = "fas fa-trash-alt favorite-icon"
    }

    else if (favorites.includes(id)) {
      this.setState({
        favorites: this.state.favorites.filter(e => e !== id)
      })
      favoriteButton.className = "fas fa-heart favorite-icon"
    }
  }

  render() {
    return (
      <div className="App">
        <Header favorites={this.state.favorites} />
        <div id="feed">
          {/* <AllPosts favorites={this.state.favorites} updateFavorites={this.updateFavorites} /> */}
          <Routes favorites={this.state.favorites} updateFavorites={this.updateFavorites} />
        </div>
      </div>
    );
  }
}

export default App;
