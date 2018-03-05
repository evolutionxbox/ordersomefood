import React from 'react';
import Title from './Title';

const SmallerHeader = ({title}) => {
  return <header className="header smaller">
    <Title level="2" value={title} />
    <button type="button" className="basket-button">
      Basket
    </button>
  </header>
}

export default SmallerHeader;
