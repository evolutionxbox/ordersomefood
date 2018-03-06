import React from 'react';
import BasketItem from './BasketItem';
import Title from './Title';

const Basket = ({ order, fee = 2 }) => {
  const total = order.reduce((acc, {price}) => {
    return acc + (+price);
  }, fee);

  const style = `display: ${order.length ? "block" : "none"}`
  return(
    <div className="right-column">
      <div className="my-order" id="my-order">
        <h3>My Order</h3>
        <div className="empty-basket-message" id="empty-basket">
          <p>Uh oh, it looks like you have no food in your basket!</p>
        </div>
        <div className="basket" id="basket" style={{display: "block"}}>
          <div className="order-container" id="order-container">
            <ul className="order" id="order">
              {order.map(({name, price, quantity, id}, index) => {
                console.log(quantity);
                return <BasketItem key={index} name={name} price={price} quantity={quantity} id={id} />;
              })}
            </ul>
          </div>
          <div className="under-minimum-spend" id="under-minimum-spend">
            <p className="statement">Minimum spend is</p>
            <p className="statement-price">£15.00</p>
          </div>
          <div className="our-fee" id="our-fee">
            <p className="statement">Our fee</p>
            <p className="statement-price">£2.00</p>
          </div>
          <div className="total" id="total">
            <p className="statement">Total</p>
            <p className="statement-price total-price">
              £{total.toFixed(2)}
            </p>
          </div>
          <button type="button" className="buy-now" id="buy-now" aria-label="Buy Now">Buy now</button>
        </div>
      </div>
    </div>
  )
}

export default Basket;
