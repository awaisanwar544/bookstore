import { createStore, combineReducers } from 'redux';
import bookReducer from './books/books';
import statusReducer from './categories/categories';

const reducers = combineReducers({ books: bookReducer, status: statusReducer });

const store = createStore(reducers);

export default store;
