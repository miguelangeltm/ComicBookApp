import React from 'react';
import "./CardHeading.css";

const CardHeading = ({name, issueNumber}) => {
  return <h4>{name + " #" + issueNumber}</h4>;
};

export default CardHeading;
