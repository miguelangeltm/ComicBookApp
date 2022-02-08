import React from 'react';
import './Card.css';
import CardImage from '../../Atoms/image/CardImage/CardImage'
import CardHeading from '../../Atoms/text/CardHeading/CardHeading';
import CardDate from '../../Atoms/text/CardDate/CardDate'

const Card = ({viewMode, onClicked, name, issueNumber, date, detailUrl,image, id}) => {
 
  let CardStyle = viewMode ? 'card list' : 'card grid';
 
  const detailHandler = () => {
    onClicked(detailUrl, id);
  };

  return (
    <li className={CardStyle} onClick={detailHandler}>
      <CardImage source={image}/>
      <div>
      <CardHeading name={name} issueNumber={issueNumber}/>
      <CardDate date={date}/>
      </div>
    </li>
  );
};

export default Card;
