import React, { useState, useCallback, useEffect } from "react";
import ComicList from "./components/ComicList";
import ViewSwitcher from "./components/UI/ViewSwitcher";
import ComicDetails from "./components/ComicDetails";
import "./app.css";

function App() {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [listView, setListView] = useState(false);
  const [detailIsShown, setDetailIsShown] = useState(false);
  const [comicsInfo, setComicsInfo] = useState({});

  const fetchComicVinesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://comicvine.gamespot.com/api/issues/?api_key=82c0a7bade3e1084572773a68abe4ba7e4d21a76&sort=date_added:desc&limit=100&format=json"
      );
     
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const transformedComics = data.results.map((comicData) => {
        return {
          id: comicData.id,
          image: comicData.image.original_url,
          dateAdded: comicData.date_added,
          name: comicData.name,
          issueNumber: comicData.issue_number,
          detailUrl: comicData.api_detail_url,
        };
      });

//Some comics has no name and their field appears as "null".
// In order to show only named comic books i've filtered transformedComics Array:

const namedComics = transformedComics.filter(
        (comic) => comic.name !== null
      );
      setComics(namedComics);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchComicVinesHandler();
  }, [fetchComicVinesHandler]);

  const listViewHandler = () => {
    if (listView) {
      return;
    }
    setListView(true);
  };
  const gridViewHandler = () => {
    if (!listView) {
      return;
    }
    setListView(false);
  };

// For Details issue view 
  const detailViewHandler = async (url) => {
    setIsLoading(true);
    const comicDetailQuery = await fetch(
      url +
        "?api_key=82c0a7bade3e1084572773a68abe4ba7e4d21a76&format=json"
    );
    const comicDetails = await comicDetailQuery.json();
    
    setComicsInfo({
      id: comicDetails.results.id,
      image: comicDetails.results.image.original_url,
      characters: comicDetails.results.character_credits,
      team: comicDetails.results.team_credits,
      location: comicDetails.results.location_credits,
    });
    setIsLoading(false);
    setDetailIsShown(true);
  };
 
  const clickBackHandler = () => {
    setDetailIsShown(false);
    setComicsInfo({});
  };

  let content = <p>Found no comics.</p>;
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <h1>Loading...</h1>;
  }
  if (comics.length > 0) {
    content = (
      <ComicList
        comics={comics}
        listView={listView}
        onClickCard={detailViewHandler}
      />
    );
  }

  return (
    <React.Fragment>
      <h1>ComicBook</h1> 
      {detailIsShown && <ComicDetails info={comicsInfo} onClickBack={clickBackHandler}/>}
      {!detailIsShown && (
        <ViewSwitcher
          listView={listView}
          onClicklist={listViewHandler}
          onClickGrid={gridViewHandler}
        />
      )}
      {!detailIsShown && <section>{content}</section>}
    </React.Fragment>
  );
}

export default App;
