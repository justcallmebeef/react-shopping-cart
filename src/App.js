import React, { Component } from 'react';
import CartHeader from './components/CartHeader.js';
import CartFooter from './components/CartFooter.js';
import CartItems from './components/CartItems.js';
import Form from './components/Form'

class App extends Component {
  constructor() { 
    super()
    this.state = {
      year: '2016',
      cartItemsList: [], 
      products: [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ],
      total: 0,
      quantity: 0,
    }
  }

  handleChangeQuantity = (event) => {
    this.setState({
      quantity: event.target.value
    })
  }

  productSelect = (event) => {
    this.setState({
      selectedProduct: event.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    let newPrice = this.state.products.filter(item => {
      return item.name === this.state.selectedProduct
    })
    let cartItems = this.state.cartItemsList
    var newItem = {
      id: this.state.cartItemsList.length + 1,
      name: newPrice[0].name,
      priceInCents: newPrice[0].priceInCents,
      quantity: this.state.quantity
    }
    const newCartList = [...cartItems, newItem]
    let total = this.state.total 
      total += (newCartList[newCartList.length-1].priceInCents * newCartList[newCartList.length-1].quantity)
    this.setState({
      cartItemsList: newCartList,
      total: total
    })  
  }

  render() {
    return (
      <div className='app'>
        <CartHeader />
        <CartItems cartItemsList={this.state.cartItemsList}/>
        <h3>Total: ${this.state.total/100}</h3>
        <Form productSelect={this.productSelect} handleChangeQuantity={this.handleChangeQuantity} products={this.state.products} onSubmit={this.onSubmit}/> 
        <CartFooter year={this.state.year} />
      </div>
    )
  }
}

export default App;