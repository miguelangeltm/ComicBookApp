 import React from 'react';
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh } from "@fortawesome/free-solid-svg-icons";
import './GridButton.css';
 
 const ListButton = ({onClicked, listView}) => {

const clickHandler = () => {
    onClicked();
};

    return( 
        <button
        type="button"
        className={!listView ? "active" : ""}
        onClick={clickHandler}
      >
        <FontAwesomeIcon icon={faTh} /> Grid
      </button>) 
 };


 export default ListButton;