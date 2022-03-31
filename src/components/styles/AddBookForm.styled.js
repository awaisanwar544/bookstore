import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.438rem 6.188rem;

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.25rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.18px;
    color: #888888;
}

  form {
    display: flex;
    width: 100%;
    column-gap: 1em;
  }

  input {
    padding: 1.063rem;
    flex-grow: 1;
    border-radius: 4px;
    border: solid 1px #e8e8e8;
    background-color: #fff;
  }

  button {
    flex-grow: 1;
    padding: 0.801rem 1.188rem 0.886rem 1.375rem;
    border: none;
    border-radius: 3px;
    color: #ffffff;
    background-color: #0290ff;
  }

  #title-input {
    flex-grow: 3;
  }
`;

export default StyledDiv;
