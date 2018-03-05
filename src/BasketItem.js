import React from 'react';

const BasketItem = ({quantity = 1, name, price}) => {
  return (
    <li className="ordered-item">
      <span className="ordered-quantity">{quantity}x</span>
      <span className="ordered-name">{name}</span>
      <span className="ordered-price">£{(+price).toFixed(2)}</span>
      <span id="remove-3" className="remove-item" style={{display: "block", opacity: 1}}>
        <span></span>
        <span></span>
        <button type="button" className="remove-item-button"></button>
      </span>
    </li>
  )
}

export default BasketItem;
