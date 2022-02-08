import React from 'react';
import "./SectionContent.css";

const SectionContent = ({content, icons}) => {

  console.log(icons);

  return (
    <ul className="itemlist">
      {content.map((item, index) => (
        <li key={index}>
          <div className="flexbox">
            <img className="icon" src={icons[index]} alt="icon" />
            <p>{item.name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SectionContent;
