import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Navigation from './components/nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <span className="logo"></span>
            <span className="name">
                Silicon Valley
                Academy
            </span>
            <Navigation />
            <div className="title">To Inspire the Love of Learning</div>
        </header>
        <div className="text-wrapper">
            <div className="goal">What’s Our Goal</div>
        </div>

      </div>
    );
  }
}

export default App;
