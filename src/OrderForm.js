import React from 'react';
import MenuNav from './MenuNav';
import Menu from './Menu';
import Basket from './Basket';

export default class OrderForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: []
    }

    this.addToOrder = this.addToOrder.bind(this);
    // this.removeToOrder = this.removeToOrder.bind(this);
  }

  addToOrder(dish, event) {
    this.setState({
      order: [...this.state.order, dish]
    })
  }

  removeFromOrder() {

  }

  render () {
    return <div className="order-form">
      <MenuNav />
      <Menu addToOrder={this.addToOrder} />
      <Basket {...this.state} />
    </div>
  }
}
