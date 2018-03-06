import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';
import data from '../data';

class OrderStore extends EventEmitter {
  constructor() {
    super()
    this.order = [];
  }

  findDish(sauce, id) {
    return sauce.find(element => element.id === id)
  }

  // dish is an object
  addToOrder(id) {
    const foundDishInOrder = this.findDish(this.order, id);
    const dish = Object.assign({}, this.findDish(data.dishes, id));

    if (foundDishInOrder && foundDishInOrder.id) {
      console.log(foundDishInOrder, dish, "mmm, more food");
      foundDishInOrder.quantity++;
      foundDishInOrder.price += dish.price;
    } else {
      dish.quantity = 1;
      this.order.push(dish);
    }

    this.emit("change");
  }

  removeFromOrder(id) {
    const foundDishInOrder = this.findDish(this.order, id);
    const dish = Object.assign({}, this.findDish(data.dishes, id));

    if (foundDishInOrder && foundDishInOrder.quantity > 1) {
      foundDishInOrder.quantity--;
      foundDishInOrder.price -= dish.price;
    } else {
      const index = this.order.indexOf(foundDishInOrder);
      this.order.splice(index, 1);
    }

    this.emit("change");
  }

  getAll() {
    return this.order;
  }

  handleActions(action) {
    console.log(action, "Jackson");
    switch(action.type) {
      case "ADD_TO_ORDER": {
        this.addToOrder(action.data);
        break;
      }
      case "REMOVE_FROM_ORDER": {
        this.removeFromOrder(action.data);
        break;
      }
    }
  }
}

const orderStore = new OrderStore;
dispatcher.register(orderStore.handleActions.bind(orderStore));

export default orderStore;
