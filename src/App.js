import React, { Component } from 'react';
import Products from './Products.js';

import './App.css';

class App extends Component {
  render() {
    return (
          <div className="App">
            <header className="App-header"><h1>My React App</h1></header>
              <section>
                <Products />
                </section>
              </div>
    );
  }
}

export default App;
