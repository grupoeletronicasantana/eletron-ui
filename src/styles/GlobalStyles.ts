import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;

    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.colors.gray90};
    color: ${({ theme }) => theme.colors.gray20};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: Roboto, sans-serif;
    outline: none;
    font-weight: 400;
  }

  body, button {
    font-size: 0.9375rem;
  }

  button, label {
    font-weight: 500;
  }

  label, input, textarea {
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5  {
    font-family: Poppins, sans-serif;
    outline: none;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.3s;
  }

  button:hover, a:hover {
    filter: brightness(0.8);
  }
`;

export default GlobalStyles;
