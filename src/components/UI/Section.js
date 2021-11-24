import React, { Fragment, useEffect, useState} from "react";
import "./Section.css";

const Section = ({ title, content }) => {
    const[images, setImages] = useState([]);
    const[imageIsShown,setImageIsShown] = useState(false);
    const[isLoading,setIsLoading] = useState(true);
    let imagesArray = [];
        
    const fetchImages = async()=>{
        let detailUrls = content.map((a) => a.api_detail_url);
        if(detailUrls.length < 0){
           setImageIsShown(false);
           return;
        };
        for (let i = 0; i < detailUrls.length; i++) {
        const imageDetailQuery = await fetch(
            detailUrls[i] +
            "?api_key=82c0a7bade3e1084572773a68abe4ba7e4d21a76&format=json&filter=name:"+detailUrls.name + "&field_list=image&format=json"
        );
        
        const imageDetails = await imageDetailQuery.json();
        imagesArray.push(imageDetails.results.image.icon_url);

       };
       setImages(imagesArray);
       setImageIsShown(true);
       setIsLoading(false);
    };

    useEffect(()=>{fetchImages()},[]);
 
  return (
    <Fragment>
      
      <h2>{title}</h2>
      
      {isLoading && <p> Loading... </p>}
      {!isLoading && <ul className="container">
        {content.map((item, index) => (
           <li key={index}>
               <div className="flexbox">
               <img className="icon" src={imageIsShown ? images[index] : ''} alt="icon"/>
               <p>{item.name}</p>
               </div>
          </li>
        ))}
      </ul>}
    </Fragment>
  );
};

export default Section;
