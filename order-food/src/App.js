import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

class App extends Component {
  constructor(props){
    super(props);
    var config = {
      apiKey: "AIzaSyD0Mm7LLpwIqInMyPXok-78x8vzGystRGQ",
      authDomain: "order-food-86d94.firebaseapp.com",
      databaseURL: "https://order-food-86d94.firebaseio.com",
      projectId: "order-food-86d94",
      storageBucket: "order-food-86d94.appspot.com",
      messagingSenderId: "618168731240"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
