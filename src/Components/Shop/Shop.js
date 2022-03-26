import React, { useEffect, useState } from 'react';

import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [order, setOrder] = useState([]);


    const handleAddToCart = (product) => {
        console.log(product)

        const newCart = [...order, product];
        setOrder(newCart);
    };


    const handleSelectOne = () => {
        const random = Math.floor(Math.random() * order.length)
        const selectProduct = [order[random]]
        setOrder(selectProduct)
    };
    const handleAgainSelect = () => {
        setOrder([])
    };


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])



    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <div>
                    <h4 className='cart-text'>Picked Items</h4>
                    {
                        order.map(item => <p
                            key={item.id}
                            cart={item}
                        >{item.name}</p>)
                    }

                    <button onClick={handleSelectOne}> Select one </button>

                    <button onClick={handleAgainSelect}>Select Again</button>

                </div>
            </div>

        </div>
    );
};

export default Shop;