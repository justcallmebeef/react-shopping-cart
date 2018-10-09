import React, {Component} from 'react'

const AddItem = (props) => {
    return props.products.map(productList => {
        return (
            <option value="">{productList.name}</option>
        )
    })
    
}

export default AddItem;