import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import VisibilityFilter from './components/VisibilityFilter';
import VisibleBreeds from './containers/VisibleBreeds';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header logo={logo} />
        <VisibilityFilter />
        <VisibleBreeds />
      </div>
    );
  }
}

export default App;
