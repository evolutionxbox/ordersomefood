import React from 'react';
import data from './data';

const MenuNav = () => {
  return <ul id="courses">
    {data.courses.map(({id, course}) => {
      return <li key={id}>
        <a href='href'>{course}</a>
      </li>;
    })}
  </ul>
}

export default MenuNav;
