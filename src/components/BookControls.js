import React, { useContext } from 'react';
import { GlobalContext } from './../context/GlobalState';

export const BookControls = ({ book, type }) => {
  const {
    removeBookFromFavorites, 
    addBookToCompleted, 
    moveToFavorites, 
    removeFromCompleted,
  } = useContext(GlobalContext)

  return (
    <div className="inner-card-controls">
      <div className="flex-ctrl-card">
        {type === 'favorites' && (
          <>
            <button className="ctrl-btn" onClick={() => addBookToCompleted(book)} >
              <i className="fa-fw far fa-eye"></i>
            </button>

            <button className="ctrl-btn" >
              <a className="ctrl-btn-link" href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-info-circle"></i>
              </a>
            </button>

            <button className="ctrl-btn" onClick={() =>removeBookFromFavorites(book.id)} >
              <i className="fas fa-backspace"></i>
            </button>
          </>
        )}

        {type === 'completed' && (
          <>
            <button className="ctrl-btn" onClick={() => moveToFavorites(book)} >
              <i className="fa-fw far fa-eye-slash"></i>
            </button>

            <button className="ctrl-btn" >
              <a className="ctrl-btn-link" href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-info-circle"></i>
              </a>
            </button>

            <button className="ctrl-btn" onClick={() => removeFromCompleted(book.id)}>
              <i className="fas fa-backspace"></i>
            </button>
          </>
        )}
      </div>
    </div>
  );
};
