import React from 'react'

const AddItem = (props) => {
    return props.products.map(productList => {
        return (
            <option value="" key={productList.name}>{productList.name}</option>
        )
    })
    
}

export default AddItem;