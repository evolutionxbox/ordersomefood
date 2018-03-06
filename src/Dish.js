import React from 'react';
import dispatcher from './dispatcher';

const Dish = ({name, price, description, id}) => {
  const handleClick = () => {
    dispatcher.dispatch({
      type: "ADD_TO_ORDER",
      data: id,
    })
  }

  return <li>
    <span className="dish-name">{name}</span>
    <span className="dish-price">£{(+price).toFixed(2)}</span>
    <blockquote>{description}</blockquote>
    <button type="button" className="menu-button" id={name.replace('\s','')} aria-label={name} onClick={handleClick}><span className="sr-only">Hey, Screen Reader, you so fine.</span></button>
  </li>
}

export default Dish;
