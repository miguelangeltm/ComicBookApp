import React from 'react';
import './CardImage.css';

const CardImage = (props) => {
  return <img className="cover" src={props.source} alt="issue-cover" />;
};

export default CardImage;
