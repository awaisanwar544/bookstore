import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header-container">
    <h1 className="logo">Bookstore CMS</h1>
    <ul>
      <li>
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </div>
);

export default Header;
