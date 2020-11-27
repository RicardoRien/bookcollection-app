import React, {  createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  favorites: localStorage.getItem('favorites') 
  ? JSON.parse(localStorage.getItem('favorites') )
  : [],
  completed: localStorage.getItem('completed') 
  ? JSON.parse(localStorage.getItem('completed')) 
  : []
};

// Create context:
export const GlobalContext = createContext(initialState); 

// Provider Components:
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Local Storage.
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(state.favorites));
    localStorage.setItem('completed', JSON.stringify(state.completed));
  }, [state]);

  // Actions
  const addBookToFavorites = (book) => {
    dispatch({ type: "ADD_BOOK_TO_FAVORITES", payload: book })
  };

  const removeBookFromFavorites = (id) => {
    dispatch({ type: "REMOVE_BOOK_FROM_FAVORITES", payload: id })
  };

  const addBookToCompleted = (book) => {
    dispatch({ type: "ADD_BOOK_TO_COMPLETED", payload: book })
  };

  const moveToFavorites = (book) => {
    dispatch({ type: "MOVE_TO_FAVORITES", payload: book })
  }

  const removeFromCompleted = (id) => {
    dispatch({ type: "REMOVE_FROM_COMPLETED", payload: id })
  }

  return (
    <GlobalContext.Provider 
      value={{ 
        favorites: state.favorites, 
        completed: state.completed,
        addBookToFavorites,
        removeBookFromFavorites,
        addBookToCompleted,
        moveToFavorites,
        removeFromCompleted
    }}>
      {props.children}
    </GlobalContext.Provider>
  )
};