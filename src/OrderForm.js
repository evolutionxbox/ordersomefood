import React from 'react';
import LeftColumn from './LeftColumn';
import Menu from './Menu';
import RightColumn from './RightColumn';

export default class OrderForm extends React.Component {
  render () {
    return <div className="order-form">
      <LeftColumn />
      <Menu />
      <RightColumn />
    </div>
  }
}
