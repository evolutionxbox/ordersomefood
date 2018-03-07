import React from 'react';
import Title from './Title';
import Dish from './Dish';
import data from './data';

const Course = ({name, id}) => {
  return <div id={id}>
    <Title level="4" value={name} />
    <ul>
      {data.dishes
        .filter(dish => dish.course === id)
        .map((props) => <Dish key={props.id} {...props} />)}
    </ul>
  </div>
}

export default Course;
