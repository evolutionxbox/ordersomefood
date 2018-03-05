import React from 'react';

const Title = ({level, value}) => {
  const Level = `h${level}`;
  return <Level>{value}</Level>
}

export default Title;
