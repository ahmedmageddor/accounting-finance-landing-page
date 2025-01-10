// src/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #4caf50;
    --secondary-color: #ffc107;
    --background-color: #f0f2f5;
    --text-color: #2b2d42;
    --header-bg-color: #013f13;
    --header-text-color: #ffc107;
    --font-family: 'Roboto', sans-serif;
    --font-size-base: 16px;
    --font-size-large: 1.5rem;
    --link-color: #4caf50; /* New variable for link color */
    --link-hover-color: #388e3c; /* New variable for link hover color */
    --border-radius: 8px; /* Consistent border radius */
    --transition-speed: 0.3s; /* Consistent transition speed */
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: var(--background-color);
    font-family: var(--font-family);
    color: var(--text-color);
    font-size: var(--font-size-base);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, p {
    margin: 0.5em 0;
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3 {
    line-height: 1.2;
  }

  a {
    color: var(--link-color);
    text-decoration: none;
    transition: color var(--transition-speed);
  }

  a:hover {
    color: var(--link-hover-color);
  }

  button, input, textarea {
    font-family: var(--font-family);
  }

  button {
    border-radius: var(--border-radius);
    transition: background-color var(--transition-speed), transform var(--transition-speed);
  }

  button:hover {
    transform: scale(1.05);
  }

  button:active {
    transform: scale(1.1);
  }

  .section {
    padding: 4em 2em;
    margin: 2em 0;
    background: #fff;
    border-radius: var(--border-radius);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  img.lazy {
    opacity: 0;
    transition: opacity 1s;
  }

  img.lazy.loaded {
    opacity: 1;
  }

  html {
    scroll-behavior: smooth;
  }
`;

export default GlobalStyles;
