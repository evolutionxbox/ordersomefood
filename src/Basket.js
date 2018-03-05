import React from 'react';

const Basket = () => {
  return <div className="my-order" id="my-order">
    <h3>My Order</h3>
    <div className="empty-basket-message" id="empty-basket">
      <p>Uh oh, it looks like you have no food in your basket!</p>
    </div>
    <div className="basket" id="basket">
      <div className="order-container" id="order-container">
        <ul className="order" id="order">
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
        </p>
      </div>
      <button type="button" className="buy-now" id="buy-now" aria-label="Buy Now">Buy now</button>
    </div>
  </div>
}

export default Basket;
