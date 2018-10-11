import React from 'react';

const CartItemComponent = (props) => {
        var items = props.cartItemsList.map(itemThings => {
    return (
        <div className="list-group-item" key={itemThings.product.name}>
            <div className="row">
                <div className="col-md-8">{itemThings.product.name}</div>
                <div className="col-md-2">&cent; {itemThings.product.priceInCents}</div>
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

export default CartItemComponent;