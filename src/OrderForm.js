import React from 'react';
import OrderStore from './stores/OrderStore';
import MenuNav from './MenuNav';
import Menu from './Menu';
import Basket from './Basket';

export default class OrderForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: OrderStore.getAll()
    }
  }

  componentWillMount() {
    OrderStore.on("change", () => {
      this.setState({
        order: OrderStore.getAll()
      })
    })
  }

  render () {
    return <div className="order-form">
      <MenuNav />
      <Menu />
      <Basket {...this.state} />
    </div>
  }
}
