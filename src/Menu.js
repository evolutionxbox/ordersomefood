import React from 'react';
import data from './data';
import Course from './Course';

const Menu = ({addToOrder}) => {
  return <div className="menu" id="menu">
    {data.courses.map(({id, course, dishes}) => <Course key={id} id={id} name={course} dishes={dishes} addToOrder={addToOrder} />)}
  </div>
}

export default Menu;
