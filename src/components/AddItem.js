import React from 'react'

const AddItem = (props) => {
    return props.products.map(productList => {
        return (
            <option key={productList.name}>{productList.name} ${((productList.priceInCents/100).toFixed(2))}</option>
        )
    })
    
}

export default AddItem;