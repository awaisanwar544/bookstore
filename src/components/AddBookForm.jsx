import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBookForm = () => {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const dispatch = useDispatch();

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" value={title || ''} placeholder="Book title" onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" value={author || ''} placeholder="Author" onChange={(e) => setAuthor(e.target.value)} required />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (title && author) {
              const id = uuidv4();
              dispatch(addBook({ id, title, author }));
              setAuthor();
              setTitle();
            }
          }}
        >
          ADD BOOK

        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
