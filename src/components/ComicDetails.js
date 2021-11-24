import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Section from "./UI/Section";
import "./ComicDetails.css";

const ComicDetails = ({ info, onClickBack }) => {
  const clickHandler = () => {
    onClickBack();
  };

  let characterTitle = info.characters.length > 0 ? "Characters": "No characters found";
  let teamTitle = info.team.length > 0 ? "Teams": "No teams found";
  let locationTitle = info.location.length > 0 ? "Location": "No locations found"

  return (
    <Fragment>
      <div className="header">
        <button type="button" className="backbutton" onClick={clickHandler}>
          {" "}
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </button>
      </div>
      <div className="box">
        <div className="details">
          <Section title={characterTitle} content={info.characters} />
          <Section title={teamTitle} content={info.team} />
          <Section title={locationTitle} content={info.location} />
        </div>
        <div className="image">
          <img src={info.image} alt="infoImage" />
        </div>
      </div>
    </Fragment>
  );
};

export default ComicDetails;


