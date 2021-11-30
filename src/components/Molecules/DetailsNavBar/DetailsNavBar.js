import React from "react";
import BackButton from "../../Atoms/icon/BackButton/BackButton";
import "./DetailsNavBar.css";

const DetailsNavBar = ({onClickButton}) => {
  const onClicked = () => {
      onClickButton();
  };

  return (
    <div className="header">
      <BackButton BackHandler={onClicked}/>
    </div>
  );
};

export default DetailsNavBar;
