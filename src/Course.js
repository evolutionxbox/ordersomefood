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
        .map(({id, name, description, price}) => <Dish key={id} name={name} description={description} price={price} id={id} />)}
    </ul>
  </div>
}

export default Course;
