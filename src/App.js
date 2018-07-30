import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const movies = [
  {
    id: 1,
    title: 'Star Wars'
  },
  {
    id: 2, 
    title: 'The Matrix'
  }
];



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {movies.map((movie) => {
          return (
            <div>
              {movie.title}
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
