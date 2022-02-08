import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../../Molecules/Card/Card';
import './ComicList.css';

const ComicList = ({comics, viewMode}) => {
  const history = useHistory();
  let listMode = viewMode ? 'wrapper list' : 'wrapper';

  const clickedCard = (detailUrl, id) => {
      history.push("/details/"+id+"/", {Url: detailUrl});
  }

  return (
    <ul className={listMode}>
      {comics.map((comic) => (
        <Card
          key={comic.id}
          id={comic.id}
          name={comic.name}
          issueNumber={comic.issueNumber}
          date={comic.dateAdded}
          image={comic.image}
          detailUrl={comic.detailUrl}
          viewMode={viewMode}
          onClicked={clickedCard}
        />
      ))}
    </ul>
  );
};

export default ComicList;