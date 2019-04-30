import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import contacts from './contacts.json'
import Contacts from './Component/Contacts'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>IronContacts</h1>
        </header>
      <section>
        <Contacts />  
      </section>
      </div>

    );
  }
}

export default App;
