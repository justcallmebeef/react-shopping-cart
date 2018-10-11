import React, { Component } from 'react';
import CartHeader from './components/CartHeader.js';
import CartFooter from './components/CartFooter.js';
import CartItems from './components/CartItems.js';
import AddItem from './components/AddItem.js'

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
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    let cartItems = this.state.cartItemsList
    var newItem = {
      id: this.state.cartItemsList.length + 1,
      product: {name: this.refs.productItem.value.split(' $')[0],
      priceInCents: Number(this.refs.productItem.value.split(' $')[1])*100,},
      quantity: this.refs.quantity.value
    }
    const newCartList = [...cartItems, newItem]
    let total = this.state.total 
      total += (newCartList[newCartList.length-1].product.priceInCents * newCartList[newCartList.length-1].quantity)
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
        <h1>Total: ${this.state.total/100}</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Quantity</label>
            <input type="number" ref="quantity" min="0" quantity="quantity" className="form-control" id="exampleFormControlInput1"></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Products</label>
            <select ref="productItem" className="form-control" id="exampleFormControlSelect1" onChange={this.productSelect}>
              <option value="" disabled selected >Select your option</option>
              <AddItem products={this.state.products} />
            </select>
          </div>
          <button id="button" type="submit" className="btn btn-primary">Submit</button>
        </form>
        <CartFooter year={this.state.year} />
      </div>
    )
  }
}

export default App;