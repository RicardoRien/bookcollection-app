import React, { useContext } from 'react';
import { GlobalContext } from './../context/GlobalState';
import { BookCard } from './BookCard'

export const Favorites = () => {
  // Hooks ~
  const { favorites } = useContext(GlobalContext);

  return (
    <div className="book-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Favorite Books</h1>

          <span className="count-pill">
            {favorites.length} {favorites.length === 1 ? 'Book' : 'Books'}
          </span>
        </div>

        {favorites.length > 0 ? (
          <div className="book-grid">
            {favorites.map( book => (
              <BookCard book={book} type="favorites" />
            ))}
          </div>
        ) : (
          <h2 className="no-book">No books in your list of favorites.</h2>
        )}
      </div>
    </div>
  )
}
