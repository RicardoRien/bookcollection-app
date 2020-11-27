import React, { useContext } from 'react';
import { GlobalContext } from './../context/GlobalState';

export const ResultCard = ({ book }) => {
  // Hooks ~
  // importing from GlobalContec.
  const { 
    addBookToFavorites, 
    addBookToCompleted, 
    favorites, 
    completed } = useContext(GlobalContext);

  let storedBook = favorites.find(({id}) => id === book.id);
  let storedBookCompleted = completed.find(({id}) => id === book.id);

  const favoritesDisabled = storedBook 
                            ? true 
                            : storedBookCompleted 
                            ? true 
                            : false;

  const completedDiabled = storedBookCompleted ? true : false;

  return (
    <div className="result-card">
      {/* Cards w/Covers */}
      <div className="cover-wrapper">
        {book.volumeInfo.imageLinks ? (
          <img 
            src={book.volumeInfo.imageLinks.thumbnail} 
            alt={book.volumeInfo.title} 
          />
        ) : (
          // Return empty cover
          <div className="filler-cover">
            <p className="no-available">
              Cover No Available
            </p>
          </div>
        )}
      </div>

      {/* Title & Date */}  
      <div className="info">
        <div className="header">
          <h3 className="title">{book.volumeInfo.title}</h3>
            <h4 className="release-date">
              {book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate.substring(0, 4) : '-'}
            </h4>
        </div>

        {/* Buttons */}
        <div className="controls">
          <button
            className="btn-result"
            disabled={favoritesDisabled}
            onClick={() => addBookToFavorites(book)}
          >
            Add to favorites
          </button>

          <button 
            className="btn-result"
            disabled={completedDiabled}
            onClick={() => addBookToCompleted(book)}
          >
            Add to completed
          </button>
        </div>
      </div>
    </div>
  );
};
