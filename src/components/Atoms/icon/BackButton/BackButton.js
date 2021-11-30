import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft  } from "@fortawesome/free-solid-svg-icons";
import './BackButton.css';

const BackButton = ({BackHandler}) => {

    const clickHandler = () => {
        BackHandler();
    };

    return(
        <button type="button" className="backbutton" onClick={clickHandler}>
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </button>
    );
};

export default BackButton;