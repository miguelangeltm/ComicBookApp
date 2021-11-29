import React, { Fragment } from "react";
import SectionTitle from "../../Atoms/text/SectionTitle/SectionTitle";
import "./Section.css"

const Section = ({ title, content, icon, L }) => {


  return (
    <Fragment>
      <SectionTitle>{title}</SectionTitle>
      {L && <p>Loading... </p>}
      {!L && <ul className="itemlist">
        {content.map((item, index) => (
          <li key={index}>
            <div className="flexbox">
              <img className="icon" src={icon[index]} alt="icon" />
              <p>{item.name}</p>
            </div>
          </li>
        ))}
      </ul>}
    </Fragment>
  );
};

export default React.memo(Section);
