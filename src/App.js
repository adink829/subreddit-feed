import React, { Component } from 'react'
import Header from './components/Header'
import Feed from './components/Feed'
import Routes from './routes'
import AllPosts from './components/AllPosts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div id="feed">
          <AllPosts />
        </div>
        {/* <Routes /> */}
      </div>
    );
  }
}

export default App;
