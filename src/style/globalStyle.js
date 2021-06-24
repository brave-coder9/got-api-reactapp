import { breakpoints } from "style";
import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    height: 100%;
    font-family: 'Mabry Pro';
  }
  .App {
    height: 100vh;
  }
  .cursor {
    cursor: pointer;
  }
  h1 {
    font-size: 60px;
    font-family: 'Mabry Pro Medium';
    @media (max-width: ${breakpoints.sm}px) {
      font-size: 32px;
    }
  }
  h2 {
    font-size: 44px;
    font-family: 'Mabry Pro Medium';
    @media (max-width: ${breakpoints.sm}px) {
      font-size: 32px;
    }
  }
  h3 {
    font-size: 24px;
    font-family: 'Mabry Pro';
  }
  h4 {
    font-size: 18px;
    line-height: 28px;
    font-family: 'Mabry Pro';
  }
  h5 {
    font-family: 'Mabry Pro';
  }
  h6 {
    font-family: 'Mabry Pro';
  }
  a {
    /* text-decoration: underline; */
  }
  .container {
    @media (min-width: 1484px) {
      min-width: 1484px;
    }
  }
  button, .button {
    font-size: 18px;
    font-weight: 700;
    border: none;
    transition: all .45s;
  }
  .btn-redLight {
    height: 25px;
    border-radius: 5px;
    color: white;
    font-size: 15px;
    background-color: #E01414;
    padding: 0 16px;
    line-height: 21px;
    &:hover {
      background-color: #F15C5C;
    }
    &:disabled {
      background-color: #F15C5C;
      cursor: not-allowed;
    }
  }
  .btn-red {
    height: 25px;
    border-radius: 5px;
    color: white;
    font-size: 15px;
    background-color: #DF1919;
    padding: 0 16px;
    line-height: 21px;
    &:hover {
      background-color: #E08218;
    }
    &:disabled {
      background-color: #E08218;
      cursor: not-allowed;
    }
  }
  .btn-darkgreen {
    height: 25px;
    border-radius: 5px;
    color: white;
    font-size: 15px;
    background-color: #0B4141;
    padding: 0 16px;
    line-height: 21px;
    &:hover {
      background-color: #0F6468;
    }
    &:disabled {
      background-color: #0F6468;
      cursor: not-allowed;
    }
  }
  .btn-orange {
    height: 25px;
    border-radius: 5px;
    color: white;
    font-size: 15px;
    background-color: #CE4E05;
    padding: 0 16px;
    line-height: 21px;
    &:hover {
      background-color: #E08218;
    }
    &:disabled {
      background-color: #E08218;
      cursor: not-allowed;
    }
  }
  .bg-gray {
    background: rgba(0, 0, 0, 0.13);
  }
`;

export default GlobalStyle;
