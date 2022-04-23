import styled from 'styled-components';

const StyledBookCard = styled.div`

  display: flex;
  align-items: center;
  margin: 2.313rem 6.25rem 0;
  padding: 1.688rem;
  border-radius: 4px;
  border: solid 1px #e8e8e8;
  background-color: #ffffff;

  .bookDetails {
    display: flex;
    flex-direction: column;
    right: auto;
  }

  .category {
    margin: 0 2.438rem 0 0;
    opacity: 0.5;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.875rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #121212;
}

  h3 {
    margin: 0.188rem 0 0;
    font-family: 'Roboto Slab', serif;;
    font-size: 1.375rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.2px;
    color: #121212;
}

  .author {
    font-family: 'Roboto Slab', serif;
    font-size: 0.875rem;
    font-weight: 300;
    margin: 0;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #4386bf;
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
  }

  button {
    font-family: 'Roboto Slab', serif;
    font-size: 0.875rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #4386bf;
    background: none;
    border: none;
    cursor: pointer;
  }

  .line {
    width: 0.125rem;
    height: 1.5rem;
    margin: 0.75rem 1.063rem 0 0.938rem;
    border: solid 1px #e8e8e8;
  }

  .progressBar {
    display: flex;
    justify-content: flex-end;
    flex-grow: 3;
    column-gap: 1em;
    height: 4.25rem;
  }

  .CircularProgressbar {
    width: auto;
  }

  .bar {
    left: auto;
  }

  .progressValue {
    margin: 0.063rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #121212;
}

.progressStatus {
    width: 5rem;
    height: 1.125rem;
    margin: 0.0635rem;
    opacity: 0.5;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.875rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #121212;
}

.book-read {
  display: flex;
  left: auto;
}

.separator {
  width: 0.125rem;
  height: 4.375rem;
  margin: 1.125rem 3.688rem 0 4.938rem;
  border: solid 1px #e8e8e8;
}

.prog-btn {
  border-radius: 3px;
  background-color: #0290ff;
  padding: 0.438rem 1.188rem 0.5rem 1.375rem;
  font-family: 'Roboto Slab', serif;
  font-size: 0.813rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.5px;
  text-align: center;
  color: #fff;

}

.current-lesson {
  font-family: 'Roboto Slab', serif;
  font-size: 1rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.4px;
  color: #121212;
}

.current-chapter {
  font-family: 'Roboto Slab', serif;
  opacity: 0.5;
  font-size: 0.813rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #121212;
}

`;

export default StyledBookCard;
