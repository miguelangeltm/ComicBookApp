import React, { useState, useCallback, useEffect } from "react";
import Header from '../../Atoms/text/Header/Header';
import MainNavBar from '../../Molecules/MainNavBar/MainNavBar';
import ComicList from '../../Organisms/ComicList/ComicList';
import "./Main.css";

function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [listView, setListView] = useState(false);
  const [comics, setComics] = useState({});

  const fetchComicVinesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://comicvine.gamespot.com/api/issues/?api_key=82c0a7bade3e1084572773a68abe4ba7e4d21a76&sort=date_added:desc&limit=30&format=json"
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

  let content = <p>Found no comics.</p>;
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <h1>Loading...</h1>;
  }
  if (comics.length > 0) {
    content = <ComicList comics={comics} viewMode={listView} />;
  }

  return (
    <React.Fragment>
      <Header />
      <MainNavBar
        listView={listView}
        onClicklist={listViewHandler}
        onClickGrid={gridViewHandler}
      />
      <section>{content}</section>
    </React.Fragment>
  );
}

export default React.memo(Main);
