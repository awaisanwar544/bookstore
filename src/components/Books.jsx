import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBookForm from './AddBookForm';
import BookCard from './BookCard';
import { fetchBooks } from '../redux/books/books';
import StyledDiv from './styles/Books.styled';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    if (books.length === 0) {
      dispatch(fetchBooks());
    }
  }, []);
  return (
    <StyledDiv>
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
      <div className="seperator" />
      <AddBookForm />
    </StyledDiv>
  );
};

export default Books;
