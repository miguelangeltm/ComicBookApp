import React from "react";
import './DetailImgBox.css';

const DetailImgBox = ({ source, Loading }) => {
  return (
    <div className="image">
       {Loading && <img src={'https://jmperezperez.com/amp-dist/sample/sample-placeholder.png'} alt="infoImage" />}
      {!Loading && <img src={source} alt="infoImage" />}
    </div>
  );
};

export default DetailImgBox;
