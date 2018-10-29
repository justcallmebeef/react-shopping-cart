import React from 'react'
import AddItem from './AddItem.js';

const Form = (props) => {
return (
  <form onSubmit={props.onSubmit}>
    <div className="form-group">
      <label htmlFor="exampleFormControlInput1">Quantity</label>
      <input type="number" min="0" onChange={props.handleChangeQuantity} quantity="quantity" className="form-control" id="exampleFormControlInput1"></input>
    </div>
    <div className="form-group">
      <label htmlFor="exampleFormControlSelect1">Products</label>
      <select className="form-control" id="exampleFormControlSelect1" onChange={props.productSelect}>
        <option value="" disabled selected>Select your option</option>
        <AddItem products={props.products} />
      </select>
    </div>
    <button id="button" type="submit" className="btn btn-primary">Submit</button>
  </form>
);

}

export default Form;