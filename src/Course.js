import React from 'react';
import Title from './Title';
import Dish from './Dish';

const Course = ({name, dishes = [], id, addToOrder}) => {
  return <div id={id}>
    <Title level="4" value={name} />
    <ul>
      {dishes.map(({id, name, description, price}) => <Dish key={id} name={name} description={description} price={price} addToOrder={addToOrder} />)}
    </ul>
  </div>
}

export default Course;
