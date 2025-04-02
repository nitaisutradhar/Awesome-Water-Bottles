import React, { use, useState } from 'react'
import './Bottles.css';
import Bottle from '../Bottle/Bottle';

const Bottles = ({bottlesPromise}) => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart)
    }

    const bottles = use(bottlesPromise)
  return (
    <div>
        <h3>Bottles: {bottles.length}</h3>
        <p></p>
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