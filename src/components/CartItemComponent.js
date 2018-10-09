import React, { Component } from 'react';

const CartItemComponent = (props) => {
        var items = props.cartItemsList.map(itemThings => {
    return (
        <div className="list-group-item">
            <div class="row">
                <div class="col-md-8">{itemThings.product.name}</div>
                <div class="col-md-2">{itemThings.product.priceInCents}</div>
                <div class="col-md-2">{itemThings.quantity}</div>
            </div>
      </div>
    )
})
return (
    <div class="collection-item">
        {items}
    </div>
)
}

export default CartItemComponent;