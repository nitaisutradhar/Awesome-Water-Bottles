import React, { use, useEffect, useState } from 'react'
import './Bottles.css';
import Bottle from '../Bottle/Bottle';
import { addToStoredCart, getStoreCart } from '../../utilities/localstorage';

const Bottles = ({bottlesPromise}) => {
    const [cart, setCart] = useState([]);

    const bottles = use(bottlesPromise)
    
    // useEffect
    useEffect(()=>{
        const storedCartIds = getStoreCart();

        const storedCart = []

        for(const id of storedCartIds){
            const cartBottle = bottles.find(bottle=>bottle.id === id);
            if(cartBottle){
                storedCart.push(cartBottle)
            }
        }
        setCart(storedCart)
    },[bottles])

    const handleAddToCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart)
            
        // save the bottle id in the storage
        addToStoredCart(bottle.id)
    }

  return (
    <div>
        <h3>Bottles: {bottles.length}</h3>
        <p>Added to cart: {cart.length}</p>
        <div className='bottles-container'>
            {
                bottles.map(bottle => <Bottle
                key={bottle.id}
                handleAddToCart={handleAddToCart}
                bottle={bottle}></Bottle>)
            }
        </div>
    </div>
  )
}

export default Bottles