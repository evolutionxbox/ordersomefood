import React from 'react';
import OrderStore from './stores/OrderStore';
import MenuNav from './MenuNav';
import Menu from './Menu';
import Basket from './Basket';
import data from './data';

export default class OrderForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: OrderStore.getAll(),
      courses: [],
      dishes: []
    }

    this.data = data.ref()
  }

  componentWillMount() {
    OrderStore.on("change", () => {
      this.setState({
        order: OrderStore.getAll()
      })
    })

    this.data.child('courses').on('value', snapshot => {
      this.setState({
        courses: snapshot.val()
      })
    })

    this.data.child('dishes').on('value', snapshot => {
      this.setState({
        dishes: snapshot.val()
      })
    })
  }

  render () {
    return <div className="order-form">
      <MenuNav courses={this.state.courses} />
      <Menu courses={this.state.courses} dishes={this.state.dishes} />
      <Basket {...this.state} />
    </div>
  }
}
