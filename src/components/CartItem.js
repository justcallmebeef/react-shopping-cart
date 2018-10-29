import React from 'react';

const CartItem = (props) => {
    var items = props.cartItemsList.map(itemThings => {
    return (
        <div className="list-group-item" key={itemThings.id}>
            <div className="row">
                <div className="col-md-8">{itemThings.name}</div>
                <div className="col-md-2">$ {(itemThings.priceInCents)/100}</div>
                <div className="col-md-2">{itemThings.quantity}</div>
            </div>
      </div>
    )
})

    return (
        <div className="collection-item">
            {items}
        </div>
    )
}

export default CartItem;