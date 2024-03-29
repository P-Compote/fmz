import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --blue: #3742fa;
    --footer: #34495e;
    --spotify: #1db954;
    --facebook: #3b5998;
    --youtube: #ff0000;
    --instagram: #dd2a7b;
    --container: 1080px;
  }
  
  html {
    background-color: var(--white);
    background-size: 450px;
    background-attachment: fixed;
    overflow-y: scroll;
  }

  body {
    font-size: 1.8rem;
    line-height: 1.8;
  }

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
