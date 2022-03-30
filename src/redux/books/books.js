// action types
const FETCH_BOOKS = 'FETCH_BOOKS';
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/9AXCsCxdH0qCaJZzZe1J/books';

const initialState = [];
const fetchedState = [];
let newBook = {};
let delBook = {};

// action creators
export const fetchBooks = () => async (dispatch) => {
  const response = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);
  let temp = {};
  const fetchedBooks = Object.entries(response);
  fetchedBooks.forEach((item) => {
    temp = {
      id: item[0],
      author: item[1][0].author,
      title: item[1][0].title,
    };
    fetchedState.push(temp);
  });
  dispatch({
    type: FETCH_BOOKS,
    payload: temp,
  });
};

export const addBook = ({ id, author, title }) => {
  newBook = {
    id,
    author,
    title,
  };
  return (async (dispatch) => {
    const data = {
      item_id: newBook.id,
      title: newBook.title,
      author: newBook.author,
      category: '',
    };
    await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    dispatch({
      type: ADD_BOOK,
      payload: newBook,
    });
  });
};

export const removeBook = (id) => {
  delBook = { item_id: id };
  return (async (dispatch) => {
    await fetch(`${URL}/${delBook.item_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(delBook),
    });
    dispatch({
      type: REMOVE_BOOK,
      payload: delBook.item_id,
    });
  });
};

// reducers

const bookReducer = (state = initialState, action = {}) => {
  if (action.type === ADD_BOOK) {
    return [...state, action.payload];
  }
  if (action.type === REMOVE_BOOK) {
    return state.filter((item) => item.id !== action.payload);
  }
  if (action.type === FETCH_BOOKS) {
    return [...state, ...fetchedState];
  }
  return state;
};

export default bookReducer;
