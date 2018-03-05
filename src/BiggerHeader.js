import React from 'react';
import Title from './Title';

const BiggerHeader = ({title}) => {
  return <header className="header bigger">
    <Title level="1" value={title} />
  </header>
}

export default BiggerHeader;
