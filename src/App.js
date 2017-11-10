import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import VisibilityFilter from './components/VisibilityFilter';
import VisibleFeed from './containers/VisibleFeed';

class App extends Component {
  render() {
    const userId = 1;
    return (
      <div className="App">
        <Header logo={logo} />
        <VisibilityFilter />
        <VisibleFeed userId={userId} />
      </div>
    );
  }
}

export default App;
