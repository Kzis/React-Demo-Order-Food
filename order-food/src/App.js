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
      <div className='app'>
        <header>
            <div className='wrapper'>
              <h1>Fun Food Friends</h1>
              
            </div>
        </header>
        <div className='container'>
          <section className='add-item'>
              <form>
                <input type="text" name="username" placeholder="What's your name?" />
                <input type="text" name="currentItem" placeholder="What are you bringing?" />
                <button>Add Item</button>
              </form>
          </section>
          <section className='display-item'>
            <div className='wrapper'>
              <ul>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
