// action types
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [];

// action creators
export const addBook = ({ id, author, title }) => ({
  type: ADD_BOOK,
  payload: {
    id,
    author,
    title,
  },
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

// reducers

const bookReducer = (state = initialState, action = {}) => {
  if (action.type === ADD_BOOK) {
    return [...state, action.payload];
  }
  if (action.type === REMOVE_BOOK) {
    return (state.filter((item) => item.id === action.payload));
  }
  return state;
};

export default bookReducer;
