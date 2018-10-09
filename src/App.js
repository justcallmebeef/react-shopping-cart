import React, { Component } from 'react';
import CartHeader from './components/CartHeader.js';
import CartFooter from './components/CartFooter.js';
import CartItems from './components/CartItems.js';

class App extends Component {
  constructor() { 
    super()
    this.state = {
      copyright: '&copy',
      year: '2016'
    }
  }
  render() {
    return (
      <div class='app'>
        <CartHeader />
        <CartItems />
        <CartFooter />
      </div>
    )
}
}

export default App;