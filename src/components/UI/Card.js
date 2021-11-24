import React from 'react';
import './Card.css';

const Movie = (props) => {
  let CardStyle = props.listView ? 'card list' : 'card';
  let formattedDate = new Date(props.date);
  const dateString = formattedDate.toLocaleDateString('en-US',{
    year: "numeric",
    month: "long",
    day: "numeric"
  })

  const detailHandler = () => {
    props.onClicked(props.detailUrl);
  };

  return (
    <li className={CardStyle} onClick={detailHandler}>
      <img className="cover" src={props.image} alt="cover" />
      <div className="caption">
      <h4>{props.name + " #" + props.issueNumber}</h4>
      <p>{dateString}</p>
      </div>
    </li>
  );
};

export default Movie;