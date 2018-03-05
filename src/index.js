import React from 'react';
import ReactDOM from 'react-dom';
import BiggerHeader from './BiggerHeader';
import SmallerHeader from './SmallerHeader';
import OrderForm from './OrderForm';
import Message from './Message';

ReactDOM.render(
  <div>
    <BiggerHeader title="Order Some Food" />
    <SmallerHeader title="Order Some Food" />
    <OrderForm />
    <Message lead="Modi atque enim illum." message="Iusto illum harum sint non, voluptatem totam suscipit eum magnam!" />
  </div>,
  document.querySelector('#root')
);
