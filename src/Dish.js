import React from 'react';

const Dish = ({name, price = 0, description}) => {
  return <li>
    <span className="dish-name">{name}</span>
    <span className="dish-price">£{(+price).toFixed(2)}</span>
    <blockquote>{description}</blockquote>
    <button type="button" className="menu-button" id={name.replace('\s','')} aria-label={name}></button>
  </li>
}

export default Dish;
