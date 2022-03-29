import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBookForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addBook({
      id: Date.now(),
      title: event.target[0].value,
      author: event.target[1].value,
    }));
  };

  return (
    <form onSubmit={(event) => { handleSubmit(event); }}>
      <h2>Add New Book</h2>
      <input type="text" name="bookname" placeholder="Book title" />
      <input type="text" name="title" placeholder="Add title" />
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default AddBookForm;
