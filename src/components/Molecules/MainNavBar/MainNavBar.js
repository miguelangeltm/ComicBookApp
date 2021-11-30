import React from "react";
import "./MainNavBar.css";
import ListButton from "../../Atoms/icon/ListButton/ListButton";
import GridButton from "../../Atoms/icon/GridButton/GridButton";

const MainNavBar = ({ listView, onClicklist, onClickGrid }) => {
  const listViewHandler = () => {
    onClicklist();
  };
  const gridViewHandler = () => {
    onClickGrid();
  };

  return (
    
    <div className="navbar">
      <h3>Lastest issues </h3>
      <div>
        <ListButton onClicked={listViewHandler} listView={listView} />
        <GridButton onClicked={gridViewHandler} listView={listView} />
      </div>
    </div>
  );
};

export default MainNavBar;
