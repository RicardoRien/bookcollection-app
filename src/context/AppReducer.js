export default function appReducer(state, action) {
  switch(action.type) {
    case "ADD_BOOK_TO_FAVORITES":
      return {
        ...state,
        favorites: [action.payload, ...state.favorites]
      };
    case "REMOVE_BOOK_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter(
          (book) => book.id !== action.payload
        ),
      };
    case "ADD_BOOK_TO_COMPLETED":
      return {
        ...state,
        favorites: state.favorites.filter( 
          (book) => book.id !== action.payload.id
        ), 
        completed: [action.payload, ...state.completed]
      };
    case "MOVE_TO_FAVORITES":
      return {
        ...state,
        completed: state.completed.filter(
          (book) => book.id !== action.payload.id
        ),
        favorites: [action.payload, ...state.favorites]
      };
    case "REMOVE_FROM_COMPLETED":
      return {
        ...state,
        completed: state.completed.filter(
          (book) => book.id !== action.payload
        ),
      };
    default:
      return state;
  };
 };