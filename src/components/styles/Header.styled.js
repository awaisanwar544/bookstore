import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: auto;
  padding: 1.438rem 6.188rem;
  background-color: #fff;

  h1 {
    font-size: 1.875rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #0290ff;
  }

  ul {
    display: flex;
    column-gap: 2em;
    list-style: none;
  }

  a {
    font-size: 0.813rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1.9px;
    color: grey;
    text-decoration: none;
  }

  a:hover {
    color: #121212;
  }

  .active {
    color: #121212;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    padding: 0.875rem;
    border: solid 1px #e8e8e8;
    margin-left: auto;
  }

  img {
    width: 1.063rem;
    height: 1.063rem;
  }
`;

export default StyledHeader;
