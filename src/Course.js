import React from 'react';
import Title from './Title';
import Dish from './Dish';

const Course = ({name, id, dishes}) => {
  return <div id={id}>
    <Title level="4" value={name} />
    <ul>
      {
        dishes
          .filter(dish => dish.course === id)
          .map((props) => <Dish key={props.id} {...props} />)
      }
    </ul>
  </div>
}

export default Course;
