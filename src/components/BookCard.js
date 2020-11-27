import React from 'react'
import { BookControls } from './BookControls';

export const BookCard = ({ book, type }) => {
  return (
    <div className="book-card">
      <div className="overlay"></div>

      {book.volumeInfo.imageLinks ? (
        <img 
          src={book.volumeInfo.imageLinks.thumbnail} 
          alt={book.volumeInfo.title}
          loading="lazy"
        />
        ) : (
        <div className="filler-cover">
          <p className="no-available">
            Cover No Available
          </p>
        </div>
      )}
      <BookControls type={type} book={book} />
    </div>
  )
}
