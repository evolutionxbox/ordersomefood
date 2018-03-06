import React from 'react';
import data from './data';

const MenuNav = () => {
  return (
    <div className="left-column" id="left-column">
      <div className="sidebar" id="sidebar">
        <ul id="courses">
          {data.courses.map(({id, course}) => {
            const link = `#${id}`;
            return <li key={id}>
              <a href={link}>{course}</a>
            </li>;
          })}
        </ul>
      </div>
    </div>
  )
}

export default MenuNav;
