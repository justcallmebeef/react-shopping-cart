import React from 'react'

const AddItem = (props) => {
    return props.products.map(productList => {
        return (
            <option key={productList.name}>{productList.name} &cent;{productList.priceInCents}</option>
        )
    })
    
}

export default AddItem;