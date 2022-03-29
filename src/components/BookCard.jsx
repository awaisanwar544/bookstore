import React from 'react';
import { PropTypes } from 'prop-types';

const BookCard = ({ title, author, id }) => (
  <div id={id} className="book">
    <h3>{title}</h3>
    <p>{author}</p>
    <input type="button" value="Remove" />
  </div>
);

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default BookCard;
