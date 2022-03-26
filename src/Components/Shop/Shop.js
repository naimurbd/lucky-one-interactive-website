import React, { useEffect, useState } from 'react';
// import React, { useState } from 'react';
// import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    // const [cart, setCart] = useState([]);
    // console.log(cart);
    const [order, setOrder] = useState([]);


    const handleAddToCart = (product) => {
        console.log(product)
        // const newCart = [...cart, product];
        // setCart(newCart);
        const newCart = [...order, product];
        setOrder(newCart);
    };
    // const handleAddToCart = (product) => {
    //     const newOrder = [...order, product];
    //     setOrder(newOrder);
    // }

    // const [order, setOrder] = useState([])

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
        // .then(data => setOrder(data))
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
                        >name:{item.name}</p>)
                    }
                    {/* {order.map(order => <p
                    > name:{order.name}</p>)
                    } */}
                    <button onClick={handleSelectOne}> Select one </button>
                    <br></br>
                    <button onClick={handleAgainSelect}>Select Again</button>

                </div>
            </div>

        </div>
    );
};

export default Shop;