import React from 'react';
import ReactDOM from 'react-dom';
import BiggerHeader from './BiggerHeader';
import SmallerHeader from './SmallerHeader';
import Menu from './Menu/index';

const App = () => (
  <div>
    <BiggerHeader title="Order Some Food" />
    <SmallerHeader title="Order Some Food" />
    <Menu />
  </div>
);

export default App;