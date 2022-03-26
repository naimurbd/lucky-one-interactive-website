// import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const { name } = props.cart;
    // const [order, setOrder] = useState([])

    // const handleSelectOne = () => {
    //     const random = Math.floor(Math.random() * order.length)
    //     const selectProduct = [order[random]]
    //     setOrder(selectProduct)
    // };
    // const handleAgainSelect = () => {
    //     setOrder([])
    // };

    return (

        <div className='cart'>

            <h3>{name}</h3>
            {/* <p>{cart.length}</p> */}

            {/* <button onClick={handleSelectOne}>Select 1 please</button>
            <button onClick={handleAgainSelect}>Select Again</button> */}
        </div>

    );
};

export default Cart;