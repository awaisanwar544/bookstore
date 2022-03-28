import { createStore, combineReducers } from 'redux';
import bookReducer from './books/books';
import statusReducer from './categories/categories';

const rootReducer = combineReducers({ books: bookReducer, status: statusReducer });

const store = createStore(rootReducer);

export default store;
