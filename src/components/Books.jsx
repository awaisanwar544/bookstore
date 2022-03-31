import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBookForm from './AddBookForm';
import BookCard from './BookCard';
import { fetchBooks } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  return (
    <>
      <div>
        {books.map((item) => (
          <BookCard
            title={item.title}
            author={item.author}
            key={item.id}
            id={item.id}
          />
        ))}
      </div>
      <AddBookForm />
    </>
  );
};

export default Books;
