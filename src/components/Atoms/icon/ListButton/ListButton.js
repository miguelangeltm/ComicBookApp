import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import './ListButton.css';
 
 const ListButton = ({onClicked, listView}) => {

const clickHandler = () => {
    onClicked();
};

    return( 
        <button
        type="button"
        className={listView ? "active" : ""}
        onClick={clickHandler}
      >
        <FontAwesomeIcon icon={faList} /> List
      </button>) 
 };


 export default ListButton;