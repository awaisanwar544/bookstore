import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;900&family=Roboto+Slab:wght@300;400;500;600;700;900&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    background-color: #fafafa;
    font-family: 'Montserrat', sans-serif;
  }

  .App {
    border-radius: 4px;
    box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.05);
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export default GlobalStyles;
