import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, picture, price } = props.product;
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <p className='product-name'>{name}</p>
        </div>
    );
};

export default Product;