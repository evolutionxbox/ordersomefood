import React from 'react';
import data from './data';
import Course from './Course';

const Menu = () => {
  return <div className="menu" id="menu">
    {data.courses.map(({id, course}) => <Course key={id} id={id} name={course} />)}
  </div>
}

export default Menu;
