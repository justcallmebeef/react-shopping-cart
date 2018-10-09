import React, { Component } from 'react';
import CartItemComponent from './CartItemComponent'

const CartItems = (props) => {

    return (
        <div className="container">
            <h1>Cart Items</h1>
            <div className="list-group">
                <div className="list-group-item">
                    <div className="row">
                        <div className="col-md-8"><b>Product</b></div>
                        <div className="col-md-2"><b>Price</b></div>
                        <div className="col-md-2"><b>Quantity</b></div>
                    </div>
                </div>
                <CartItemComponent cartItemsList={props.cartItemsList} />
            </div>
        </div>
    )
}

export default CartItems;
