import React from 'react';
import './CardDate.css';

const CardDate = ({date}) => {

    let formattedDate = new Date(date);
    const dateString = formattedDate.toLocaleDateString('en-US',{
      year: "numeric",
      month: "long",
      day: "numeric"
    })
  
    return <p>{dateString}</p>
};


export default CardDate;
