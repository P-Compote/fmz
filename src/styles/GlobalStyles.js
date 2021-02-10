import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --blue: #2980b9;
    --container: 1080px;
  }
  
  html {
    background-color: var(--white);
    background-size: 450px;
    background-attachment: fixed;
  }

  body {
    font-size: 2rem;
    line-height: 1.8;
  }

  /* .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  } */

  img {
    max-width: 100%;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }
  .center {
    text-align: center;
  }
`;

export default GlobalStyles;
