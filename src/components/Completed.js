import React, { useContext } from 'react';
import { GlobalContext } from './../context/GlobalState';
import { BookCard } from './BookCard';

export const Completed = () => {
  const {completed} = useContext(GlobalContext);

  return (
    <div className="book-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">
            Books completed
          </h1>

          <span className="count-pill">
            {completed.length} {completed.length === 1 ? 'Book' : 'Books'}
          </span>
        </div>

        {completed.length > 0 ? (
          <div className="book-grid">
            {completed.map( book => (
              <BookCard book={book} type="completed" />
            ))}
          </div>
        ) : (
          <h2 className="no-book">Have you read any books yet?</h2>
        )}

      </div>
    </div>
  )
}
