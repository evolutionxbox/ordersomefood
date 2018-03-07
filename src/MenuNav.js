import React from 'react';
import Sticker from './Sticker';
import data from './data';

const MenuNav = () => {
  return (
    <div className="left-column" id="left-column">
      <Sticker classname="sidebar" id="sidebar" stuckClassname="scrolling-sidebar">
        <ul id="courses">
          {data.courses.map(({id, course}) => {
            const link = `#${id}`;
            return <li key={id}>
              <a href={link}>{course}</a>
            </li>;
          })}
        </ul>
      </Sticker>
    </div>
  )
}

export default MenuNav;
