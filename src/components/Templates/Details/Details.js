import React, { Fragment, useState, useEffect, useCallback} from "react";
import { useHistory } from "react-router-dom";
import Header from "../../Atoms/text/Header/Header";
import DetailImgBox from "../../Atoms/image/DetailImgBox/DetailImgBox";
import DetailsNavBar from "../../Molecules/DetailsNavBar/DetailsNavBar";
import DetailsPrimaryPanel from "../../Organisms/DetailsPrimaryPanel/DetailsPrimaryPanel";
import "./Details.css";

const Details = () => {
    const [loading, SetLoading] = useState(true);
    const [comicsInfo, setComicsInfo] = useState({
    id: "",
    image: [],
    characters:[] ,
    team: [],
    location: [],
  });
  const history = useHistory();
  const detailUrl = history.location.state.Url;

  const fetchAll = async (urls) => {
    SetLoading(true);
    let results =[];
    let apikey ="?api_key=82c0a7bade3e1084572773a68abe4ba7e4d21a76&format=json"
    const res = await Promise.all(urls.map(u => fetch(u + apikey)));
    const jsons = await Promise.all(res.map(r => r.json()))
    results = jsons.map((a) => a.results.image.icon_url);
    return results;
  }


  const fetchDetails = useCallback( async () => {
      const comicDetailQuery = await fetch(
      detailUrl +
        "?api_key=82c0a7bade3e1084572773a68abe4ba7e4d21a76&format=json"
    );

    const comicDetails = await comicDetailQuery.json();
    
       let detailUrlsCharacter = comicDetails.results.character_credits.map((a) => a.api_detail_url);
       let detailUrlsTeam = comicDetails.results.team_credits.map((a) => a.api_detail_url);
       let detailUrlsLocation = comicDetails.results.location_credits.map((a) => a.api_detail_url);
       const character_icons = await fetchAll(detailUrlsCharacter);
       const team_icons = await fetchAll(detailUrlsTeam);
       const location_icons = await fetchAll(detailUrlsLocation);

    setComicsInfo({
      id: comicDetails.results.id,
      image: comicDetails.results.image.original_url,
      characters: comicDetails.results.character_credits,
      team: comicDetails.results.team_credits,
      location: comicDetails.results.location_credits,
      character_icons: character_icons,
      team_icons: team_icons,
      location_icons: location_icons
    });
    SetLoading(false);
   return () => {SetLoading(false)};
  }
  ,[]);
  useEffect(() => {
    fetchDetails();
  }, []);

  const clickBackHandler = () => {
    setComicsInfo({});
    history.push("/");
  };


  return (
    <Fragment>
      <Header />
      <DetailsNavBar onClickButton={clickBackHandler} />
      <div className="box">
        <DetailsPrimaryPanel info={comicsInfo} Loading={loading} /> 
        <DetailImgBox source={comicsInfo.image} Loading={loading}/>
      </div>
    </Fragment>
  );
};

export default Details;
