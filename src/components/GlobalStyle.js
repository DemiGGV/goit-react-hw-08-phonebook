import { css } from '@emotion/react';
import 'modern-normalize';

export const GlobalStyle = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    text-align: center;
  }
  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #e7ecf2;
    line-height: 1.5;
  }

  ul {
    margin-top: 20px;
  }

  label {
    display: flex;
    flex-direction: column;
  }

  button {
    background-color: #ffffff;
    border: 1px solid #cccccc;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
    transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
    border-radius: 4px;
    display: block;
    width: 120px;
    font-size: 14px;
    text-align: center;
    padding: 4px 6px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      border-color: rgba(82, 168, 236, 0.8);
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset,
        0 0 8px rgba(82, 168, 236, 0.6);
      outline: 0 none;
    }
  }

  form button {
    margin: 20px auto;
  }
`;
