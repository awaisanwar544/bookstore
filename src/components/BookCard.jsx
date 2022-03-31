import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook } from '../redux/books/books';
import StyledBookCard from './styles/BookCard.styled';
import 'react-circular-progressbar/dist/styles.css';

const BookCard = ({ title, author, id }) => {
  const dispatch = useDispatch();
  return (
    <StyledBookCard>
      <div className="bookDetails">
        <p className="category">Category</p>
        <h3>{title}</h3>
        <p className="author">{author}</p>
        <ul>
          <li>
            <button type="button">Comments</button>
          </li>
          <div className="line" />
          <li>
            <button
              id={id}
              value="Remove"
              type="button"
              onClick={(event) => {
                dispatch(removeBook(event.target.id));
              }}
            >
              Remove
            </button>
          </li>
          <div className="line" />
          <li>
            <button type="button">Edit</button>
          </li>
        </ul>
      </div>
      <div className="progressBar">
        <CircularProgressbar className="bar" value={60} width="auto" />
        <div>
          <p className="progressValue">60%</p>
          <p className="progressStatus">Completed</p>
        </div>
      </div>
      <div className="book-read">
        <div className="separator" />
        <div className="chapters">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="current-lesson">Chapter 17</p>
          <button className="prog-btn" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </StyledBookCard>
  );
};

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookCard;
