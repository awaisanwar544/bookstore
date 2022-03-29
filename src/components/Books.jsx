import React from 'react';
import { useSelector } from 'react-redux';
import AddBookForm from './AddBookForm';
import BookCard from './BookCard';

const Books = () => {
  const books = useSelector((state) => state.books);
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
