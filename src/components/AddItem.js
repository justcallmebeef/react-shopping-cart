import React from 'react'

const AddItem = (props) => {
    return props.products.map(productList => {
        return (
            <option key={productList.name}>{productList.name}</option>
        )
    })
    
}

export default AddItem;