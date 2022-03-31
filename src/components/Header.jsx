import React from 'react';
import { Link } from 'react-router-dom';
import StyledHeader from './styles/Header.styled';

const Header = () => (
  <StyledHeader>
    <h1 className="logo">Bookstore CMS</h1>
    <ul>
      <li>
        <Link to="/" className="active">BOOKS</Link>
      </li>
      <li>
        <Link to="/categories">CATEGORIES</Link>
      </li>
    </ul>
    <div>
      <img src="userIcon.png" alt="" />
    </div>
  </StyledHeader>
);

export default Header;
