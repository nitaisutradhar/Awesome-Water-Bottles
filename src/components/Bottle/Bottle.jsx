import React from 'react'
import './Bottle.css'

const Bottle = ({bottle, handleAddToCart}) => {
    const {img, name, price, stock } = bottle;
  return (
    <div className='card bottle'>
        <img src={img} />
        <h3>{name}</h3>
        <p>${price}</p>
        <p>{stock} remaining</p>
        <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>

    </div>
  )
}

export default Bottle