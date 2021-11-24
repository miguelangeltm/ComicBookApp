import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTh } from "@fortawesome/free-solid-svg-icons";
import "./ViewSwitcher.css";

const viewSwitcher = ({ listView, onClicklist, onClickGrid }) => {
  const listViewHandler = () => {
    onClicklist();
  };
  const gridViewHandler = () => {
    onClickGrid();
  };

  return (
    <div className="buttons">
      <h3>Lastest issues </h3>
      <div>
        <button
          type="button"
          className={listView ? "active" : ""}
          onClick={listViewHandler}
        >
          <FontAwesomeIcon icon={faList} /> List
        </button>
        <button
          type="button"
          className={!listView ? "active" : ""}
          onClick={gridViewHandler}
        >
          <FontAwesomeIcon icon={faTh} /> Grid
        </button>
      </div>
    </div>
  );
};

export default viewSwitcher;
