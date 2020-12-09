import React, { useState, useEffect } from 'react';
import { ResultCard } from './ResultCard';

export const Add = () => {
  // Hooks~
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await fetch (
          `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.REACT_APP_GB_KEY}&maxResults=20`
        );
        const resp = await req.json();

        setResults(resp.items);

      } catch (error) {
          console.log("error.message");
        };
    };
    if (query !== '') fetchData()
  }, [query]);

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          {/* Searchbar */}
          <div className="input-wrapper">
            <input 
              type="text" 
              placeholder="Search for a book" 
              value={query} 
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          
          {/* Rendering Fetch Data */}
          {results && (
            <ul className="results">
              {results.map((book) => (
                <li key={book.id}>
                  <ResultCard book={book} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
