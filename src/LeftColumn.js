import React from 'react';
import MenuNav from './MenuNav';

const LeftColumn = () => {
  return <div className="left-column" id="left-column">
    <div className="sidebar" id="sidebar">
      <MenuNav />
    </div>
  </div>
}

export default LeftColumn;
