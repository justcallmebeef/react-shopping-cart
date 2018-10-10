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
      cartItemsList: [
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
      ], 
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
      ]
    }
  }

  productSelect() {
    console.log('there is change in the air')
    console.log(this.state.products.name)
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.refs.quantity.value)
    this.setState({
      products: this.state.cartItemsList.concat('something work please')
    })
  }

  render() {
    return (
      <div className='app'>
        <CartHeader />
        <CartItems cartItemsList={this.state.cartItemsList}/>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Quantity</label>
            <input type="number" ref="quantity" min="0" quantity="quantity" className="form-control" id="exampleFormControlInput1"></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Products</label>
            <select className="form-control" id="exampleFormControlSelect1" onChange={this.productSelect}>
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