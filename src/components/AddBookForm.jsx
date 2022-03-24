import React from 'react';

const AddBookForm = () => (
  <form>
    <h2>Add New Book</h2>
    <input type="text" name="bookname" placeholder="Book title" />
    <input type="dropdown" name="category" placeholder="Select category" />
    <input type="submit" value="Add Book" />
  </form>
);

export default AddBookForm;
