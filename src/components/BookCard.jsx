import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookCard = ({ title, author, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="book">
      <h3>{title}</h3>
      <p>{author}</p>
      <input
        id={id}
        type="button"
        value="Remove"
        onClick={(event) => {
          dispatch(removeBook(event.target.id));
        }}
      />
    </div>
  );
};

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default BookCard;
