import React from 'react';
import Card from './UI/Card'
import './ComicList.css';

const ComicList = ({comics, listView, onClickCard}) => {

  let switcherView = listView ? 'wrapper list' : 'wrapper';

  const clickedCard = (detailUrl) => {
    onClickCard(detailUrl);
  }

  return (
    <ul className={switcherView}>
      {comics.map((comic) => (
        <Card
          image={comic.image}
          key={comic.id}
          id={comic.id}
          name={comic.name}
          date={comic.dateAdded}
          issueNumber={comic.issueNumber}
          detailUrl={comic.detailUrl}
          listView={listView}
          onClicked={clickedCard}
        />
      ))}
    </ul>
  );
};

export default ComicList;