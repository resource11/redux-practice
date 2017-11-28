import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import VisibilityFilter from './components/VisibilityFilter';
import VisiblePhotos from './containers/VisiblePhotos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header logo={logo} />
        <VisibilityFilter />
        <VisiblePhotos />
      </div>
    );
  }
}

export default App;
