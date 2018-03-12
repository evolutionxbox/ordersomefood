import React from 'react';
import Sticker from './Sticker';

const MenuNav = ({courses = []}) => {
  return (
    <div className="left-column" id="left-column">
      <Sticker classname="sidebar" id="sidebar" stuckClassname="scrolling-sidebar">
        <ul id="courses">
          {courses.map(({id, course}) => {
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
