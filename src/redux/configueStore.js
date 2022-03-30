import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import statusReducer from './categories/categories';

const reducers = combineReducers({ books: bookReducer, status: statusReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
